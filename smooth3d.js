'use strict';

(function(){
  const pickupDefs=[
    {id:'crown',name:'粉紅皇冠',kind:'crown',pos:[-4.7,0,-2.8],quiz:false,color:'#ff5fa8'},
    {id:'dress',name:'換裝小裙',kind:'dress',pos:[-2.1,0,2.9],quiz:true,color:'#ff8ab5'},
    {id:'pool',name:'藍色泳池',kind:'pool',pos:[1.2,0,-3.1],quiz:false,color:'#43bff2'},
    {id:'bath',name:'泡泡浴缸',kind:'bath',pos:[4.0,0,1.9],quiz:true,color:'#78d5ff'},
    {id:'snack',name:'食物架',kind:'snack',pos:[-5.0,0,2.4],quiz:false,color:'#ffcc57'},
    {id:'book',name:'紫色小書',kind:'book',pos:[2.8,0,3.2],quiz:false,color:'#b790ff'}
  ];
  const characterThemes={
    storybook:{hud:'小書公主版',promptName:'小書公主'},
    forest:{hud:'森林傳說版',promptName:'綠衣冒險者與金髮公主'}
  };
  const state={
    running:false,renderer:null,scene:null,camera:null,clock:null,layer:null,viewport:null,
    objective:null,prompt:null,quizBox:null,quizTag:null,quizText:null,quizOpts:null,
    keys:new Set(),player:null,playerRoot:null,pickups:[],sparkles:[],collected:new Set(),
    nearest:null,quiz:null,onExit:null,onReward:null,rewarded:false,resizeObserver:null,
    raf:0,lastPrompt:'',character:'storybook',mobileLite:false,quality:'standard',lowPower:false,reducedFx:false
  };

  function $(id){return document.getElementById(id);}
  function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
  function storageKey(k){try{return window.PMG_PROFILE_STORAGE_KEY?window.PMG_PROFILE_STORAGE_KEY(k):k;}catch(e){return k;}}
  function lsGet(k,d){try{const v=JSON.parse(localStorage.getItem(storageKey(k)));return v==null?d:v;}catch(e){return d;}}
  function lsSet(k,v){try{localStorage.setItem(storageKey(k),JSON.stringify(v));}catch(e){}}
  function playSfx(name){try{if(typeof sfx!=='undefined'&&sfx&&sfx[name])sfx[name]();}catch(e){}}
  function readExperience(){
    const exp=typeof window.PMG_GET_EXPERIENCE==='function'?window.PMG_GET_EXPERIENCE():{};
    const quality=['lite','standard','vivid'].includes(exp.quality)?exp.quality:'standard';
    return {quality,reducedFx:!!exp.reducedFx};
  }
  function qualityPixelCap(){
    if(state.quality==='vivid'&&!state.mobileLite)return 1.8;
    if(state.quality==='standard')return 1.35;
    return 1.05;
  }
  function detailCount(base){
    const ratio=state.reducedFx ? .35 : (state.quality==='vivid'?1:(state.quality==='standard' ? .72 : .48));
    return Math.max(1,Math.round(base*ratio));
  }

  function start(opts={}){
    stop();
    state.onExit=opts.onExit||null;
    state.onReward=opts.onReward||null;
    state.layer=$('smooth3dLayer');
    state.viewport=$('smooth3dViewport');
    state.objective=$('smoothObjective');
    state.prompt=$('smoothPrompt');
    state.quizBox=$('smooth3dQuiz');
    state.quizTag=state.quizBox.querySelector('.smoothQuizTag');
    state.quizText=state.quizBox.querySelector('.smoothQuizText');
    state.quizOpts=state.quizBox.querySelector('.smoothQuizOpts');
    state.layer.classList.remove('hidden');
    state.collected=new Set();
    state.pickups=[];
    state.sparkles=[];
    state.nearest=null;
    state.quiz=null;
    state.rewarded=false;
    state.character=characterThemes[opts.character]?opts.character:'storybook';
    const exp=readExperience();
    state.quality=exp.quality;
    state.reducedFx=exp.reducedFx;
    state.mobileLite=matchMedia('(pointer:coarse), (max-width: 760px)').matches;
    state.lowPower=state.mobileLite||state.quality==='lite'||state.reducedFx;

    if(!window.THREE){
      setPrompt('3D 引擎沒有載入，請檢查 vendor/three.r149.min.js。');
      return;
    }

    buildScene();
    bindControls();
    resize();
    state.running=true;
    state.clock=new THREE.Clock();
    updateHud();
    state.renderer.setAnimationLoop(loop);
  }

  function stop(){
    if(state.renderer)state.renderer.setAnimationLoop(null);
    state.running=false;
    unbindControls();
    if(state.resizeObserver){state.resizeObserver.disconnect();state.resizeObserver=null;}
    if(state.renderer){
      state.renderer.forceContextLoss();
      state.renderer.dispose();
      if(state.renderer.domElement&&state.renderer.domElement.parentNode){
        state.renderer.domElement.parentNode.removeChild(state.renderer.domElement);
      }
    }
    if(state.scene)disposeObject(state.scene);
    state.renderer=null;state.scene=null;state.camera=null;state.clock=null;state.player=null;state.playerRoot=null;
    state.pickups=[];state.sparkles=[];state.keys.clear();state.quiz=null;
    if(state.quizBox)state.quizBox.classList.add('hidden');
  }

  function disposeObject(obj){
    obj.traverse((child)=>{
      if(child.geometry)child.geometry.dispose();
      const mat=child.material;
      if(Array.isArray(mat))mat.forEach(disposeMaterial);
      else if(mat)disposeMaterial(mat);
    });
  }
  function disposeMaterial(mat){
    Object.keys(mat).forEach((k)=>{if(mat[k]&&mat[k].isTexture)mat[k].dispose();});
    mat.dispose();
  }

  function mat(color,roughness=.78,metalness=0){
    return new THREE.MeshStandardMaterial({color,roughness,metalness});
  }
  function makeMesh(geo,color){
    const mesh=new THREE.Mesh(geo,mat(color));
    mesh.castShadow=true;
    mesh.receiveShadow=true;
    return mesh;
  }
  function add(parent,obj,x=0,y=0,z=0){
    obj.position.set(x,y,z);
    parent.add(obj);
    return obj;
  }

  function buildScene(){
    state.scene=new THREE.Scene();
    state.scene.background=new THREE.Color('#a8ddf2');
    state.scene.fog=new THREE.Fog('#a8ddf2',18,38);
    state.camera=new THREE.PerspectiveCamera(48,16/9,.1,80);
    state.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
    state.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,qualityPixelCap()));
    if('outputColorSpace' in state.renderer&&THREE.SRGBColorSpace)state.renderer.outputColorSpace=THREE.SRGBColorSpace;
    else if('outputEncoding' in state.renderer&&THREE.sRGBEncoding)state.renderer.outputEncoding=THREE.sRGBEncoding;
    if(THREE.ACESFilmicToneMapping)state.renderer.toneMapping=THREE.ACESFilmicToneMapping;
    state.renderer.toneMappingExposure=.72;
    state.renderer.shadowMap.enabled=state.quality==='vivid'&&!state.mobileLite&&!state.reducedFx;
    state.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    state.viewport.innerHTML='';
    state.viewport.appendChild(state.renderer.domElement);
    state.renderer.domElement.addEventListener('webglcontextlost',(e)=>{e.preventDefault();setPrompt('3D 畫面暫停，重新進入即可恢復。');});

    const hemi=new THREE.HemisphereLight('#fff9ec','#6aa05e',.82);
    state.scene.add(hemi);
    const sun=new THREE.DirectionalLight('#fff1c9',.86);
    sun.position.set(-5,9,6);
    sun.castShadow=state.renderer.shadowMap.enabled;
    sun.shadow.mapSize.set(state.lowPower?512:1024,state.lowPower?512:1024);
    sun.shadow.camera.left=-12;sun.shadow.camera.right=12;sun.shadow.camera.top=12;sun.shadow.camera.bottom=-12;
    state.scene.add(sun);

    createWorld();
    createPlayer();
    pickupDefs.forEach(createPickup);

    state.resizeObserver=new ResizeObserver(resize);
    state.resizeObserver.observe(state.viewport);
  }

  function createWorld(){
    const scene=state.scene;
    const ground=makeMesh(new THREE.CylinderGeometry(9.8,9.8,.22,96),'#6dbd58');
    ground.scale.set(1.28,1,1);
    add(scene,ground,0,-.13,0);

    const path=makeMesh(new THREE.TorusGeometry(4.6,.08,12,110),'#d9b885');
    path.rotation.x=Math.PI/2;
    path.scale.set(1.28,.76,1);
    add(scene,path,0,.02,0);

    createSoftPool(scene,1.2,-3.1);
    createCloset(scene,-2.1,2.9);
    createBath(scene,4.0,1.9);
    createFoodShelf(scene,-5.0,2.4);
    createPurpleHouse(scene,5.1,-2.5);
    createCastleGate(scene,-4.7,-2.8);
    createMiniBook(scene,2.8,3.2);
    createPaperSun(scene,-6.5,-4.6);
    if(state.character==='forest')createForestAdventureProps(scene);

    const flowerCount=detailCount(18);
    for(let i=0;i<flowerCount;i++){
      const a=i/flowerCount*Math.PI*2;
      const r=8.3+Math.sin(i*2.1)*.45;
      createFlower(scene,Math.cos(a)*r,Math.sin(a)*r,i);
    }
  }

  function createSoftPool(scene,x,z){
    const rim=makeMesh(new THREE.CylinderGeometry(1.65,1.65,.16,64),'#1f2228');
    rim.scale.set(1.45,1,.72);
    add(scene,rim,x,.08,z);
    const water=makeMesh(new THREE.CylinderGeometry(1.48,1.48,.18,64),'#35baf0');
    water.scale.set(1.42,1,.68);
    water.material.transparent=true;water.material.opacity=.86;
    add(scene,water,x,.16,z);
    for(let i=0;i<4;i++){
      const wave=makeMesh(new THREE.TorusGeometry(.38+i*.15,.012,8,40),'#b7f4ff');
      wave.rotation.x=Math.PI/2;
      wave.scale.set(1.55,.6,1);
      add(scene,wave,x-.55+i*.36,.28,z+.1*Math.sin(i));
    }
  }

  function createCloset(scene,x,z){
    const base=makeMesh(new THREE.BoxGeometry(1.55,.16,.35),'#f0b0c9');
    add(scene,base,x,.55,z);
    const pole=makeMesh(new THREE.CylinderGeometry(.025,.025,1.35,16),'#5a5360');
    pole.rotation.z=Math.PI/2;
    add(scene,pole,x,.98,z);
    ['#ff8ab5','#ffc0d7','#e58cff'].forEach((color,i)=>{
      const dress=makeMesh(new THREE.ConeGeometry(.22,.58,28),color);
      dress.rotation.z=Math.PI;
      add(scene,dress,x-.45+i*.45,.63,z+.03);
      const top=makeMesh(new THREE.SphereGeometry(.14,18,12),color);
      top.scale.set(.9,.5,.5);
      add(scene,top,x-.45+i*.45,.92,z+.03);
    });
  }

  function createBath(scene,x,z){
    const tub=makeMesh(new THREE.CapsuleGeometry(.65,.78,10,28),'#f7fbff');
    tub.rotation.z=Math.PI/2;
    tub.scale.set(1.05,.48,.64);
    add(scene,tub,x,.42,z);
    const water=makeMesh(new THREE.CylinderGeometry(.72,.72,.07,48),'#55c6ef');
    water.scale.set(1.12,1,.56);
    add(scene,water,x,.58,z);
    for(let i=0;i<12;i++){
      const b=makeMesh(new THREE.SphereGeometry(.08+((i%3)*.02),14,10),'#ffffff');
      b.material.transparent=true;b.material.opacity=.86;
      add(scene,b,x-.58+(i%6)*.23,.68+(i%2)*.06,z-.22+Math.floor(i/6)*.28);
    }
    const shower=makeMesh(new THREE.CylinderGeometry(.025,.025,.95,16),'#6f9cad');
    add(scene,shower,x-.92,1.05,z-.35);
    const head=makeMesh(new THREE.SphereGeometry(.13,18,10),'#6f9cad');
    add(scene,head,x-.78,1.54,z-.35);
  }

  function createFoodShelf(scene,x,z){
    const shelf=makeMesh(new THREE.BoxGeometry(.95,1.45,.18),'#f2d073');
    add(scene,shelf,x,.78,z);
    for(let i=0;i<5;i++){
      const rail=makeMesh(new THREE.BoxGeometry(.92,.035,.22),'#f08f68');
      add(scene,rail,x,.28+i*.25,z+.02);
    }
    const foods=[
      ['#ffdb44',-.25,.3],['#8fd56e',.18,.56],['#e85b48',-.2,.82],['#f2c16d',.25,1.06],['#73c8ef',-.05,1.27]
    ];
    foods.forEach(([color,dx,y])=>{
      const food=makeMesh(new THREE.SphereGeometry(.12,18,12),color);
      food.scale.set(1.35,.72,.65);
      add(scene,food,x+dx,y,z+.16);
    });
  }

  function createPurpleHouse(scene,x,z){
    const house=makeMesh(new THREE.BoxGeometry(2.0,1.1,1.45),'#bd83d9');
    add(scene,house,x,.58,z);
    const roof=makeMesh(new THREE.ConeGeometry(1.35,.78,4),'#ff9cc7');
    roof.rotation.y=Math.PI/4;
    add(scene,roof,x,1.48,z);
    const door=makeMesh(new THREE.BoxGeometry(.44,.72,.06),'#f8c1d3');
    add(scene,door,x+.42,.4,z-.75);
    const win=makeMesh(new THREE.BoxGeometry(.42,.36,.07),'#dff7ff');
    add(scene,win,x-.5,.72,z-.75);
    const chimney=makeMesh(new THREE.CylinderGeometry(.13,.13,.48,18),'#76a6b9');
    add(scene,chimney,x+.58,1.86,z+.32);
  }

  function createCastleGate(scene,x,z){
    const body=makeMesh(new THREE.BoxGeometry(1.8,1.2,.5),'#ffbfd0');
    add(scene,body,x,.65,z);
    const top=makeMesh(new THREE.CapsuleGeometry(.42,.72,8,20),'#ffd0dc');
    top.rotation.z=Math.PI/2;
    top.scale.set(1.18,.48,.55);
    add(scene,top,x,1.22,z);
    for(let i=0;i<4;i++){
      const tooth=makeMesh(new THREE.BoxGeometry(.22,.36,.54),'#ffc5d5');
      add(scene,tooth,x-.67+i*.44,1.5,z);
    }
    const gate=makeMesh(new THREE.BoxGeometry(.55,.76,.06),'#fff0f6');
    add(scene,gate,x,.45,z-.28);
  }

  function createMiniBook(scene,x,z){
    const book=makeMesh(new THREE.BoxGeometry(1.1,.16,.85),'#b790ff');
    book.rotation.y=-.28;
    add(scene,book,x,.32,z);
    const strap=makeMesh(new THREE.BoxGeometry(.16,.19,.92),'#f4f2f4');
    strap.rotation.y=-.28;
    add(scene,strap,x+.3,.44,z-.02);
    const cover=makeMesh(new THREE.PlaneGeometry(.9,.62),'#cdaeff');
    cover.rotation.x=-Math.PI/2;
    cover.rotation.z=-.28;
    add(scene,cover,x-.05,.51,z);
    for(let i=0;i<4;i++){
      const skull=makeMesh(new THREE.SphereGeometry(.055,12,8),'#2a2340');
      add(scene,skull,x-.34+i*.2,.56,z-.13+((i%2)*.22));
    }
  }

  function createPaperSun(scene,x,z){
    const sun=makeMesh(new THREE.SphereGeometry(.3,24,16),'#ffd61a');
    add(scene,sun,x,2.0,z);
    for(let i=0;i<10;i++){
      const ray=makeMesh(new THREE.CylinderGeometry(.018,.018,.55,8),'#ffe065');
      ray.rotation.z=Math.PI/2;
      ray.rotation.y=i/10*Math.PI*2;
      add(scene,ray,x+Math.cos(i/10*Math.PI*2)*.58,2.0,z+Math.sin(i/10*Math.PI*2)*.58);
    }
  }

  function createFlower(scene,x,z,i){
    const stem=makeMesh(new THREE.CylinderGeometry(.015,.015,.16,8),'#4b9a50');
    add(scene,stem,x,.12,z);
    const bloom=makeMesh(new THREE.SphereGeometry(.07,12,8),['#ff8ab5','#ffd84d','#8fe3ff','#d8a1ff'][i%4]);
    bloom.scale.set(1.1,.65,1.1);
    add(scene,bloom,x,.23,z);
  }

  function createForestAdventureProps(scene){
    [[-6.9,-1.1],[6.7,.8],[4.9,4.1],[-3.8,4.8]].forEach(([x,z],i)=>createRoundTree(scene,x,z,i));
    const pedestal=makeMesh(new THREE.CylinderGeometry(.42,.5,.38,24),'#9aa093');
    add(scene,pedestal,-.25,.18,-4.65);
    const relic=makeMesh(new THREE.OctahedronGeometry(.22),'#f5d55d');
    relic.material.emissive=new THREE.Color('#d9a927');
    relic.material.emissiveIntensity=.28;
    add(scene,relic,-.25,.62,-4.65);
    for(let i=0;i<4;i++){
      const stone=makeMesh(new THREE.CylinderGeometry(.14,.18,.62,16),'#8f9a8c');
      stone.rotation.z=(i%2?-.06:.08);
      add(scene,stone,-.8+i*.38,.31,-5.08);
    }
  }

  function createRoundTree(scene,x,z,i){
    const trunk=makeMesh(new THREE.CylinderGeometry(.11,.15,.72,16),'#8a623a');
    add(scene,trunk,x,.35,z);
    const crown=makeMesh(new THREE.SphereGeometry(.48,24,16),['#3f9b4e','#56a95f','#2f8546'][i%3]);
    crown.scale.set(1.04,.86,1.04);
    add(scene,crown,x,.86,z);
    const fruit=makeMesh(new THREE.SphereGeometry(.055,10,8),['#ffd84d','#ff8ab5','#78d5ff'][i%3]);
    add(scene,fruit,x+.16,.92,z-.24);
  }

  function createPlayer(){
    const root=new THREE.Group();
    state.playerRoot=root;
    state.player={x:0,z:0,vx:0,vz:0,dir:0,bob:0};
    add(state.scene,root,0,0,0);
    const shadow=makeMesh(new THREE.CylinderGeometry(.5,.5,.025,48),'#5a7b5d');
    shadow.material.transparent=true;shadow.material.opacity=.25;
    shadow.receiveShadow=false;shadow.castShadow=false;
    add(root,shadow,0,.025,0);
    if(state.character==='forest'){
      createForestHero(root,-.24,0,1);
      createGoldenPrincess(root,.48,.2,.78);
    }else{
      createStorybookPrincess(root,0,0,1);
    }
  }

  function createStorybookPrincess(root,x,z,scale){
    const group=new THREE.Group();
    group.position.set(x,0,z);
    group.scale.setScalar(scale);
    root.add(group);
    const dress=makeMesh(new THREE.ConeGeometry(.36,.82,32),'#ff8fb8');
    dress.position.y=.58;
    group.add(dress);
    const torso=makeMesh(new THREE.CapsuleGeometry(.22,.36,8,24),'#ffd9c2');
    torso.position.y=.96;
    group.add(torso);
    const head=makeMesh(new THREE.SphereGeometry(.28,32,20),'#ffe4c8');
    head.position.y=1.34;
    group.add(head);
    const hair=makeMesh(new THREE.SphereGeometry(.32,32,18),'#f4bf33');
    hair.scale.set(1.08,.82,.95);
    hair.position.set(0,1.39,.07);
    group.add(hair);
    const bang=makeMesh(new THREE.SphereGeometry(.18,20,12),'#f4bf33');
    bang.scale.set(1.4,.72,.55);
    bang.position.set(-.12,1.47,-.2);
    group.add(bang);
    createTinyCrown(group,0,1.66,0,'#ffd63b','#58d8ff');
    addArms(group,'#ffe4c8',.31,.93);
  }

  function createGoldenPrincess(root,x,z,scale){
    const group=new THREE.Group();
    group.position.set(x,0,z);
    group.scale.setScalar(scale);
    root.add(group);
    const dress=makeMesh(new THREE.ConeGeometry(.34,.78,32),'#fff2b8');
    dress.position.y=.55;
    group.add(dress);
    const sash=makeMesh(new THREE.TorusGeometry(.22,.025,8,24),'#62b26f');
    sash.rotation.x=Math.PI/2;
    sash.position.y=.78;
    group.add(sash);
    const torso=makeMesh(new THREE.CapsuleGeometry(.2,.34,8,24),'#ffe1c6');
    torso.position.y=.93;
    group.add(torso);
    const head=makeMesh(new THREE.SphereGeometry(.25,28,18),'#ffe4c8');
    head.position.y=1.28;
    group.add(head);
    const hair=makeMesh(new THREE.SphereGeometry(.29,28,16),'#f2c24d');
    hair.scale.set(1.04,.9,.86);
    hair.position.set(0,1.32,.05);
    group.add(hair);
    const braid=makeMesh(new THREE.CapsuleGeometry(.06,.42,8,12),'#f2c24d');
    braid.rotation.z=-.28;
    braid.position.set(.24,1.02,.06);
    group.add(braid);
    createTinyCrown(group,0,1.53,0,'#f6d34f','#72d7ff');
    addArms(group,'#ffe1c6',.28,.88);
  }

  function createForestHero(root,x,z,scale){
    const group=new THREE.Group();
    group.position.set(x,0,z);
    group.scale.setScalar(scale);
    root.add(group);
    const boots=makeMesh(new THREE.BoxGeometry(.42,.16,.24),'#6b4a2e');
    boots.position.y=.18;
    group.add(boots);
    const tunic=makeMesh(new THREE.ConeGeometry(.31,.72,28),'#3f9b4e');
    tunic.position.y=.56;
    group.add(tunic);
    const belt=makeMesh(new THREE.TorusGeometry(.2,.025,8,24),'#7b5636');
    belt.rotation.x=Math.PI/2;
    belt.position.y=.77;
    group.add(belt);
    const torso=makeMesh(new THREE.CapsuleGeometry(.2,.34,8,20),'#3f9b4e');
    torso.position.y=.95;
    group.add(torso);
    const head=makeMesh(new THREE.SphereGeometry(.25,28,18),'#ffe1bd');
    head.position.y=1.29;
    group.add(head);
    const hair=makeMesh(new THREE.SphereGeometry(.26,28,14),'#e2ba55');
    hair.scale.set(1.04,.64,.86);
    hair.position.set(0,1.36,.03);
    group.add(hair);
    const cap=makeMesh(new THREE.ConeGeometry(.22,.55,24),'#2f8546');
    cap.rotation.z=-.42;
    cap.position.set(-.08,1.62,.03);
    group.add(cap);
    const capTip=makeMesh(new THREE.SphereGeometry(.055,12,8),'#2f8546');
    capTip.position.set(-.28,1.8,.03);
    group.add(capTip);
    addArms(group,'#ffe1bd',.29,.9);
    const shield=makeMesh(new THREE.CylinderGeometry(.16,.16,.045,28),'#4b82bd');
    shield.scale.set(1,.78,1);
    shield.rotation.x=Math.PI/2;
    shield.position.set(-.34,.93,-.05);
    group.add(shield);
    const sword=makeMesh(new THREE.BoxGeometry(.045,.62,.045),'#d8dce2');
    sword.rotation.z=-.48;
    sword.position.set(.36,1.0,.02);
    group.add(sword);
    const handle=makeMesh(new THREE.BoxGeometry(.18,.035,.05),'#7b5636');
    handle.rotation.z=-.48;
    handle.position.set(.25,.78,.02);
    group.add(handle);
  }

  function addArms(group,color,x,y){
    for(const side of [-1,1]){
      const arm=makeMesh(new THREE.CapsuleGeometry(.045,.34,6,10),color);
      arm.rotation.z=side*.42;
      arm.position.set(side*x,y,0);
      group.add(arm);
    }
  }

  function createTinyCrown(group,x,y,z,baseColor,gemColor){
    const crownBase=makeMesh(new THREE.CylinderGeometry(.16,.18,.07,24),baseColor);
    crownBase.position.set(x,y,z);
    group.add(crownBase);
    for(let i=0;i<5;i++){
      const spike=makeMesh(new THREE.ConeGeometry(.04,.16,12),'#ffdf4a');
      spike.position.set(x-.14+i*.07,y+.11,z-.02+Math.abs(i-2)*.018);
      group.add(spike);
    }
    const gem=makeMesh(new THREE.SphereGeometry(.03,12,8),gemColor);
    gem.position.set(x,y+.19,z-.02);
    group.add(gem);
  }

  function createPickup(def){
    const group=new THREE.Group();
    group.userData.def=def;
    add(state.scene,group,def.pos[0],.1,def.pos[2]);
    const halo=makeMesh(new THREE.TorusGeometry(.44,.025,8,36),def.color);
    halo.rotation.x=Math.PI/2;
    halo.material.emissive=new THREE.Color(def.color);
    halo.material.emissiveIntensity=.45;
    group.add(halo);
    let icon;
    if(def.kind==='crown')icon=createCrownIcon(def.color);
    else if(def.kind==='dress')icon=makeMesh(new THREE.ConeGeometry(.22,.44,28),def.color);
    else if(def.kind==='pool')icon=makeMesh(new THREE.SphereGeometry(.24,24,14),def.color);
    else if(def.kind==='bath')icon=makeMesh(new THREE.SphereGeometry(.2,24,14),'#ffffff');
    else if(def.kind==='snack')icon=makeMesh(new THREE.SphereGeometry(.18,24,14),def.color);
    else icon=makeMesh(new THREE.BoxGeometry(.34,.12,.28),def.color);
    icon.position.y=.55;
    icon.castShadow=true;
    group.add(icon);
    const star=makeMesh(new THREE.OctahedronGeometry(.12),def.color);
    star.position.y=.94;
    star.material.emissive=new THREE.Color(def.color);
    star.material.emissiveIntensity=.35;
    group.add(star);
    state.pickups.push({def,group,icon,halo,done:false,cooldown:0});
  }

  function createCrownIcon(color){
    const g=new THREE.Group();
    const base=makeMesh(new THREE.CylinderGeometry(.18,.2,.1,24),color);
    add(g,base,0,0,0);
    for(let i=0;i<5;i++){
      const spike=makeMesh(new THREE.ConeGeometry(.045,.18,12),'#ffd84d');
      add(g,spike,-.16+i*.08,.13,0);
    }
    return g;
  }

  function bindControls(){
    window.addEventListener('keydown',onKeyDown);
    window.addEventListener('keyup',onKeyUp);
    $('smoothAction').addEventListener('pointerdown',onAction);
    document.querySelectorAll('[data-smooth-key]').forEach((btn)=>{
      btn.addEventListener('pointerdown',smoothButtonDown);
      btn.addEventListener('pointerup',smoothButtonUp);
      btn.addEventListener('pointercancel',smoothButtonUp);
      btn.addEventListener('contextmenu',prevent);
    });
  }
  function unbindControls(){
    window.removeEventListener('keydown',onKeyDown);
    window.removeEventListener('keyup',onKeyUp);
    const action=$('smoothAction');
    if(action)action.removeEventListener('pointerdown',onAction);
    document.querySelectorAll('[data-smooth-key]').forEach((btn)=>{
      btn.removeEventListener('pointerdown',smoothButtonDown);
      btn.removeEventListener('pointerup',smoothButtonUp);
      btn.removeEventListener('pointercancel',smoothButtonUp);
      btn.removeEventListener('contextmenu',prevent);
    });
  }
  function prevent(e){e.preventDefault();}
  function smoothButtonDown(e){e.preventDefault();state.keys.add(e.currentTarget.dataset.smoothKey);}
  function smoothButtonUp(e){e.preventDefault();state.keys.delete(e.currentTarget.dataset.smoothKey);}
  function onKeyDown(e){
    if(!state.running)return;
    if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Space'].includes(e.code))e.preventDefault();
    if(e.code==='Escape'){if(state.onExit)state.onExit();return;}
    if(e.code==='Space'||e.code==='Enter'||e.code==='KeyE'){onAction(e);return;}
    state.keys.add(e.code);
  }
  function onKeyUp(e){state.keys.delete(e.code);}
  function onAction(e){
    if(e&&e.preventDefault)e.preventDefault();
    if(state.quiz)return;
    if(state.nearest)tryCollect(state.nearest,true);
  }

  function resize(){
    if(!state.renderer||!state.camera||!state.viewport)return;
    const box=state.viewport.getBoundingClientRect();
    const w=Math.max(1,box.width),h=Math.max(1,box.height);
    state.camera.aspect=w/h;
    state.camera.updateProjectionMatrix();
    state.renderer.setSize(w,h,false);
  }
  function applyExperience(){
    const exp=readExperience();
    state.quality=exp.quality;
    state.reducedFx=exp.reducedFx;
    state.lowPower=state.mobileLite||state.quality==='lite'||state.reducedFx;
    if(state.renderer){
      state.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,qualityPixelCap()));
      state.renderer.shadowMap.enabled=state.quality==='vivid'&&!state.mobileLite&&!state.reducedFx;
      resize();
    }
  }

  function loop(){
    if(!state.running||!state.renderer)return;
    if(document.hidden)return;
    const dt=Math.min(.05,state.clock.getDelta());
    updatePlayer(dt);
    updatePickups(dt);
    updateCamera(dt);
    updateSparkles(dt);
    state.renderer.render(state.scene,state.camera);
  }

  function updatePlayer(dt){
    if(state.quiz)return;
    const p=state.player;
    let ix=0,iz=0;
    if(state.keys.has('KeyA')||state.keys.has('ArrowLeft'))ix-=1;
    if(state.keys.has('KeyD')||state.keys.has('ArrowRight'))ix+=1;
    if(state.keys.has('KeyW')||state.keys.has('ArrowUp'))iz-=1;
    if(state.keys.has('KeyS')||state.keys.has('ArrowDown'))iz+=1;
    const len=Math.hypot(ix,iz)||1;
    const speed=4.0;
    const tx=ix/len*speed,tz=iz/len*speed;
    p.vx+=(tx-p.vx)*Math.min(1,dt*8);
    p.vz+=(tz-p.vz)*Math.min(1,dt*8);
    p.x=clamp(p.x+p.vx*dt,-7.3,7.3);
    p.z=clamp(p.z+p.vz*dt,-5.1,5.1);
    const moving=Math.hypot(p.vx,p.vz)>.08;
    p.bob+=dt*(moving?9:3);
    const root=state.playerRoot;
    root.position.set(p.x,.04+Math.sin(p.bob)*.025,p.z);
    if(moving){
      const target=Math.atan2(p.vx,p.vz);
      let delta=target-root.rotation.y;
      delta=Math.atan2(Math.sin(delta),Math.cos(delta));
      root.rotation.y+=delta*Math.min(1,dt*9);
    }
  }

  function updatePickups(dt){
    let nearest=null,nearestD=999;
    for(const item of state.pickups){
      if(item.done)continue;
      if(state.reducedFx){
        item.icon.position.y=.55;
        item.halo.scale.setScalar(1);
      }else{
        item.group.rotation.y+=dt*.9;
        item.icon.position.y=.55+Math.sin(performance.now()/420+item.def.pos[0])*.07;
        item.halo.scale.setScalar(1+Math.sin(performance.now()/360+item.def.pos[2])*.08);
      }
      if(item.cooldown>0)item.cooldown-=dt;
      const d=Math.hypot(state.player.x-item.def.pos[0],state.player.z-item.def.pos[2]);
      if(d<nearestD){nearestD=d;nearest=item;}
      if(d<.72)tryCollect(item,false);
    }
    state.nearest=nearestD<1.25?nearest:null;
    if(state.quiz)return;
    if(state.nearest){
      setPrompt('靠近「'+state.nearest.def.name+'」　按 ✦ / 空白鍵收集');
    }else if(state.collected.size>=pickupDefs.length){
      setPrompt('小書小鎮完成，獎勵已存入公主小鎮基金。按 ↩ 返回入口');
    }else{
      setPrompt('走進發光物件，收集女兒小書裡的場景寶物');
    }
  }

  function tryCollect(item,forced){
    if(item.done||item.cooldown>0)return;
    const d=Math.hypot(state.player.x-item.def.pos[0],state.player.z-item.def.pos[2]);
    if(d>.95&&!forced)return;
    if(item.def.quiz&&typeof generateQuestion==='function'){
      openQuiz(item);
      return;
    }
    collect(item);
  }

  function collect(item){
    if(item.done)return;
    item.done=true;
    state.collected.add(item.def.id);
    item.group.visible=false;
    spawnSparkles(item.def.pos[0],.65,item.def.pos[2],item.def.color);
    playSfx('coin');
    setPrompt('找到「'+item.def.name+'」！');
    updateHud();
    if(state.collected.size>=pickupDefs.length&&!state.rewarded){
      state.rewarded=true;
      if(typeof state.onReward==='function')state.onReward(60);
      const save=lsGet('pmgSmooth3d',{best:0,plays:0});
      save.best=Math.max(save.best,state.collected.size);
      save.plays=(save.plays||0)+1;
      lsSet('pmgSmooth3d',save);
      playSfx('win');
      setPrompt('完成手作小書 3D 小鎮！公主小鎮基金 +60 🪙');
    }
  }

  function updateHud(){
    const theme=characterThemes[state.character]||characterThemes.storybook;
    if(state.objective)state.objective.textContent='小書寶物 '+state.collected.size+'/'+pickupDefs.length+'　'+theme.hud;
  }
  function setPrompt(text){
    if(state.lastPrompt===text)return;
    state.lastPrompt=text;
    if(state.prompt)state.prompt.textContent=text;
  }

  function openQuiz(item){
    if(state.quiz)return;
    const grade=Math.random()<.5?'grade2':'grade5';
    const q=generateQuestion({mode:'mixed',grade,level:1,wave:state.collected.size+1,answeredCount:state.collected.size,difficulty:'sprout'});
    state.quiz={item,q};
    item.cooldown=1.2;
    state.quizTag.textContent='寶物守護題・'+(typeof GRADES!=='undefined'&&GRADES[grade]?GRADES[grade].label:'課程');
    state.quizText.textContent=q.prompt;
    state.quizOpts.innerHTML='';
    q.choices.forEach((choice,i)=>{
      const btn=document.createElement('button');
      btn.textContent=(i+1)+'. '+choice;
      btn.onclick=()=>answerQuiz(choice,btn);
      state.quizOpts.appendChild(btn);
    });
    state.quizBox.classList.remove('hidden');
    if(typeof window.PMG_PLAY_UI_MOTION==='function')window.PMG_PLAY_UI_MOTION(state.quizBox,'pop');
    setPrompt('答對守護題就能收下「'+item.def.name+'」');
  }

  function answerQuiz(choice,btn){
    if(!state.quiz)return;
    const {item,q}=state.quiz;
    const ok=choice===q.answer;
    Array.from(state.quizOpts.children).forEach((b)=>{
      b.disabled=true;
      const text=b.textContent.replace(/^\d+\.\s*/,'');
      if(text===q.answer)b.classList.add('ok');
    });
    if(!ok)btn.classList.add('bad');
    setPrompt(ok?'答對了，寶物收入小書！':'再試一次，答案是「'+q.answer+'」。');
    if(ok){playSfx('correct');collect(item);}
    else playSfx('wrong');
    window.setTimeout(()=>{
      state.quizBox.classList.add('hidden');
      state.quiz=null;
      if(!ok)item.cooldown=2.5;
    },ok?850:1600);
  }

  function spawnSparkles(x,y,z,color){
    const count=detailCount(18);
    for(let i=0;i<count;i++){
      const s=makeMesh(new THREE.SphereGeometry(.045,10,8),color);
      s.material.emissive=new THREE.Color(color);
      s.material.emissiveIntensity=.4;
      s.position.set(x,y,z);
      s.userData.v=new THREE.Vector3((Math.random()-.5)*1.9,Math.random()*1.7+.6,(Math.random()-.5)*1.9);
      s.userData.life=.55+Math.random()*.45;
      state.scene.add(s);
      state.sparkles.push(s);
    }
  }
  function updateSparkles(dt){
    for(let i=state.sparkles.length-1;i>=0;i--){
      const s=state.sparkles[i];
      s.userData.life-=dt;
      s.userData.v.y-=dt*2.2;
      s.position.addScaledVector(s.userData.v,dt);
      s.scale.setScalar(Math.max(.05,s.userData.life));
      if(s.userData.life<=0){
        state.scene.remove(s);
        disposeObject(s);
        state.sparkles.splice(i,1);
      }
    }
  }

  function updateCamera(dt){
    const p=state.player;
    const target=new THREE.Vector3(p.x,1.05,p.z);
    const portrait=state.camera.aspect<.82;
    const desired=portrait
      ? new THREE.Vector3(p.x+4.3,6.3,p.z+8.4)
      : new THREE.Vector3(p.x+4.8,5.4,p.z+7.2);
    state.camera.position.lerp(desired,Math.min(1,dt*3.4));
    state.camera.lookAt(target);
  }

  function getStatus(){
    return {
      running:state.running,
      collected:state.collected.size,
      total:pickupDefs.length,
      character:state.character,
      mobileLite:state.mobileLite,
      quality:state.quality,
      reducedFx:state.reducedFx,
      player:state.player?{x:+state.player.x.toFixed(2),z:+state.player.z.toFixed(2)}:null,
      nearest:state.nearest?state.nearest.def.id:null,
      quiz:state.quiz?state.quiz.item.def.id:null
    };
  }

  window.Smooth3DGame={start,stop,getStatus,applyExperience};
})();
