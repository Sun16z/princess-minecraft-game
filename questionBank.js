const MODES = {
  mixed: { id: 'mixed', label: '綜合', short: 'All' },
  mandarin: { id: 'mandarin', label: '國語', short: '國' },
  math: { id: 'math', label: '數學', short: '數' },
  english: { id: 'english', label: '英語', short: '英' },
  natural: { id: 'natural', label: '自然', short: '自' },
};

const GRADES = {
  grade2: { id: 'grade2', label: '二下', name: '國小二年級下學期期末' },
  grade3: { id: 'grade3', label: '三上', name: '國小三年級上學期' },
  grade4: { id: 'grade4', label: '四下', name: '國小四年級下學期期末' },
  grade5: { id: 'grade5', label: '五下', name: '國小五年級下學期期末' },
  grade6: { id: 'grade6', label: '六上', name: '國小六年級上學期' },
};

const DIFFICULTIES = {
  sprout: { id: 'sprout', label: '暖身', hearts: 5, hpBoost: 0, range: 8 },
  scout: { id: 'scout', label: '期末', hearts: 4, hpBoost: 18, range: 14 },
  ace: { id: 'ace', label: '挑戰', hearts: 3, hpBoost: 38, range: 22 },
};

const SUBJECT_ORDER = ['mandarin', 'math', 'english', 'natural'];

const CURRICULUM_OUTLINE = {
  grade2: {
    mandarin: ['字音字形與部首', '詞語與相反詞', '量詞與照樣造句', '標點符號', '短文閱讀'],
    math: ['1000以內數與比大小', '三位數加減', '九九乘法、平分與分裝', '長度、時間與錢幣', '兩步驟應用'],
    english: ['字母大小寫', '顏色數字', '教室用語', '問候與簡短句', '動物與食物單字'],
    natural: ['植物觀察', '動物與生活', '天氣變化', '水的觀察', '磁鐵與力'],
  },
  grade3: {
    mandarin: ['字音字形', '詞語理解', '句型判讀', '段落重點', '閱讀推論'],
    math: ['一萬以內數與位值', '加減直式與估算', '乘除與倍數情境', '同分母分數與一位小數', '毫米、容量、重量、時間與角'],
    english: ['自然發音與字母拼讀', '問候與自我介紹', '教室與家庭單字', '顏色、數字與喜好句', '簡短問答'],
    natural: ['植物的身體', '動物與棲地', '天氣觀察', '水的三態與溶解', '磁力與生活'],
  },
  grade4: {
    mandarin: ['字音字形與詞義', '成語與句型', '段落大意', '閱讀推論', '標點與修辭'],
    math: ['大數與概數', '整數乘除與四則', '同分母分數加減', '一位與二位小數', '角度、周長、面積與體積初步'],
    english: ['日常活動與時間', '場所與方位', '食物與購物', '現在進行式', '簡短對話閱讀'],
    natural: ['水的移動與變化', '昆蟲與動物生活史', '月亮與天體觀察', '力與運動', '電路與生活'],
  },
  grade5: {
    mandarin: ['詞義辨析', '成語與語詞', '修辭判讀', '句型改寫', '閱讀推論'],
    math: ['異分母分數加減與約分', '分數乘法', '體積容積與表面積', '小數乘除與百分率', '大單位換算'],
    english: ['日常作息與頻率', '場所與方位介系詞', '星期月份與天氣', '時間與疑問句', '句型理解'],
    natural: ['植物世界面面觀', '植物構造與功能', '植物分類與繁殖', '空氣和燃燒', '燃燒三要素與安全'],
  },
  grade6: {
    mandarin: ['詞義與成語', '修辭與語法', '文本結構', '閱讀推論', '觀點判斷'],
    math: ['質因數、公因數與公倍數', '分數與小數除法', '比、比值、速率與比例尺', '圓周長與圓面積', '柱體體積、表面積與統計圖'],
    english: ['生活經驗與過去式', '頻率與比較描述', '食物、城市、活動與節慶', '問路與建議句', '短文閱讀'],
    natural: ['聲音與光', '熱與物質變化', '簡單機械與力', '地球、月亮與太陽', '生物與環境'],
  },
};

const MONSTERS = [
  {
    id: 'mossbit',
    name: '黑月咪兔',
    enName: 'Moonmimi',
    element: 'Moon',
    petShape: 'moonBunny',
    hp: 42,
    colorA: '#2b2535',
    colorB: '#f6f1ff',
    colorC: '#ff84b7',
    habitat: '月光糖果屋',
    stages: ['黑月咪兔', '黑月魔法兔', '黑月女王兔'],
  },
  {
    id: 'flarelume',
    name: '雲朵耳寶',
    enName: 'Cloudbelle',
    element: 'Cloud',
    petShape: 'cloudPup',
    hp: 58,
    colorA: '#7ecbff',
    colorB: '#ffffff',
    colorC: '#9fdfff',
    habitat: '棉花雲廣場',
    stages: ['雲朵耳寶', '雲朵天使寶', '雲朵星王寶'],
  },
  {
    id: 'tidetot',
    name: '莓果咪兔',
    enName: 'Berrymimi',
    element: 'Berry',
    petShape: 'moonBunny',
    hp: 74,
    colorA: '#c2447a',
    colorB: '#fff0f5',
    colorC: '#ff9fbe',
    habitat: '草莓蛋糕鎮',
    stages: ['莓果咪兔', '莓果魔法兔', '莓果公主兔'],
  },
  {
    id: 'quartzowl',
    name: '奶茶耳寶',
    enName: 'Milkypup',
    element: 'Milk Tea',
    petShape: 'cloudPup',
    hp: 92,
    colorA: '#b98a5e',
    colorB: '#fdf3e3',
    colorC: '#e8c39a',
    habitat: '奶茶點心屋',
    stages: ['奶茶耳寶', '奶茶騎士寶', '奶茶國王寶'],
  },
  {
    id: 'sprigvolt',
    name: '紫夜咪兔',
    enName: 'Violetmimi',
    element: 'Violet',
    petShape: 'moonBunny',
    hp: 108,
    colorA: '#4f3b78',
    colorB: '#f3edff',
    colorC: '#b79bff',
    habitat: '紫水晶城堡',
    stages: ['紫夜咪兔', '紫夜魔法兔', '紫夜女巫兔'],
  },
  {
    id: 'inkpuff',
    name: '星空耳寶',
    enName: 'Starrypup',
    element: 'Star',
    petShape: 'cloudPup',
    hp: 128,
    colorA: '#3b4a8f',
    colorB: '#eef3ff',
    colorC: '#ffd76d',
    habitat: '星空鞦韆園',
    stages: ['星空耳寶', '星空天使寶', '星空王者寶'],
  },
];

const PET_ACCESSORIES = [
  { id: 'leafCrown', label: '葉冠', rarity: '森林' },
  { id: 'starBadge', label: '星徽', rarity: '星光' },
  { id: 'crystalBell', label: '晶鈴', rarity: '稀有' },
  { id: 'moonRibbon', label: '月緞帶', rarity: '夜光' },
  { id: 'sproutCap', label: '芽帽', rarity: '成長' },
  { id: 'emberCharm', label: '火花墜飾', rarity: '熱情' },
  { id: 'mischiefBow', label: '淘氣蝴蝶結', rarity: '俏皮' },
  { id: 'cloudBell', label: '雲朵鈴', rarity: '軟綿' },
];

const PET_FOODS = [
  { id: 'berry', label: '小果實', tier: 1, xp: 1, colorA: '#e85f6f', colorB: '#ffcf6e' },
  { id: 'cake', label: '奶油蛋糕', tier: 2, xp: 3, colorA: '#f4b95f', colorB: '#fff4c7' },
  { id: 'goldFruit', label: '金色果實', tier: 3, xp: 5, colorA: '#f2b735', colorB: '#fff07a' },
  { id: 'starCake', label: '星糖蛋糕', tier: 4, xp: 8, colorA: '#8f78ff', colorB: '#ffe16d' },
];

const PET_EGGS = [
  { id: 'normalEgg', label: '神秘蛋', tier: 1, needed: 3, colorA: '#f7e8cf', colorB: '#e8c39a' },
  { id: 'shinyEgg', label: '閃亮蛋', tier: 2, needed: 4, colorA: '#e8f1ff', colorB: '#9fc4f2' },
  { id: 'rainbowEgg', label: '彩虹蛋', tier: 3, needed: 5, colorA: '#ffe2ef', colorB: '#b79bff' },
];

const PET_SKINS = [
  { id: 'mint', label: '薄荷', rarity: '少見', colorA: '#3f9b82', colorB: '#f0fff9', colorC: '#a8eed8' },
  { id: 'sakura', label: '櫻花', rarity: '稀有', colorA: '#d9719c', colorB: '#fff2f7', colorC: '#ffc0d8' },
  { id: 'star', label: '星彩', rarity: '超稀有', colorA: '#584a9e', colorB: '#f1edff', colorC: '#ffd96b' },
  { id: 'golden', label: '黃金', rarity: '傳說', colorA: '#b08a2e', colorB: '#fff8e1', colorC: '#ffd96b' },
];

const HOUSE_ITEMS = [
  { id: 'foundation', label: '草地方塊地基', kind: 'structure' },
  { id: 'frontDoor', label: '橡木門方塊', kind: 'structure' },
  { id: 'windowLeft', label: '左玻璃窗方塊', kind: 'structure' },
  { id: 'windowRight', label: '右玻璃窗方塊', kind: 'structure' },
  { id: 'roof', label: '紅磚屋頂方塊', kind: 'structure' },
  { id: 'chimney', label: '石磚煙囪方塊', kind: 'structure' },
  { id: 'secondFloor', label: '二樓木板方塊', kind: 'structure' },
  { id: 'balcony', label: '白石陽台方塊', kind: 'structure' },
  { id: 'porchLight', label: '螢光燈方塊', kind: 'decor' },
  { id: 'garden', label: '花草方塊', kind: 'outdoor' },
  { id: 'sofa', label: '羊毛沙發方塊', kind: 'furniture' },
  { id: 'teaTable', label: '木桌方塊', kind: 'furniture' },
  { id: 'bookshelf', label: '書櫃方塊', kind: 'furniture' },
  { id: 'studyDesk', label: '工作台方塊', kind: 'furniture' },
  { id: 'bed', label: '小床方塊', kind: 'furniture' },
  { id: 'wardrobe', label: '木櫃方塊', kind: 'furniture' },
  { id: 'kitchen', label: '廚房爐台方塊', kind: 'furniture' },
  { id: 'fridge', label: '冰箱鐵方塊', kind: 'furniture' },
  { id: 'toilet', label: '廁所白石方塊', kind: 'bathroom' },
  { id: 'sink', label: '水槽方塊', kind: 'bathroom' },
  { id: 'bathtub', label: '浴缸水方塊', kind: 'bathroom' },
  { id: 'toyShelf', label: '玩具箱方塊', kind: 'decor' },
  { id: 'garage', label: '車庫石牆方塊', kind: 'outdoor' },
  { id: 'pool', label: '泳池水方塊', kind: 'outdoor' },
  { id: 'fountain', label: '噴泉水晶方塊', kind: 'outdoor' },
  { id: 'grandPiano', label: '黑曜鋼琴方塊', kind: 'furniture' },
  { id: 'solarRoof', label: '彩虹能量方塊', kind: 'decor' },
  { id: 'partyLights', label: '紅石燈串方塊', kind: 'decor' },
];

const EGG_SKIN_WEIGHTS = {
  normalEgg: { mint: 50, sakura: 33, star: 12, golden: 5 },
  shinyEgg: { mint: 22, sakura: 36, star: 28, golden: 14 },
  rainbowEgg: { mint: 8, sakura: 22, star: 35, golden: 35 },
};

function normalizeHouse(rawHouse = {}) {
  const validIds = new Set(HOUSE_ITEMS.map((item) => item.id));
  const built = [...new Set((rawHouse?.built || []).filter((itemId) => validIds.has(itemId)))];
  const renovation = Math.max(0, Math.floor(Number(rawHouse?.renovation) || 0));
  return {
    built,
    renovation,
    builtCount: built.length,
    total: HOUSE_ITEMS.length,
    complete: built.length >= HOUSE_ITEMS.length,
  };
}

function getNextHouseItem(rawHouse = {}) {
  const house = normalizeHouse(rawHouse);
  return HOUSE_ITEMS.find((item) => !house.built.includes(item.id)) || null;
}

function addHouseProgress(rawHouse = {}) {
  const house = normalizeHouse(rawHouse);
  const nextItem = getNextHouseItem(house);
  if (nextItem) {
    const nextHouse = normalizeHouse({
      ...house,
      built: [...house.built, nextItem.id],
    });
    return {
      house: nextHouse,
      reward: nextItem,
    };
  }

  const renovation = house.renovation + 1;
  return {
    house: normalizeHouse({
      ...house,
      renovation,
    }),
    reward: {
      id: `renovation-${renovation}`,
      label: `豪宅升級 ${renovation}`,
      kind: 'upgrade',
    },
  };
}

function getEggById(eggId) {
  return PET_EGGS.find((egg) => egg.id === eggId) || PET_EGGS[0];
}

function getSkinById(skinId) {
  return PET_SKINS.find((skin) => skin.id === skinId) || null;
}

function applySkinToMonster(monster, skinId) {
  const skin = getSkinById(skinId);
  if (!monster || !skin) return monster;
  return {
    ...monster,
    colorA: skin.colorA,
    colorB: skin.colorB,
    colorC: skin.colorC,
    skinLabel: skin.label,
  };
}

function maybeDropEgg({ currentEgg = null, scoreGain = 0, streak = 0, caught = false, retrying = false } = {}, rng = Math.random) {
  if (currentEgg) return null;

  const dropChance = caught
    ? 1
    : streak >= 3 && streak % 3 === 0
      ? 0.7
      : retrying
        ? 0.06
        : 0.16;
  if (rng() > dropChance) return null;

  const performance = scoreGain + streak * 14 + (caught ? 60 : 0);
  const egg = performance >= 240 ? getEggById('rainbowEgg') : performance >= 160 ? getEggById('shinyEgg') : getEggById('normalEgg');
  return { ...egg, warmth: 0 };
}

function warmEgg(egg, amount = 1) {
  if (!egg) return null;
  return { ...egg, warmth: Math.min(egg.needed, (egg.warmth || 0) + amount) };
}

function isEggReady(egg) {
  return Boolean(egg && (egg.warmth || 0) >= egg.needed);
}

function hatchEgg(egg, rng = Math.random) {
  const weights = EGG_SKIN_WEIGHTS[egg?.id] || EGG_SKIN_WEIGHTS.normalEgg;
  const total = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
  let roll = rng() * total;
  let skinId = 'mint';
  for (const [id, weight] of Object.entries(weights)) {
    roll -= weight;
    if (roll <= 0) {
      skinId = id;
      break;
    }
  }
  const monster = MONSTERS[Math.floor(rng() * MONSTERS.length)];
  return { monsterId: monster.id, skin: getSkinById(skinId) };
}

function addSkinToPet(petDex = {}, monsterId, skinId) {
  if (!monsterId || !skinId) return petDex;
  const current = petDex?.[monsterId] || {
    id: monsterId,
    xp: 0,
    level: 1,
    size: petSizeFromLevel(1),
    accessory: rollPetAccessory(monsterId),
  };
  const skins = [...new Set([...(current.skins || []), skinId])];
  return {
    ...petDex,
    [monsterId]: {
      ...current,
      skins,
      activeSkin: skinId,
    },
  };
}

const STAGES = MONSTERS.map((monster, index) => ({
  id: `stage-${monster.id}`,
  index,
  name: monster.habitat,
  monsterId: monster.id,
  waves: 5,
}));

function getStageMonster(stageIndex = 0, waveInStage = 1) {
  const safeStage = Math.max(0, Math.min(MONSTERS.length - 1, stageIndex));
  if (waveInStage >= 5) return MONSTERS[safeStage];
  return MONSTERS[(waveInStage - 1) % (safeStage + 1)];
}

function isBossWave(waveInStage = 1) {
  return waveInStage >= 5;
}

function computeStageStars({ stageWrong = 0 } = {}) {
  if (stageWrong === 0) return 3;
  if (stageWrong <= 2) return 2;
  return 1;
}

function isStageUnlocked(stageIndex, mapProgress = {}) {
  if (stageIndex <= 0) return true;
  const previous = STAGES[stageIndex - 1];
  return Boolean(previous && mapProgress[previous.id] >= 1);
}

function normalizeMapProgress(raw = {}) {
  return STAGES.reduce((progress, stage) => {
    const stars = Math.max(0, Math.min(3, Math.floor(Number(raw?.[stage.id]) || 0)));
    if (stars > 0) progress[stage.id] = stars;
    return progress;
  }, {});
}

function hashString(text) {
  return String(text).split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function petLevelFromXp(xp = 0) {
  return Math.min(8, 1 + Math.floor(Math.max(0, xp) / 4));
}

function petSizeFromLevel(level = 1) {
  return Number(Math.min(1.46, 0.86 + Math.max(1, level) * 0.075).toFixed(3));
}

function getEvolutionStage(level = 1) {
  if (level >= 7) return 2;
  if (level >= 4) return 1;
  return 0;
}

function getEvolutionName(monster, level = 1) {
  const stages = monster?.stages || [];
  return stages[getEvolutionStage(level)] || monster?.name || '夥伴';
}

function getPetStage(pet = {}) {
  const xp = Number(pet.xp) || 0;
  const level = Number(pet.level) || petLevelFromXp(xp);
  const nextLevelXp = level >= 8 ? null : level * 4;
  const evoStage = getEvolutionStage(level);
  return {
    level,
    xp,
    evoStage,
    size: Number(pet.size) || petSizeFromLevel(level),
    title: evoStage === 2 ? '究極型態' : evoStage === 1 ? '進化型態' : '幼年型態',
    nextXp: nextLevelXp === null ? 0 : Math.max(0, nextLevelXp - xp),
  };
}

function rollPetAccessory(monsterId = '', rng = null) {
  const randomOffset = typeof rng === 'function'
    ? Math.floor(rng() * PET_ACCESSORIES.length)
    : hashString(monsterId);
  return PET_ACCESSORIES[randomOffset % PET_ACCESSORIES.length];
}

function normalizePetDex(rawDex = {}, collection = []) {
  const ids = [...new Set(collection)];
  const nextDex = {};

  ids.forEach((monsterId) => {
    const current = rawDex?.[monsterId] || {};
    const xp = Math.max(0, Number(current.xp) || 0);
    const level = petLevelFromXp(xp);
    const accessory = PET_ACCESSORIES.find((item) => item.id === current.accessory?.id) || rollPetAccessory(monsterId);
    const skins = [...new Set((current.skins || []).filter((skinId) => getSkinById(skinId)))];
    nextDex[monsterId] = {
      id: monsterId,
      xp,
      level,
      size: petSizeFromLevel(level),
      accessory,
      skins,
      activeSkin: skins.includes(current.activeSkin) ? current.activeSkin : skins[0] || null,
    };
  });

  return nextDex;
}

function growPetDex(petDex = {}, monsterId, xpGain = 1, rng = Math.random) {
  if (!monsterId) return petDex;

  const current = petDex?.[monsterId] || {};
  const previousXp = Math.max(0, Number(current.xp) || 0);
  const nextXp = previousXp + Math.max(0, xpGain);
  const level = petLevelFromXp(nextXp);
  const accessory = PET_ACCESSORIES.find((item) => item.id === current.accessory?.id) || rollPetAccessory(monsterId, rng);

  return {
    ...petDex,
    [monsterId]: {
      id: monsterId,
      xp: nextXp,
      level,
      size: petSizeFromLevel(level),
      accessory,
      skins: current.skins || [],
      activeSkin: current.activeSkin || null,
    },
  };
}

function getFoodById(foodId) {
  return PET_FOODS.find((food) => food.id === foodId) || PET_FOODS[0];
}

function normalizeFoodBag(rawBag = {}) {
  return PET_FOODS.reduce((bag, food) => {
    const amount = Math.max(0, Math.floor(Number(rawBag?.[food.id]) || 0));
    if (amount > 0) bag[food.id] = amount;
    return bag;
  }, {});
}

function addFoodToBag(foodBag = {}, foodId, amount = 1) {
  const food = getFoodById(foodId);
  const current = Math.max(0, Math.floor(Number(foodBag?.[food.id]) || 0));
  const nextAmount = Math.max(0, current + amount);
  const nextBag = { ...foodBag };

  if (nextAmount === 0) {
    delete nextBag[food.id];
  } else {
    nextBag[food.id] = nextAmount;
  }

  return normalizeFoodBag(nextBag);
}

function chooseFoodReward({ scoreGain = 0, streak = 0, caught = false, retrying = false } = {}) {
  const performance = scoreGain + streak * 12 + (caught ? 44 : 0) - (retrying ? 26 : 0);

  if (performance >= 235) return getFoodById('starCake');
  if (performance >= 185) return getFoodById('goldFruit');
  if (performance >= 130) return getFoodById('cake');
  return getFoodById('berry');
}

function feedPetWithFood(petDex = {}, monsterId, foodId, rng = Math.random) {
  const food = getFoodById(foodId);
  const nextPetDex = growPetDex(petDex, monsterId, food.xp, rng);
  return {
    food,
    petDex: nextPetDex,
    pet: nextPetDex[monsterId],
    stage: getPetStage(nextPetDex[monsterId]),
  };
}

const MANDARIN_BANK = {
  grade2: [
    {
      domain: '字音字形',
      prompt: '哪一個詞語用字正確？',
      answer: '晴天',
      choices: ['晴天', '睛天', '請天', '清天'],
      explanation: '天空放晴要用「日」字旁的晴。',
      tip: '想想這個字和太陽有關。',
    },
    {
      domain: '字音字形',
      prompt: '哪一個詞語用字正確？',
      answer: '打掃',
      choices: ['打掃', '打搔', '打稍', '打梢'],
      explanation: '打掃要用「手」字旁的掃，表示用手清理。',
      tip: '打掃要用手做，找「扌」旁的字。',
    },
    {
      domain: '字音字形',
      prompt: '「小鳥在天空（　）翔」，括號裡要填哪個字？',
      answer: '飛',
      choices: ['飛', '非', '匪', '肥'],
      explanation: '小鳥在天空飛翔，要用「飛」。',
      tip: '想想哪個字是翅膀的動作。',
    },
    {
      domain: '字音字形',
      prompt: '「妹妹喜歡吃ㄆㄧㄥˊ果」，正確的字是？',
      answer: '蘋',
      choices: ['蘋', '平', '瓶', '評'],
      explanation: '蘋果是植物，所以用「艹」字頭的蘋。',
      tip: '水果名稱常有「艹」字頭。',
    },
    {
      domain: '字音字形',
      prompt: '「他ㄍㄠ興得跳起來」，正確的字是？',
      answer: '高',
      choices: ['高', '糕', '告', '哥'],
      explanation: '高興的「高」就是高低的高。',
      tip: '「糕」是點心，「高興」是心情。',
    },
    {
      domain: '部首',
      prompt: '「海」的部首是什麼？',
      answer: '水（氵）',
      choices: ['水（氵）', '每', '木', '火'],
      explanation: '海和水有關，部首是三點水「氵」。',
      tip: '和水有關的字常有「氵」。',
    },
    {
      domain: '部首',
      prompt: '「樹」的部首是什麼？',
      answer: '木',
      choices: ['木', '寸', '口', '土'],
      explanation: '樹是植物，部首是「木」。',
      tip: '和樹木有關的字常有「木」。',
    },
    {
      domain: '部首',
      prompt: '「媽、姐、妹」這三個字都有什麼部首？',
      answer: '女',
      choices: ['女', '馬', '且', '未'],
      explanation: '媽、姐、妹都是女生，部首都是「女」。',
      tip: '看看三個字左邊一樣的地方。',
    },
    {
      domain: '量詞',
      prompt: '一（　）雨傘，括號裡最適合填哪個量詞？',
      answer: '把',
      choices: ['把', '張', '條', '朵'],
      explanation: '雨傘常說「一把雨傘」。',
      tip: '可以拿在手上的傘，常用「把」。',
    },
    {
      domain: '量詞',
      prompt: '一（　）小狗，括號裡最適合填哪個量詞？',
      answer: '隻',
      choices: ['隻', '本', '朵', '件'],
      explanation: '小動物常用「隻」，例如一隻小狗。',
      tip: '小貓、小狗、小鳥都用這個量詞。',
    },
    {
      domain: '量詞',
      prompt: '一（　）白雲，括號裡最適合填哪個量詞？',
      answer: '朵',
      choices: ['朵', '匹', '台', '雙'],
      explanation: '雲和花常用「朵」，例如一朵白雲。',
      tip: '花也用這個量詞。',
    },
    {
      domain: '量詞',
      prompt: '一（　）筷子，括號裡最適合填哪個量詞？',
      answer: '雙',
      choices: ['雙', '條', '間', '頭'],
      explanation: '筷子兩支一組，所以說一雙筷子。',
      tip: '兩個一組的東西常用「雙」。',
    },
    {
      domain: '標點',
      prompt: '「你要不要一起玩」句尾最適合加什麼？',
      answer: '？',
      choices: ['？', '。', '！', '、'],
      explanation: '這是在問問題，句尾用問號。',
      tip: '聽起來像在問別人。',
    },
    {
      domain: '標點',
      prompt: '「哇　煙火好漂亮」，「哇」後面最適合加什麼標點？',
      answer: '！',
      choices: ['！', '。', '？', '、'],
      explanation: '表示驚訝或大叫時，用驚嘆號「！」。',
      tip: '很驚喜、很大聲的話用驚嘆號。',
    },
    {
      domain: '標點',
      prompt: '「我喜歡蘋果、香蕉和草莓。」句子裡的「、」叫什麼？',
      answer: '頓號',
      choices: ['頓號', '句號', '逗號', '問號'],
      explanation: '並列的東西中間用頓號「、」隔開。',
      tip: '列出好幾樣東西時會用到它。',
    },
    {
      domain: '詞語理解',
      prompt: '「專心」的意思最接近哪一個？',
      answer: '很認真',
      choices: ['很認真', '很吵鬧', '很害怕', '很乾淨'],
      explanation: '專心就是把注意力放在正在做的事情上。',
      tip: '上課看老師、聽清楚，就是專心。',
    },
    {
      domain: '詞語理解',
      prompt: '「幫忙」的意思最接近哪一個？',
      answer: '協助別人做事',
      choices: ['協助別人做事', '自己玩遊戲', '大聲唱歌', '快點睡覺'],
      explanation: '幫忙就是出力協助別人。',
      tip: '想想幫媽媽做家事的樣子。',
    },
    {
      domain: '詞語理解',
      prompt: '「美麗」的意思最接近哪一個？',
      answer: '漂亮',
      choices: ['漂亮', '醜陋', '快速', '大聲'],
      explanation: '美麗和漂亮意思相近。',
      tip: '形容很好看的詞。',
    },
    {
      domain: '相反詞',
      prompt: '「快樂」的相反詞是哪一個？',
      answer: '難過',
      choices: ['難過', '開心', '高興', '歡喜'],
      explanation: '快樂的相反是難過。',
      tip: '其他三個都和快樂意思相近。',
    },
    {
      domain: '相反詞',
      prompt: '「明亮」的相反詞是哪一個？',
      answer: '黑暗',
      choices: ['黑暗', '光亮', '雪白', '乾淨'],
      explanation: '明亮的相反是黑暗。',
      tip: '想想關燈後房間的樣子。',
    },
    {
      domain: '相反詞',
      prompt: '「高大」的相反詞是哪一個？',
      answer: '矮小',
      choices: ['矮小', '巨大', '高壯', '寬大'],
      explanation: '高大的相反是矮小。',
      tip: '兩個字都要相反。',
    },
    {
      domain: '照樣造句',
      prompt: '「一邊唱歌，一邊走路」表示什麼？',
      answer: '兩件事同時做',
      choices: ['兩件事同時做', '先唱歌再走路', '只做一件事', '都沒有做'],
      explanation: '「一邊……一邊……」表示兩件事同時進行。',
      tip: '句子裡有兩個「一邊」。',
    },
    {
      domain: '照樣造句',
      prompt: '「西瓜又大又甜」是說西瓜怎麼樣？',
      answer: '同時有大和甜兩個特點',
      choices: ['同時有大和甜兩個特點', '只有大沒有甜', '先大後來變甜', '不大也不甜'],
      explanation: '「又……又……」表示同時有兩種特點。',
      tip: '兩個「又」連接兩個形容詞。',
    },
    {
      domain: '照樣造句',
      prompt: '「弟弟像小猴子一樣爬上爬下」這句話是？',
      answer: '把弟弟比喻成小猴子',
      choices: ['把弟弟比喻成小猴子', '弟弟真的變成猴子', '小猴子變成弟弟', '弟弟在動物園工作'],
      explanation: '用「像」把弟弟比喻成調皮的小猴子。',
      tip: '看到「像」，想想是把什麼比成什麼。',
    },
    {
      domain: '照樣造句',
      prompt: '「風箏越飛越高」表示風箏怎麼樣？',
      answer: '高度一直增加',
      choices: ['高度一直增加', '越來越低', '停在原地', '已經掉下來'],
      explanation: '「越……越……」表示程度一直增加。',
      tip: '兩個「越」表示變化持續。',
    },
    {
      domain: '短文閱讀',
      prompt: '小安把掉在地上的鉛筆撿起來還給同學。小安做了什麼？',
      answer: '幫助同學',
      choices: ['幫助同學', '忘記功課', '整理書包', '跑去操場'],
      explanation: '撿起鉛筆還給同學，是幫助別人的行為。',
      tip: '看主角做了哪一件事。',
    },
    {
      domain: '短文閱讀',
      prompt: '「小美每天睡前都認真刷牙，牙齒又健康又亮白。」小美牙齒健康的原因是？',
      answer: '每天認真刷牙',
      choices: ['每天認真刷牙', '常常吃糖果', '每天睡很晚', '不喜歡喝水'],
      explanation: '短文說小美每天刷牙，所以牙齒健康。',
      tip: '找出「因為做了什麼，所以怎麼樣」。',
    },
    {
      domain: '短文閱讀',
      prompt: '「下課時，大家在操場跳繩、踢球，玩得滿頭大汗。」大家在哪裡玩？',
      answer: '操場',
      choices: ['操場', '教室', '圖書館', '家裡'],
      explanation: '短文一開始就說大家在操場玩。',
      tip: '找表示地點的詞。',
    },
    {
      domain: '短文閱讀',
      prompt: '「奶奶種的番茄紅了，我們一起摘下來做沙拉。」我們用番茄做了什麼？',
      answer: '沙拉',
      choices: ['沙拉', '果汁', '蛋糕', '湯麵'],
      explanation: '短文最後說摘番茄做沙拉。',
      tip: '注意句子最後做的事。',
    },
    {
      domain: '短文閱讀',
      prompt: '「下大雨了，小文把傘借給沒帶傘的同學，自己淋了一點雨。」小文是個怎樣的人？',
      answer: '樂於助人',
      choices: ['樂於助人', '粗心大意', '愛開玩笑', '害怕下雨'],
      explanation: '小文願意把傘借給同學，表示他樂於助人。',
      tip: '從行為想想他的個性。',
    },
  ],
  grade5: [
    {
      domain: '成語',
      prompt: '「半途而廢」的意思是什麼？',
      answer: '事情做到一半就放棄',
      choices: ['事情做到一半就放棄', '事情做得很完整', '走路走得很快', '把物品分成兩半'],
      explanation: '半途而廢是指沒有堅持到底。',
      tip: '看「廢」有停止、放棄的意思。',
    },
    {
      domain: '成語',
      prompt: '「畫蛇添足」的意思是什麼？',
      answer: '多做了多餘的事，反而把事情弄糟',
      choices: ['多做了多餘的事，反而把事情弄糟', '畫畫技術非常好', '幫助別人完成作品', '做事速度很快'],
      explanation: '蛇本來沒有腳，硬畫上腳反而不像蛇，比喻多此一舉。',
      tip: '蛇需要腳嗎？',
    },
    {
      domain: '成語',
      prompt: '「井底之蛙」比喻什麼樣的人？',
      answer: '見識狹小的人',
      choices: ['見識狹小的人', '很會游泳的人', '住在鄉下的人', '不怕困難的人'],
      explanation: '青蛙只看得到井口的天空，比喻見識不廣。',
      tip: '想想青蛙在井底能看到多大的天空。',
    },
    {
      domain: '成語',
      prompt: '「亡羊補牢」的意思是什麼？',
      answer: '出了問題後及時補救，還不算太遲',
      choices: ['出了問題後及時補救，還不算太遲', '羊跑光了就不用管了', '蓋好牢固的羊圈再養羊', '把羊賣掉換錢'],
      explanation: '羊丟了趕快修補羊圈，比喻犯錯後及時改正。',
      tip: '「補牢」是補救的動作。',
    },
    {
      domain: '成語',
      prompt: '「一舉兩得」的意思是什麼？',
      answer: '做一件事同時得到兩種好處',
      choices: ['做一件事同時得到兩種好處', '舉起兩個很重的東西', '一個人得到兩份禮物', '做兩件事都失敗了'],
      explanation: '一個舉動同時有兩種收穫。',
      tip: '「舉」是動作，「得」是收穫。',
    },
    {
      domain: '成語',
      prompt: '「守株待兔」比喻什麼？',
      answer: '不努力，只想靠運氣得到成果',
      choices: ['不努力，只想靠運氣得到成果', '有耐心地等待朋友', '保護樹木愛護動物', '在樹下認真讀書'],
      explanation: '農夫不耕田只等兔子撞樹，比喻心存僥倖。',
      tip: '兔子會一直撞上同一棵樹嗎？',
    },
    {
      domain: '成語',
      prompt: '哪一個成語最適合形容「人非常多」？',
      answer: '人山人海',
      choices: ['人山人海', '門可羅雀', '一毛不拔', '孤掌難鳴'],
      explanation: '人山人海形容人多得像山像海。',
      tip: '「門可羅雀」剛好相反，是冷清的意思。',
    },
    {
      domain: '成語',
      prompt: '「雪中送炭」的意思是什麼？',
      answer: '在別人最需要時給予幫助',
      choices: ['在別人最需要時給予幫助', '下雪天送木炭生意很好', '錦上添花讓事情更完美', '在雪地裡玩耍'],
      explanation: '在又冷又下雪時送炭取暖，比喻及時幫助有困難的人。',
      tip: '想想下雪天最需要什麼。',
    },
    {
      domain: '修辭',
      prompt: '「風兒在窗邊唱歌」用了哪一種修辭？',
      answer: '擬人',
      choices: ['擬人', '排比', '設問', '誇飾'],
      explanation: '把風寫得像人一樣會唱歌，這是擬人。',
      tip: '自然物做了人的動作。',
    },
    {
      domain: '修辭',
      prompt: '「教室安靜得連一根針掉在地上都聽得見」用了哪一種修辭？',
      answer: '誇飾',
      choices: ['誇飾', '擬人', '譬喻', '排比'],
      explanation: '把安靜的程度誇大形容，這是誇飾。',
      tip: '真的聽得到針掉地上嗎？故意說得很誇張。',
    },
    {
      domain: '修辭',
      prompt: '「彎彎的月亮像一艘小船」用了哪一種修辭？',
      answer: '譬喻',
      choices: ['譬喻', '設問', '擬人', '誇飾'],
      explanation: '用「像」把月亮比喻成小船，這是譬喻。',
      tip: '有「像」、「好像」、「彷彿」常是譬喻。',
    },
    {
      domain: '修辭',
      prompt: '「是誰帶來了春天？是溫柔的春風。」用了哪一種修辭？',
      answer: '設問',
      choices: ['設問', '誇飾', '譬喻', '映襯'],
      explanation: '自己提出問題再自己回答，這是設問。',
      tip: '先問後答，引起讀者注意。',
    },
    {
      domain: '修辭',
      prompt: '「他跑得像一陣風一樣快」用了哪一種修辭？',
      answer: '譬喻',
      choices: ['譬喻', '排比', '設問', '頂真'],
      explanation: '用「像」把跑步的速度比喻成風。',
      tip: '把人跑步比成什麼了？',
    },
    {
      domain: '修辭',
      prompt: '「山上的小樹向我們招手」用了哪一種修辭？',
      answer: '擬人',
      choices: ['擬人', '誇飾', '設問', '譬喻'],
      explanation: '小樹不會招手，把它寫成像人一樣，是擬人。',
      tip: '招手是人的動作。',
    },
    {
      domain: '詞義辨析',
      prompt: '「寬闊」的相反詞最接近哪一個？',
      answer: '狹窄',
      choices: ['狹窄', '明亮', '乾燥', '安靜'],
      explanation: '寬闊是很寬，狹窄是很窄。',
      tip: '想想道路很窄時怎麼說。',
    },
    {
      domain: '詞義辨析',
      prompt: '「節省」的相反詞最接近哪一個？',
      answer: '浪費',
      choices: ['浪費', '節約', '儲蓄', '愛惜'],
      explanation: '節省是珍惜使用，浪費是隨便用掉。',
      tip: '其他選項和節省意思相近。',
    },
    {
      domain: '詞義辨析',
      prompt: '「絡繹不絕」的意思是什麼？',
      answer: '來往的人車接連不斷',
      choices: ['來往的人車接連不斷', '路上完全沒有人', '繩子斷掉接不起來', '說話結結巴巴'],
      explanation: '絡繹不絕形容人或車馬前後相連、往來不斷。',
      tip: '常用來形容熱鬧的街道或景點。',
    },
    {
      domain: '詞義辨析',
      prompt: '「謙虛」的相反詞最接近哪一個？',
      answer: '驕傲',
      choices: ['驕傲', '客氣', '有禮', '虛心'],
      explanation: '謙虛是不自大，驕傲是自以為了不起。',
      tip: '哪個詞是覺得自己最厲害？',
    },
    {
      domain: '詞義辨析',
      prompt: '「茂密」的意思最接近哪一個？',
      answer: '草木長得又多又密',
      choices: ['草木長得又多又密', '土地非常乾燥', '聲音非常大', '顏色非常鮮豔'],
      explanation: '茂密形容植物生長得旺盛濃密。',
      tip: '常說「茂密的森林」。',
    },
    {
      domain: '句型',
      prompt: '哪一句最適合接在「雖然下雨，」後面？',
      answer: '但是我們仍準時到校。',
      choices: ['但是我們仍準時到校。', '所以天空很藍。', '並且昨天很熱。', '或者書包很重。'],
      explanation: '「雖然……但是……」表示前後有轉折。',
      tip: '看到「雖然」，常會找「但是」。',
    },
    {
      domain: '句型',
      prompt: '哪一句最適合接在「因為颱風來了，」後面？',
      answer: '所以運動會延期舉行。',
      choices: ['所以運動會延期舉行。', '但是天氣非常晴朗。', '不如我們去游泳。', '雖然大家都很開心。'],
      explanation: '「因為……所以……」表示原因和結果。',
      tip: '颱風來了會造成什麼結果？',
    },
    {
      domain: '句型',
      prompt: '哪一句最適合接在「他不但會畫畫，」後面？',
      answer: '而且還會彈鋼琴。',
      choices: ['而且還會彈鋼琴。', '所以不會唱歌。', '但是很會畫畫。', '因為他不喜歡音樂。'],
      explanation: '「不但……而且……」表示更進一層。',
      tip: '「不但」後面常接「而且」。',
    },
    {
      domain: '句型',
      prompt: '哪一句最適合接在「與其在家發呆，」後面？',
      answer: '不如出門運動。',
      choices: ['不如出門運動。', '所以繼續發呆。', '但是天氣很好。', '而且越來越無聊。'],
      explanation: '「與其……不如……」表示比較後選擇後者。',
      tip: '「與其」後面常接「不如」。',
    },
    {
      domain: '字音字形',
      prompt: '哪一個詞語用字完全正確？',
      answer: '辯論',
      choices: ['辯論', '辨論', '辮論', '瓣論'],
      explanation: '辯論用言語爭論，中間是「言」的「辯」。',
      tip: '辯論要說話，找有「言」的字。',
    },
    {
      domain: '字音字形',
      prompt: '哪一個詞語用字完全正確？',
      answer: '再接再厲',
      choices: ['再接再厲', '再接再勵', '在接在厲', '再皆再厲'],
      explanation: '「再接再厲」的「厲」是磨利的意思，不寫成「勵」。',
      tip: '這是常見的錯字陷阱。',
    },
    {
      domain: '字音字形',
      prompt: '哪一個詞語用字完全正確？',
      answer: '迫不及待',
      choices: ['迫不及待', '迫不急待', '破不及待', '迫不級待'],
      explanation: '「迫不及待」是急得來不及等待，用「及」不用「急」。',
      tip: '「來不及」的「及」。',
    },
    {
      domain: '標點',
      prompt: '書名「小王子」在文章中通常會加上哪種標號？',
      answer: '《小王子》',
      choices: ['《小王子》', '「小王子」', '，小王子，', '？小王子？'],
      explanation: '書名常用書名號《》。',
      tip: '書、電影、文章標題常有專用標號。',
    },
    {
      domain: '閱讀推論',
      prompt: '「他反覆檢查答案，才把考卷交出去。」可以推論他很？',
      answer: '謹慎',
      choices: ['謹慎', '粗心', '貪睡', '生氣'],
      explanation: '反覆檢查再交卷，表示做事小心謹慎。',
      tip: '看行動背後的態度。',
    },
    {
      domain: '閱讀推論',
      prompt: '「哥哥每天放學都先寫完功課，才出門打球。」可以推論哥哥？',
      answer: '能管理自己的時間',
      choices: ['能管理自己的時間', '不喜歡打球', '功課常常遲交', '每天都很晚睡'],
      explanation: '先完成該做的事再玩，表示他會安排時間。',
      tip: '注意「先……才……」的順序。',
    },
    {
      domain: '閱讀推論',
      prompt: '「這家麵店每天一開門，門口就大排長龍。」可以推論？',
      answer: '這家店的麵很受歡迎',
      choices: ['這家店的麵很受歡迎', '這家店快要倒閉了', '老闆不想做生意', '店裡沒有客人'],
      explanation: '大排長龍表示很多人想吃，生意很好。',
      tip: '排隊的人多代表什麼？',
    },
    {
      domain: '閱讀推論',
      prompt: '「妹妹一看到桌上的禮物，眼睛立刻亮了起來。」妹妹的心情是？',
      answer: '驚喜開心',
      choices: ['驚喜開心', '難過想哭', '非常生氣', '覺得無聊'],
      explanation: '「眼睛亮了起來」表示又驚又喜。',
      tip: '從表情變化猜心情。',
    },
  ],
};

const ENGLISH_BANK = {
  grade2: [
    { word: 'red', zh: '紅色', sentence: 'It is red.', blank: 'It is ___.', distractors: ['blue', 'seven', 'desk'] },
    { word: 'blue', zh: '藍色', sentence: 'The sky is blue.', blank: 'The sky is ___.', distractors: ['red', 'ten', 'cat'] },
    { word: 'green', zh: '綠色', sentence: 'The leaf is green.', blank: 'The leaf is ___.', distractors: ['yellow', 'three', 'pen'] },
    { word: 'yellow', zh: '黃色', sentence: 'The banana is yellow.', blank: 'The banana is ___.', distractors: ['green', 'dog', 'two'] },
    { word: 'seven', zh: '七', sentence: 'I see seven stars.', blank: 'I see ___ stars.', distractors: ['two', 'green', 'pen'] },
    { word: 'ten', zh: '十', sentence: 'I have ten fingers.', blank: 'I have ___ fingers.', distractors: ['seven', 'red', 'bag'] },
    { word: 'three', zh: '三', sentence: 'There are three cats.', blank: 'There are ___ cats.', distractors: ['ten', 'blue', 'book'] },
    { word: 'book', zh: '書', sentence: 'This is a book.', blank: 'This is a ___.', distractors: ['bag', 'cat', 'run'] },
    { word: 'pen', zh: '筆', sentence: 'I have a pen.', blank: 'I have a ___.', distractors: ['book', 'fish', 'six'] },
    { word: 'bag', zh: '書包', sentence: 'My bag is big.', blank: 'My ___ is big.', distractors: ['pen', 'milk', 'one'] },
    { word: 'desk', zh: '書桌', sentence: 'It is a desk.', blank: 'It is a ___.', distractors: ['ruler', 'bird', 'four'] },
    { word: 'ruler', zh: '尺', sentence: 'That is a ruler.', blank: 'That is a ___.', distractors: ['desk', 'egg', 'nine'] },
    { word: 'hello', zh: '你好', sentence: 'Hello, Mia!', blank: '___, Mia!', distractors: ['Goodbye', 'Blue', 'Ten'] },
    { word: 'goodbye', zh: '再見', sentence: 'Goodbye, Sam!', blank: '___, Sam!', distractors: ['Hello', 'Red', 'Five'] },
    { word: 'thank you', zh: '謝謝你', sentence: 'Thank you, Mom!', blank: '___, Mom!', distractors: ['Sit down', 'Goodbye', 'Eight'] },
    { word: 'good morning', zh: '早安', sentence: 'Good morning, teacher!', blank: '___, teacher!', distractors: ['Good night', 'Thank you', 'Stand up'] },
    { word: 'sit down', zh: '坐下', sentence: 'Please sit down.', blank: 'Please ___.', distractors: ['stand up', 'open it', 'red'] },
    { word: 'stand up', zh: '起立', sentence: 'Please stand up.', blank: 'Please ___.', distractors: ['sit down', 'thank you', 'blue'] },
    { word: 'listen', zh: '聽', sentence: 'Listen to the teacher.', blank: '___ to the teacher.', distractors: ['Run', 'Eat', 'Red'] },
    { word: 'cat', zh: '貓', sentence: 'The cat is cute.', blank: 'The ___ is cute.', distractors: ['dog', 'pen', 'ten'] },
    { word: 'dog', zh: '狗', sentence: 'The dog can run.', blank: 'The ___ can run.', distractors: ['cat', 'book', 'six'] },
    { word: 'bird', zh: '鳥', sentence: 'The bird can fly.', blank: 'The ___ can fly.', distractors: ['fish', 'desk', 'two'] },
    { word: 'fish', zh: '魚', sentence: 'The fish can swim.', blank: 'The ___ can swim.', distractors: ['bird', 'bag', 'five'] },
    { word: 'apple', zh: '蘋果', sentence: 'I like apples.', blank: 'I like ___s.', distractors: ['egg', 'pen', 'one'] },
    { word: 'milk', zh: '牛奶', sentence: 'I drink milk.', blank: 'I drink ___.', distractors: ['apple', 'desk', 'nine'] },
    { word: 'egg', zh: '蛋', sentence: 'This is an egg.', blank: 'This is an ___.', distractors: ['milk', 'cat', 'ten'] },
    { word: 'A a', zh: '字母 A 的大小寫', sentence: 'A is for apple.', blank: '___ is for apple.', distractors: ['B b', 'C c', 'D d'] },
  ],
  grade5: [
    { word: 'usually', zh: '通常', sentence: 'I usually get up at six.', blank: 'I ___ get up at six.', distractors: ['never', 'table', 'hungry'] },
    { word: 'always', zh: '總是', sentence: 'I always brush my teeth at night.', blank: 'I ___ brush my teeth at night.', distractors: ['never', 'kitchen', 'short'] },
    { word: 'never', zh: '從不', sentence: 'She never gets up late.', blank: 'She ___ gets up late.', distractors: ['always', 'window', 'tall'] },
    { word: 'get up', zh: '起床', sentence: 'I get up at six thirty.', blank: 'I ___ at six thirty.', distractors: ['go to bed', 'eat lunch', 'sunny'] },
    { word: 'go to bed', zh: '上床睡覺', sentence: 'I go to bed at ten.', blank: 'I ___ at ten.', distractors: ['get up', 'watch TV', 'cloudy'] },
    { word: 'do my homework', zh: '做我的功課', sentence: 'I do my homework after school.', blank: 'I ___ after school.', distractors: ['go to bed', 'wash the car', 'rainy'] },
    { word: 'watch TV', zh: '看電視', sentence: 'They watch TV at night.', blank: 'They ___ at night.', distractors: ['get up', 'read maps', 'windy'] },
    { word: 'wash the dishes', zh: '洗碗', sentence: 'I wash the dishes after dinner.', blank: 'I ___ after dinner.', distractors: ['watch TV', 'go to school', 'snowy'] },
    { word: 'breakfast', zh: '早餐', sentence: 'He has breakfast at 7:00.', blank: 'He has ___ at 7:00.', distractors: ['homework', 'Sunday', 'shirt'] },
    { word: 'library', zh: '圖書館', sentence: 'She reads books in the library.', blank: 'She reads books in the ___.', distractors: ['kitchen', 'river', 'cloudy'] },
    { word: 'museum', zh: '博物館', sentence: 'We see old things in the museum.', blank: 'We see old things in the ___.', distractors: ['library', 'breakfast', 'Monday'] },
    { word: 'hospital', zh: '醫院', sentence: 'The doctor works in the hospital.', blank: 'The doctor works in the ___.', distractors: ['museum', 'July', 'dinner'] },
    { word: 'restaurant', zh: '餐廳', sentence: 'We eat dinner at the restaurant.', blank: 'We eat dinner at the ___.', distractors: ['hospital', 'Friday', 'ruler'] },
    { word: 'post office', zh: '郵局', sentence: 'She buys stamps at the post office.', blank: 'She buys stamps at the ___.', distractors: ['restaurant', 'morning', 'happy'] },
    { word: 'between', zh: '在兩者之間', sentence: 'The shop is between the bank and the park.', blank: 'The shop is ___ the bank and the park.', distractors: ['under', 'hungry', 'yesterday'] },
    { word: 'behind', zh: '在……後面', sentence: 'The dog is behind the door.', blank: 'The dog is ___ the door.', distractors: ['between', 'breakfast', 'tall'] },
    { word: 'in front of', zh: '在……前面', sentence: 'The bus stop is in front of the school.', blank: 'The bus stop is ___ the school.', distractors: ['behind', 'usually', 'July'] },
    { word: 'next to', zh: '在……旁邊', sentence: 'The park is next to the library.', blank: 'The park is ___ the library.', distractors: ['in front of', 'always', 'dinner'] },
    { word: 'Monday', zh: '星期一', sentence: 'Today is Monday.', blank: 'Today is ___.', distractors: ['July', 'morning', 'library'] },
    { word: 'July', zh: '七月', sentence: 'My birthday is in July.', blank: 'My birthday is in ___.', distractors: ['Monday', 'night', 'museum'] },
    { word: 'sunny', zh: '晴朗的', sentence: 'It is sunny today.', blank: 'It is ___ today.', distractors: ['rainy', 'breakfast', 'between'] },
    { word: 'rainy', zh: '下雨的', sentence: 'It is rainy. Take your umbrella.', blank: 'It is ___. Take your umbrella.', distractors: ['sunny', 'Monday', 'behind'] },
    { word: 'What time is it?', zh: '現在幾點？', sentence: 'What time is it? It is eight.', blank: '___ It is eight.', distractors: ['How old are you?', 'Where is it?', 'Can you swim?'] },
    { word: 'Does she play soccer?', zh: '她踢足球嗎？', sentence: 'Does she play soccer? Yes, she does.', blank: '___ Yes, she does.', distractors: ['Do he plays soccer?', 'Is she soccer?', 'Where soccer?'] },
    { word: 'What day is today?', zh: '今天星期幾？', sentence: 'What day is today? It is Friday.', blank: '___ It is Friday.', distractors: ['What time is it?', 'How much is it?', 'Where are you?'] },
    { word: 'Where is the cat?', zh: '貓在哪裡？', sentence: 'Where is the cat? It is under the table.', blank: '___ It is under the table.', distractors: ['What day is today?', 'Who is she?', 'Can you sing?'] },
    { word: 'How much is it?', zh: '這個多少錢？', sentence: 'How much is it? It is ninety dollars.', blank: '___ It is ninety dollars.', distractors: ['How old are you?', 'What time is it?', 'Where is the dog?'] },
  ],
};

const NATURAL_BANK = {
  grade2: [
    {
      domain: '植物觀察',
      prompt: '植物的哪一個部位通常可以吸收水分？',
      answer: '根',
      choices: ['根', '花', '果實', '種子'],
      explanation: '根可以幫助植物固定身體，也能從土壤吸收水分。',
      tip: '想想植物哪個部位長在土裡。',
    },
    {
      domain: '植物觀察',
      prompt: '植物的葉子常常是綠色，主要可以幫助植物做什麼？',
      answer: '製造養分',
      choices: ['製造養分', '發出叫聲', '搬運石頭', '變成磁鐵'],
      explanation: '葉子能接收陽光，幫助植物製造需要的養分。',
      tip: '葉子和陽光最有關。',
    },
    {
      domain: '動物與生活',
      prompt: '下列哪一項是照顧小動物時合適的做法？',
      answer: '給牠合適的食物和乾淨的水',
      choices: ['給牠合適的食物和乾淨的水', '一直大聲嚇牠', '把牠放在太陽下不管', '讓牠吃任何垃圾'],
      explanation: '照顧動物要注意食物、水和安全的生活環境。',
      tip: '想想怎樣做會讓動物舒服安全。',
    },
    {
      domain: '天氣變化',
      prompt: '看到天空有很多烏雲，可能表示接下來會怎樣？',
      answer: '可能下雨',
      choices: ['可能下雨', '一定下雪', '太陽會不見一年', '磁鐵會變大'],
      explanation: '烏雲常和降雨有關，但仍要看實際天氣變化。',
      tip: '想想出門前看烏雲會準備什麼。',
    },
    {
      domain: '水的觀察',
      prompt: '水放進不同形狀的杯子，水面形狀會怎樣？',
      answer: '配合容器形狀改變',
      choices: ['配合容器形狀改變', '永遠是正方形', '一定變成石頭', '會自己消失'],
      explanation: '水沒有固定形狀，會隨容器改變外形。',
      tip: '想想把水倒進碗和瓶子的樣子。',
    },
    {
      domain: '磁鐵與力',
      prompt: '磁鐵最可能吸住哪一種物品？',
      answer: '鐵製迴紋針',
      choices: ['鐵製迴紋針', '木頭鉛筆', '塑膠尺', '紙張'],
      explanation: '磁鐵可以吸引鐵製物品。',
      tip: '找含有鐵的物品。',
    },
    {
      domain: '植物觀察',
      prompt: '種子發芽通常需要哪些條件？',
      answer: '水分和適當的溫度',
      choices: ['水分和適當的溫度', '很大的聲音', '五顏六色的燈光', '完全不能碰水'],
      explanation: '種子發芽需要水分、空氣和適當的溫度。',
      tip: '想想種綠豆時要先做什麼。',
    },
    {
      domain: '植物觀察',
      prompt: '向日葵的花通常會朝向哪裡？',
      answer: '太陽',
      choices: ['太陽', '地面', '大海', '月亮'],
      explanation: '向日葵的名字就是「向著太陽」的意思。',
      tip: '從名字就能找到答案。',
    },
    {
      domain: '植物觀察',
      prompt: '觀察校園植物時，哪一個做法最正確？',
      answer: '用眼睛仔細看並畫下來記錄',
      choices: ['用眼睛仔細看並畫下來記錄', '把葉子全部拔光', '用力搖晃樹枝', '隨便亂踩花圃'],
      explanation: '觀察要仔細看、做紀錄，並且愛護植物。',
      tip: '觀察時不可以傷害植物。',
    },
    {
      domain: '動物與生活',
      prompt: '蝴蝶小時候（幼蟲）的樣子是什麼？',
      answer: '毛毛蟲',
      choices: ['毛毛蟲', '小蝌蚪', '小魚', '小鳥'],
      explanation: '蝴蝶的一生：卵、幼蟲（毛毛蟲）、蛹、成蟲。',
      tip: '想想蝴蝶長大的過程。',
    },
    {
      domain: '動物與生活',
      prompt: '蝌蚪長大以後會變成什麼？',
      answer: '青蛙',
      choices: ['青蛙', '蝴蝶', '小雞', '金魚'],
      explanation: '蝌蚪是青蛙的小時候，會慢慢長出四隻腳變成青蛙。',
      tip: '牠們都住在水邊。',
    },
    {
      domain: '動物與生活',
      prompt: '螞蟻發現食物時，常常會怎麼做？',
      answer: '排隊合作把食物搬回巢',
      choices: ['排隊合作把食物搬回巢', '自己吃完就睡覺', '把食物丟進水裡', '叫小鳥幫忙吃'],
      explanation: '螞蟻會分工合作，一起把食物搬回巢穴。',
      tip: '觀察地上的螞蟻常排成一條線。',
    },
    {
      domain: '動物與生活',
      prompt: '魚在水裡主要用什麼呼吸？',
      answer: '鰓',
      choices: ['鰓', '鼻子', '翅膀', '尾巴'],
      explanation: '魚用鰓在水中呼吸。',
      tip: '看看魚頭兩側一開一合的地方。',
    },
    {
      domain: '天氣變化',
      prompt: '晴天時，影子會出現在物體的哪一邊？',
      answer: '背對太陽的那一邊',
      choices: ['背對太陽的那一邊', '面對太陽的那一邊', '物體的正上方', '到處都有影子'],
      explanation: '光被物體擋住，影子出現在太陽的相反方向。',
      tip: '影子和太陽玩躲貓貓，永遠在相反邊。',
    },
    {
      domain: '天氣變化',
      prompt: '風吹的時候，我們可以看到什麼現象？',
      answer: '旗子飄動、樹葉搖晃',
      choices: ['旗子飄動、樹葉搖晃', '石頭自己滾上山', '影子變成藍色', '水變成冰塊'],
      explanation: '風看不到，但可以從旗子、樹葉的擺動感覺到。',
      tip: '風本身看不見，要看它推動的東西。',
    },
    {
      domain: '水的觀察',
      prompt: '水放進冷凍庫結冰後，會變成什麼狀態？',
      answer: '固體',
      choices: ['固體', '氣體', '還是液體', '會消失不見'],
      explanation: '水結冰後變成固體的冰。',
      tip: '冰塊硬硬的，有固定形狀。',
    },
    {
      domain: '水的觀察',
      prompt: '濕衣服曬太陽會變乾，是因為水怎麼了？',
      answer: '變成水蒸氣跑到空氣中',
      choices: ['變成水蒸氣跑到空氣中', '變成冰塊掉下來', '被衣服吃掉了', '變成石頭'],
      explanation: '水受熱會蒸發，變成看不見的水蒸氣。',
      tip: '水不見了，其實是飛到空氣裡。',
    },
    {
      domain: '水的觀察',
      prompt: '把糖放進水裡攪拌，糖會怎麼樣？',
      answer: '溶解在水中看不見',
      choices: ['溶解在水中看不見', '變成大石頭', '浮在水面跳舞', '把水變成冰'],
      explanation: '糖會溶解在水裡，水變甜但看不到糖粒。',
      tip: '喝糖水時看得到糖嗎？',
    },
    {
      domain: '磁鐵與力',
      prompt: '磁鐵的哪個部分吸力最強？',
      answer: '兩端（磁極）',
      choices: ['兩端（磁極）', '正中間', '到處一樣強', '完全沒有吸力'],
      explanation: '磁鐵兩端的磁極吸力最強。',
      tip: '迴紋針最容易被吸在磁鐵的哪裡？',
    },
    {
      domain: '磁鐵與力',
      prompt: '兩塊磁鐵的同極（例如 N 極對 N 極）互相靠近，會發生什麼？',
      answer: '互相排斥推開',
      choices: ['互相排斥推開', '緊緊吸在一起', '一起發光', '變成一塊大磁鐵'],
      explanation: '磁鐵同極相斥、異極相吸。',
      tip: '一樣的磁極就像吵架，會互相推開。',
    },
    {
      domain: '磁鐵與力',
      prompt: '磁鐵隔著一張薄紙，還能吸住迴紋針嗎？',
      answer: '可以，磁力能穿過薄紙',
      choices: ['可以，磁力能穿過薄紙', '完全不行', '紙會燒起來', '迴紋針會變成磁鐵飛走'],
      explanation: '磁力可以穿過紙張、塑膠等較薄的物品。',
      tip: '可以在家用紙和磁鐵試試看。',
    },
  ],
  grade5: [
    {
      domain: '植物世界面面觀',
      prompt: '植物體的層次由小到大，哪一個順序最合理？',
      answer: '細胞 → 器官 → 個體',
      choices: ['細胞 → 器官 → 個體', '個體 → 細胞 → 器官', '器官 → 個體 → 細胞', '細胞 → 個體 → 器官'],
      explanation: '植物是由細胞組成器官，根、莖、葉、花、果實、種子等器官再組成個體。',
      tip: '先從最小的單位想起。',
    },
    {
      domain: '植物構造與功能',
      prompt: '植物的根最主要有哪兩種功能？',
      answer: '固定植物和吸收水分',
      choices: ['固定植物和吸收水分', '製造花粉和果實', '散播種子和發光', '產生火焰和氧氣'],
      explanation: '根能抓住土壤固定植物，也能吸收水分與部分養分。',
      tip: '根在土裡，先想固定和吸收。',
    },
    {
      domain: '植物構造與功能',
      prompt: '葉片進行光合作用時，主要需要哪些條件？',
      answer: '陽光、水和二氧化碳',
      choices: ['陽光、水和二氧化碳', '石頭、火焰和沙子', '鹽巴、鐵粉和油', '聲音、磁鐵和玻璃'],
      explanation: '葉片利用陽光，配合水和空氣中的二氧化碳製造養分。',
      tip: '光合作用和「光」、水、空氣有關。',
    },
    {
      domain: '植物構造與功能',
      prompt: '植物莖中的維管束主要和什麼功能有關？',
      answer: '運輸水分和養分',
      choices: ['運輸水分和養分', '讓植物飛行', '讓種子燃燒', '讓花變成石頭'],
      explanation: '維管束像植物體內的運輸通道，幫助水分和養分在植物體內移動。',
      tip: '看到「管束」，想像運送的管道。',
    },
    {
      domain: '植物蒸散作用',
      prompt: '植物蒸散作用主要是水分從哪裡散失到空氣中？',
      answer: '葉片氣孔',
      choices: ['葉片氣孔', '果實種子', '岩石表面', '火焰中心'],
      explanation: '葉片上的氣孔是水分散失的重要通道。',
      tip: '想想葉片上可以讓氣體進出的地方。',
    },
    {
      domain: '植物繁殖',
      prompt: '開花植物中，受粉後最可能發育成果實的部位是？',
      answer: '子房',
      choices: ['子房', '葉脈', '根毛', '莖皮'],
      explanation: '花的子房在受粉、受精後會發育成果實。',
      tip: '果實和花的繁殖構造有關。',
    },
    {
      domain: '植物分類',
      prompt: '要把植物分類，最適合先觀察哪一項？',
      answer: '形態特徵',
      choices: ['形態特徵', '座位號碼', '鉛筆顏色', '午餐菜單'],
      explanation: '植物可依外形、葉、花、果實等形態特徵進行分類。',
      tip: '分類要找看得到、可比較的特徵。',
    },
    {
      domain: '空氣和燃燒',
      prompt: '用透明杯罩住燃燒中的小蠟燭，火焰慢慢熄滅，主要原因是什麼？',
      answer: '氧氣變少',
      choices: ['氧氣變少', '蠟燭變冷凍', '杯子製造雨水', '火焰變成植物'],
      explanation: '燃燒需要助燃物，蠟燭被罩住後可用的氧氣逐漸減少，火焰就會熄滅。',
      tip: '想想火焰被蓋住後，哪一種空氣成分不夠。',
    },
    {
      domain: '燃燒三要素',
      prompt: '物質燃燒通常需要哪三個條件同時存在？',
      answer: '可燃物、助燃物、達到燃點',
      choices: ['可燃物、助燃物、達到燃點', '水、土壤、陽光', '磁鐵、聲音、影子', '重量、長度、面積'],
      explanation: '燃燒要有可燃物、助燃物，並且溫度達到燃點。',
      tip: '少一個條件，火就不容易繼續燃燒。',
    },
    {
      domain: '氧氣與二氧化碳',
      prompt: '氧氣在燃燒實驗中常被稱為什麼？',
      answer: '助燃物',
      choices: ['助燃物', '可燃物', '食物', '沉澱物'],
      explanation: '氧氣可以幫助燃燒，但氧氣本身在這裡是助燃物。',
      tip: '「助」有幫助的意思。',
    },
    {
      domain: '滅火與安全',
      prompt: '用水滅火時，常見的主要原理是哪一項？',
      answer: '降低溫度',
      choices: ['降低溫度', '增加氧氣', '增加可燃物', '讓燃點降低'],
      explanation: '水可以帶走熱，使溫度降低到不易繼續燃燒。',
      tip: '水會讓熱的東西變涼。',
    },
    {
      domain: '滅火與安全',
      prompt: '油鍋起火時，哪一個做法最危險？',
      answer: '直接倒水進油鍋',
      choices: ['直接倒水進油鍋', '關閉瓦斯', '用鍋蓋覆蓋', '通知大人並遠離'],
      explanation: '油鍋起火直接倒水可能讓熱油噴濺，應先注意安全並請大人處理。',
      tip: '想想熱油遇到水會不會噴濺。',
    },
    {
      domain: '燃燒產物',
      prompt: '蠟燭燃燒後，若用乾冷杯子靠近火焰上方，杯壁可能出現什麼？',
      answer: '小水珠',
      choices: ['小水珠', '新葉片', '鐵釘', '土壤'],
      explanation: '蠟燭燃燒會產生水蒸氣，遇到較冷的杯壁可能凝結成小水珠。',
      tip: '水蒸氣遇冷會變成小水珠。',
    },
    {
      domain: '燃燒與生活',
      prompt: '烤肉架有通風孔，最主要是為了什麼？',
      answer: '讓空氣流通幫助燃燒',
      choices: ['讓空氣流通幫助燃燒', '讓木炭變成水', '讓食物變重', '讓火沒有氧氣'],
      explanation: '通風孔能讓空氣流通，提供燃燒需要的氧氣。',
      tip: '火要旺，常需要空氣流通。',
    },
    {
      domain: '植物分類與繁殖',
      prompt: '蕨類植物主要靠什麼繁殖後代？',
      answer: '孢子',
      choices: ['孢子', '果實', '花蜜', '球根'],
      explanation: '蕨類不開花，葉背的孢子囊會釋放孢子繁殖。',
      tip: '翻開蕨類葉子背面，常看到一點一點的孢子囊。',
    },
    {
      domain: '植物構造與功能',
      prompt: '植物的莖最主要的功能是什麼？',
      answer: '支撐植物並運輸水分和養分',
      choices: ['支撐植物並運輸水分和養分', '吸引蝴蝶來唱歌', '把陽光反射回天空', '讓植物可以走路'],
      explanation: '莖支撐枝葉，莖裡的維管束負責運輸水分和養分。',
      tip: '想想莖把根和葉連接起來的功能。',
    },
    {
      domain: '植物分類與繁殖',
      prompt: '花的構造中，負責製造花粉的是哪個部分？',
      answer: '雄蕊',
      choices: ['雄蕊', '雌蕊', '花萼', '花托'],
      explanation: '雄蕊的花藥會產生花粉。',
      tip: '「雄」蕊製造花粉，「雌」蕊接受花粉。',
    },
    {
      domain: '植物分類與繁殖',
      prompt: '花的構造中，負責接受花粉、之後發育成果實的是？',
      answer: '雌蕊',
      choices: ['雌蕊', '雄蕊', '葉片', '根毛'],
      explanation: '花粉落在雌蕊柱頭上完成授粉，子房再發育成果實。',
      tip: '果實是從雌蕊底部的子房長出來的。',
    },
    {
      domain: '植物分類與繁殖',
      prompt: '依照葉脈的樣子，植物的葉子常分成哪兩大類？',
      answer: '網狀脈和平行脈',
      choices: ['網狀脈和平行脈', '圓形脈和方形脈', '直立脈和倒立脈', '粗脈和細脈'],
      explanation: '葉脈像網子的是網狀脈，像平行線的是平行脈。',
      tip: '榕樹的葉子和稻草的葉子長得不一樣。',
    },
    {
      domain: '植物分類與繁殖',
      prompt: '椰子的種子主要靠什麼方式傳播？',
      answer: '隨水流漂送',
      choices: ['隨水流漂送', '黏在動物毛皮上', '被風吹走', '自己彈射出去'],
      explanation: '椰子果實能浮在海上，隨水流漂到遠方發芽。',
      tip: '椰子樹常長在海邊。',
    },
    {
      domain: '植物分類與繁殖',
      prompt: '鬼針草的種子主要靠什麼方式傳播？',
      answer: '附著在人或動物身上',
      choices: ['附著在人或動物身上', '隨水流漂送', '靠雷聲震動', '埋在地下不動'],
      explanation: '鬼針草種子有倒鉤，會黏在衣服或動物毛上被帶走。',
      tip: '走過草叢褲管上黏黏的小針就是它。',
    },
    {
      domain: '氧氣與二氧化碳',
      prompt: '把二氧化碳通入澄清石灰水，石灰水會有什麼變化？',
      answer: '變混濁',
      choices: ['變混濁', '變成紅色', '燒起來', '完全沒有變化'],
      explanation: '二氧化碳會使澄清石灰水變混濁，這是檢驗二氧化碳的方法。',
      tip: '這是辨認二氧化碳最常用的實驗。',
    },
    {
      domain: '氧氣與二氧化碳',
      prompt: '把快熄滅只剩火星的線香放入哪種氣體中，會重新燒得更旺？',
      answer: '氧氣',
      choices: ['氧氣', '二氧化碳', '水蒸氣', '氮氣'],
      explanation: '氧氣有助燃性，能使有火星的線香復燃。',
      tip: '助燃的氣體會讓火更旺。',
    },
    {
      domain: '氧氣與二氧化碳',
      prompt: '氧氣大約佔空氣體積的多少？',
      answer: '大約五分之一',
      choices: ['大約五分之一', '大約一半', '幾乎全部', '完全沒有'],
      explanation: '空氣中氮氣約佔五分之四，氧氣約佔五分之一。',
      tip: '空氣中最多的其實是氮氣。',
    },
    {
      domain: '滅火與安全',
      prompt: '關閉瓦斯開關來滅火，是移除燃燒三要素中的哪一個？',
      answer: '可燃物',
      choices: ['可燃物', '助燃物', '燃點', '二氧化碳'],
      explanation: '瓦斯是可燃物，關閉開關就是移除可燃物。',
      tip: '瓦斯本身是會燒的東西。',
    },
    {
      domain: '滅火與安全',
      prompt: '油鍋起火時用鍋蓋蓋住滅火，是利用什麼原理？',
      answer: '隔絕空氣（助燃物）',
      choices: ['隔絕空氣（助燃物）', '增加可燃物', '提高溫度', '加入更多油'],
      explanation: '鍋蓋隔絕氧氣，火失去助燃物就會熄滅。',
      tip: '蓋住後火接觸不到氧氣。',
    },
    {
      domain: '滅火與安全',
      prompt: '火災發生時，下列哪一個逃生做法最正確？',
      answer: '壓低身體，用濕毛巾摀住口鼻迅速離開',
      choices: ['壓低身體，用濕毛巾摀住口鼻迅速離開', '躲進衣櫥等待救援', '搭電梯快速下樓', '回房間拿玩具再逃'],
      explanation: '濃煙會往上飄，壓低身體、摀住口鼻、走樓梯逃生最安全。',
      tip: '煙在上面，所以身體要放低。',
    },
  ],
};

MANDARIN_BANK.grade3 = [
  { domain: '字音字形', prompt: '哪一個詞語用字正確？', answer: '觀察', choices: ['觀察', '關察', '觀查', '官察'], explanation: '「觀察」表示仔細看、仔細研究，兩個字都要寫正確。', tip: '觀察是用眼睛和腦袋仔細看。' },
  { domain: '字音字形', prompt: '「他把日記寫得很（　）細。」括號中最適合填哪個字？', answer: '詳', choices: ['詳', '祥', '羊', '洋'], explanation: '「詳細」是內容完整、說明清楚的意思。', tip: '詳細的「詳」有言字旁，和說明有關。' },
  { domain: '詞語理解', prompt: '「井然有序」最接近哪一個意思？', answer: '整齊而有規矩', choices: ['整齊而有規矩', '非常吵鬧', '速度很快', '天氣很熱'], explanation: '井然有序形容排列或做事有條理。', tip: '看到「有序」，想想順序很清楚。' },
  { domain: '相近詞', prompt: '「欣賞」的意思最接近哪一個？', answer: '喜歡並仔細觀看', choices: ['喜歡並仔細觀看', '用力搬動', '偷偷藏起來', '大聲責罵'], explanation: '欣賞常用在看風景、作品，也表示喜愛。', tip: '欣賞一幅畫，就是好好看它。' },
  { domain: '句型', prompt: '「只要明天不下雨，」最適合接哪一句？', answer: '我們就去公園野餐。', choices: ['我們就去公園野餐。', '但是昨天很冷。', '或者鉛筆很長。', '因為他正在睡覺。'], explanation: '「只要……就……」表示條件成立後會有結果。', tip: '看到只要，常找就。' },
  { domain: '修辭', prompt: '「太陽像金色的大餅掛在天空」用了哪一種修辭？', answer: '譬喻', choices: ['譬喻', '擬人', '設問', '排比'], explanation: '用「像」把太陽比成金色大餅，是譬喻。', tip: '看到像、好像、彷彿，常是譬喻。' },
  { domain: '段落重點', prompt: '「小雨先整理書包，再檢查聯絡簿，最後把水壺裝滿。」這段主要在說小雨？', answer: '做好上學前準備', choices: ['做好上學前準備', '在操場跑步', '去買新水壺', '忘記帶功課'], explanation: '整理書包、檢查聯絡簿、裝水壺都是上學前準備。', tip: '把三個動作合起來看。' },
  { domain: '閱讀推論', prompt: '「弟弟把剩下的餅乾分給大家，自己只留一小塊。」可以推論弟弟？', answer: '願意分享', choices: ['願意分享', '非常自私', '討厭餅乾', '忘記吃飯'], explanation: '他把餅乾分給大家，表示有分享的心。', tip: '從行為判斷個性。' },
  { domain: '標點', prompt: '「媽媽說：今天晚上吃咖哩飯。」冒號主要用來表示什麼？', answer: '後面接著說話內容', choices: ['後面接著說話內容', '句子已經結束', '列出錯字', '表示疑問'], explanation: '冒號常用在提示後面的話或項目。', tip: '說話前常看到冒號。' },
  { domain: '詞語辨析', prompt: '哪一個詞語最適合形容「做事前想清楚步驟」？', answer: '計畫', choices: ['計畫', '喧鬧', '潮濕', '遺失'], explanation: '計畫是事先安排做法。', tip: '安排步驟就是有計畫。' },
];

MANDARIN_BANK.grade4 = [
  { domain: '字音字形', prompt: '哪一個詞語用字正確？', answer: '鍛鍊', choices: ['鍛鍊', '段練', '煅煉', '段鍊'], explanation: '「鍛鍊」表示透過練習讓身體或能力更好。', tip: '鍛鍊和金字旁的「鍛」有關，常表示反覆磨練。' },
  { domain: '詞義辨析', prompt: '「沉著」最接近哪一個意思？', answer: '遇事冷靜不慌張', choices: ['遇事冷靜不慌張', '跑得非常快', '聲音很大', '故意拖延'], explanation: '沉著表示面對事情時能保持冷靜。', tip: '考試時沉著，就是先穩住心情。' },
  { domain: '成語', prompt: '「全神貫注」最適合形容哪一種情況？', answer: '專心看書不受干擾', choices: ['專心看書不受干擾', '一邊吃飯一邊玩', '忘記帶聯絡簿', '把東西排成一列'], explanation: '全神貫注表示精神完全集中在一件事上。', tip: '「全神」就是全部精神都放進去。' },
  { domain: '句型', prompt: '「雖然今天下雨，」最適合接哪一句？', answer: '但是我們仍然準時到校。', choices: ['但是我們仍然準時到校。', '因為書包很輕。', '所以昨天很熱。', '或者他正在畫畫。'], explanation: '「雖然……但是……」表示前後有轉折。', tip: '看到雖然，常接但是、仍然。' },
  { domain: '標點', prompt: '句子「咦 這裡怎麼有一封信」中間最適合加哪個標點？', answer: '，', choices: ['，', '。', '、', '：'], explanation: '「咦」是語氣詞，後面通常用逗號讓語氣停一下。', tip: '語氣詞後面常短暫停頓。' },
  { domain: '修辭', prompt: '「風把窗簾輕輕推開」用了哪一種修辭？', answer: '擬人', choices: ['擬人', '譬喻', '排比', '誇飾'], explanation: '把風寫得像人一樣會「推開」，屬於擬人。', tip: '把不是人的東西寫成會做人類動作，就是擬人。' },
  { domain: '段落大意', prompt: '「奶奶先把麵團揉圓，再放入烤箱，最後端出香噴噴的麵包。」這段主要在說？', answer: '奶奶做麵包的過程', choices: ['奶奶做麵包的過程', '奶奶去市場買菜', '烤箱壞掉了', '麵包店打烊了'], explanation: '句子依序說明揉麵、烘烤、端出麵包，是製作過程。', tip: '把先、再、最後串起來看。' },
  { domain: '閱讀推論', prompt: '「小杰把傘借給同學，自己等雨小一點才回家。」可以推論小杰？', answer: '願意替別人著想', choices: ['願意替別人著想', '討厭同學', '忘記帶傘', '很想淋雨'], explanation: '他把傘借出去，代表能照顧同學需要。', tip: '從人物行動推想個性。' },
  { domain: '語句銜接', prompt: '「妹妹每天練習直笛，＿＿表演時吹得很穩。」空格最適合填？', answer: '因此', choices: ['因此', '可是', '除非', '或者'], explanation: '前面是原因，後面是結果，適合用「因此」。', tip: '先找出原因和結果。' },
  { domain: '閱讀理解', prompt: '「這座公園有大片草地、兒童遊具和環湖步道。」這句主要在介紹公園的？', answer: '設施與環境', choices: ['設施與環境', '開放時間', '交通費用', '管理員姓名'], explanation: '草地、遊具、步道都是公園裡的設施或環境特色。', tip: '列出的名詞都在描述同一個地方。' },
  { domain: '詞語理解', prompt: '「琳瑯滿目」常用來形容什麼？', answer: '物品種類很多，看起來很豐富', choices: ['物品種類很多，看起來很豐富', '天空完全沒有雲', '聲音非常小', '路面很平坦'], explanation: '琳瑯滿目形容美好或豐富的東西很多，讓人看不完。', tip: '逛市集看到很多東西時很適合用。' },
  { domain: '句子改寫', prompt: '把「他跑得很快。」改成更生動的句子，哪一句最好？', answer: '他像一陣風似的向前跑。', choices: ['他像一陣風似的向前跑。', '他跑。', '他很快很快很快。', '他沒有跑。'], explanation: '用「像一陣風」能讓速度的感覺更鮮明。', tip: '生動句子會讓畫面更清楚。' },
];

MANDARIN_BANK.grade6 = [
  { domain: '成語', prompt: '「鍥而不捨」最接近哪一個意思？', answer: '持續努力不放棄', choices: ['持續努力不放棄', '把東西丟掉', '一直改變主意', '遇事只靠運氣'], explanation: '鍥而不捨比喻有恆心，持續努力。', tip: '想想「不捨」就是不放下。' },
  { domain: '成語', prompt: '「見微知著」的意思是什麼？', answer: '從小地方看出大趨勢', choices: ['從小地方看出大趨勢', '看見微小的字就寫下來', '故意忽略細節', '只注意結果不看原因'], explanation: '見微知著表示能從細微跡象推知明顯結果。', tip: '微是小，著是明顯。' },
  { domain: '詞義辨析', prompt: '「審慎」最接近哪一個意思？', answer: '仔細而小心', choices: ['仔細而小心', '衝動而急躁', '輕鬆而隨便', '吵鬧而混亂'], explanation: '審慎表示做事前仔細考慮。', tip: '審慎決定，就是不亂做決定。' },
  { domain: '修辭', prompt: '「時間像河水一樣不停往前流」用了哪一種修辭？', answer: '譬喻', choices: ['譬喻', '轉化', '排比', '設問'], explanation: '把時間比成河水，是譬喻。', tip: '找出被比的事物和拿來比的事物。' },
  { domain: '句型', prompt: '哪一句使用「即使……也……」最合理？', answer: '即使遇到困難，也要先冷靜想辦法。', choices: ['即使遇到困難，也要先冷靜想辦法。', '即使天氣很好，所以不用出門。', '即使書包很重，因為鉛筆很短。', '即使我吃早餐，或者去圖書館。'], explanation: '「即使……也……」表示讓步關係。', tip: '前面是假設困難，後面仍然做某事。' },
  { domain: '文本結構', prompt: '文章先提出問題，再說明原因和解決方法，這種結構最接近哪一種？', answer: '問題解決', choices: ['問題解決', '時間順序', '人物對話', '景物描寫'], explanation: '先說問題，再分析與提出做法，是問題解決結構。', tip: '看文章如何安排內容。' },
  { domain: '閱讀推論', prompt: '「她查了三本資料，又訪問長輩，才完成報告。」可以推論她？', answer: '做研究很認真', choices: ['做研究很認真', '完全沒有準備', '只想趕快玩', '不喜歡閱讀'], explanation: '查資料、訪問長輩代表蒐集資料用心。', tip: '從準備過程推論態度。' },
  { domain: '觀點判斷', prompt: '哪一句比較像「事實」？', answer: '今天校園量到的氣溫是28度。', choices: ['今天校園量到的氣溫是28度。', '今天是最完美的一天。', '這本書一定最好看。', '所有人都應該喜歡跑步。'], explanation: '可以被測量或查證的是事實。', tip: '事實能查證，意見常帶有喜好。' },
  { domain: '摘要', prompt: '做摘要時，最應該保留哪一項？', answer: '主要事件和重要原因', choices: ['主要事件和重要原因', '每一個形容詞', '所有標點符號', '自己最愛的句子'], explanation: '摘要要抓重點，保留核心內容。', tip: '摘要不是全文抄一次。' },
  { domain: '語句銜接', prompt: '「他平時勤練投籃，＿＿在比賽中投進關鍵球。」空格最適合填？', answer: '因此', choices: ['因此', '然而', '除非', '不如'], explanation: '前面是原因，後面是結果，適合用「因此」。', tip: '找原因和結果的關係。' },
];

ENGLISH_BANK.grade3 = [
  { word: 'family', zh: '家人', sentence: 'This is my family.', blank: 'This is my ___.', distractors: ['pencil', 'yellow', 'seven'] },
  { word: 'mother', zh: '媽媽', sentence: 'My mother is kind.', blank: 'My ___ is kind.', distractors: ['father', 'teacher', 'apple'] },
  { word: 'father', zh: '爸爸', sentence: 'My father can cook.', blank: 'My ___ can cook.', distractors: ['mother', 'desk', 'blue'] },
  { word: 'teacher', zh: '老師', sentence: 'Good morning, teacher.', blank: 'Good morning, ___.', distractors: ['window', 'eraser', 'happy'] },
  { word: 'pencil', zh: '鉛筆', sentence: 'I have a pencil.', blank: 'I have a ___.', distractors: ['ruler', 'sister', 'green'] },
  { word: 'eraser', zh: '橡皮擦', sentence: 'This is an eraser.', blank: 'This is an ___.', distractors: ['pencil', 'brother', 'eight'] },
  { word: 'happy', zh: '開心的', sentence: 'I am happy.', blank: 'I am ___.', distractors: ['sad', 'book', 'ten'] },
  { word: 'sad', zh: '難過的', sentence: 'She is sad.', blank: 'She is ___.', distractors: ['happy', 'ruler', 'red'] },
  { word: 'Do you like apples?', zh: '你喜歡蘋果嗎？', sentence: 'Do you like apples? Yes, I do.', blank: '___ Yes, I do.', distractors: ['What color is it?', 'How old are you?', 'Where is my book?'] },
  { word: 'What is your name?', zh: '你叫什麼名字？', sentence: 'What is your name? I am Mia.', blank: '___ I am Mia.', distractors: ['How many dogs?', 'What color is it?', 'Can it fly?'] },
  { word: 'How are you?', zh: '你好嗎？', sentence: 'How are you? I am fine.', blank: '___ I am fine.', distractors: ['Where is it?', 'What is this?', 'Do you run?'] },
  { word: 'brown', zh: '棕色', sentence: 'The dog is brown.', blank: 'The dog is ___.', distractors: ['purple', 'mother', 'pencil'] },
];

ENGLISH_BANK.grade4 = [
  { word: 'breakfast', zh: '早餐', sentence: 'I eat breakfast at seven.', blank: 'I eat ___ at seven.', distractors: ['homework', 'window', 'purple'] },
  { word: 'lunch', zh: '午餐', sentence: 'She has lunch at school.', blank: 'She has ___ at school.', distractors: ['shoes', 'bed', 'rainy'] },
  { word: 'dinner', zh: '晚餐', sentence: 'We have dinner at six thirty.', blank: 'We have ___ at six thirty.', distractors: ['music', 'bathroom', 'green'] },
  { word: 'library', zh: '圖書館', sentence: 'I read books in the library.', blank: 'I read books in the ___.', distractors: ['kitchen', 'zoo', 'shirt'] },
  { word: 'bakery', zh: '麵包店', sentence: 'The bakery smells good.', blank: 'The ___ smells good.', distractors: ['river', 'pencil', 'bedroom'] },
  { word: 'hungry', zh: '餓的', sentence: 'I am hungry. I want a sandwich.', blank: 'I am ___. I want a sandwich.', distractors: ['tired', 'sunny', 'behind'] },
  { word: 'thirsty', zh: '口渴的', sentence: 'He is thirsty. He drinks water.', blank: 'He is ___. He drinks water.', distractors: ['happy', 'small', 'library'] },
  { word: 'between', zh: '在兩者中間', sentence: 'The cat is between the boxes.', blank: 'The cat is ___ the boxes.', distractors: ['under', 'on', 'breakfast'] },
  { word: 'What time is it?', zh: '現在幾點？', sentence: 'What time is it? It is eight o clock.', blank: '___ It is eight o clock.', distractors: ['Where are you?', 'Do you like milk?', 'How old is she?'] },
  { word: 'Where is the bakery?', zh: '麵包店在哪裡？', sentence: 'Where is the bakery? It is near the park.', blank: '___ It is near the park.', distractors: ['What color is it?', 'Can you swim?', 'What time is it?'] },
  { word: 'I am washing my face.', zh: '我正在洗臉。', sentence: 'I am washing my face.', blank: 'I am ___ my face.', distractors: ['wash', 'washes', 'washed'] },
  { word: 'She is feeding the pet.', zh: '她正在餵寵物。', sentence: 'She is feeding the pet.', blank: 'She is ___ the pet.', distractors: ['feed', 'feeds', 'fed'] },
];

ENGLISH_BANK.grade6 = [
  { word: 'yesterday', zh: '昨天', sentence: 'I played basketball yesterday.', blank: 'I played basketball ___.', distractors: ['tomorrow', 'library', 'delicious'] },
  { word: 'visited', zh: '拜訪、參觀', sentence: 'We visited a museum last Sunday.', blank: 'We ___ a museum last Sunday.', distractors: ['visit', 'visits', 'visiting'] },
  { word: 'delicious', zh: '美味的', sentence: 'The soup is delicious.', blank: 'The soup is ___.', distractors: ['expensive', 'yesterday', 'straight'] },
  { word: 'expensive', zh: '昂貴的', sentence: 'This jacket is expensive.', blank: 'This jacket is ___.', distractors: ['cheap', 'hungry', 'visited'] },
  { word: 'straight', zh: '直走', sentence: 'Go straight and turn left.', blank: 'Go ___ and turn left.', distractors: ['behind', 'before', 'delicious'] },
  { word: 'turn left', zh: '左轉', sentence: 'Please turn left at the bank.', blank: 'Please ___ at the bank.', distractors: ['go home', 'eat lunch', 'played'] },
  { word: 'should', zh: '應該', sentence: 'You should drink more water.', blank: 'You ___ drink more water.', distractors: ['could not', 'yesterday', 'visited'] },
  { word: 'festival', zh: '節慶', sentence: 'The Moon Festival is in fall.', blank: 'The Moon ___ is in fall.', distractors: ['Station', 'Kitchen', 'Lesson'] },
  { word: 'What did you do yesterday?', zh: '你昨天做了什麼？', sentence: 'What did you do yesterday? I watched TV.', blank: '___ I watched TV.', distractors: ['What do you do every day?', 'Where are you going?', 'How much is it?'] },
  { word: 'How can I get to the bakery?', zh: '我要怎麼到麵包店？', sentence: 'How can I get to the bakery? Go straight.', blank: '___ Go straight.', distractors: ['What did you eat?', 'Do you like bread?', 'Who is your teacher?'] },
  { word: 'She is taller than me.', zh: '她比我高。', sentence: 'She is taller than me.', blank: 'She is ___ than me.', distractors: ['tall', 'tallest', 'the tall'] },
  { word: 'I usually take a bus.', zh: '我通常搭公車。', sentence: 'I usually take a bus.', blank: 'I ___ take a bus.', distractors: ['yesterday', 'deliciously', 'museum'] },
];

NATURAL_BANK.grade3 = [
  { domain: '植物的身體', prompt: '植物的根主要可以幫助植物做什麼？', answer: '固定身體並吸收水分', choices: ['固定身體並吸收水分', '發出聲音', '製造磁鐵', '讓植物走路'], explanation: '根長在土裡，可以固定植物，也能吸收水分。', tip: '想想根在土裡做什麼。' },
  { domain: '植物的身體', prompt: '葉子通常呈綠色，最常和哪一項有關？', answer: '接收陽光製造養分', choices: ['接收陽光製造養分', '吸住鐵釘', '變成石頭', '發出閃電'], explanation: '葉子能接收陽光，幫助植物製造養分。', tip: '葉子和陽光很有關。' },
  { domain: '動物與棲地', prompt: '魚的身體哪個構造最適合在水中游泳？', answer: '鰭和尾巴', choices: ['鰭和尾巴', '翅膀和羽毛', '厚毛皮', '長樹根'], explanation: '魚用鰭和尾巴在水中保持方向與前進。', tip: '想想魚游動時哪裡在擺動。' },
  { domain: '天氣觀察', prompt: '記錄天氣時，哪一項最適合每天固定觀察？', answer: '雲量、雨量、溫度或風', choices: ['雲量、雨量、溫度或風', '書包顏色', '午餐菜色', '鉛筆長短'], explanation: '天氣觀察會記錄雲、雨、溫度、風等變化。', tip: '找和天空、空氣有關的項目。' },
  { domain: '水的三態', prompt: '冰塊放在室溫下變成水，這是什麼變化？', answer: '融化', choices: ['融化', '凝固', '蒸發', '燃燒'], explanation: '固態的冰變成液態的水，叫融化。', tip: '冰變水就是融化。' },
  { domain: '溶解', prompt: '鹽放進水中攪拌後看不見，但水變鹹，表示鹽怎麼了？', answer: '溶解在水中', choices: ['溶解在水中', '變成空氣', '被杯子吃掉', '變成磁鐵'], explanation: '鹽會溶解在水中，所以看不到顆粒但水有味道。', tip: '糖水、鹽水都是溶解例子。' },
  { domain: '磁力與生活', prompt: '磁鐵最容易吸住哪一種物品？', answer: '鐵釘', choices: ['鐵釘', '紙杯', '塑膠湯匙', '木筷'], explanation: '磁鐵會吸引含鐵的物品。', tip: '找金屬裡含鐵的東西。' },
  { domain: '磁力與生活', prompt: '兩個磁鐵的同極靠近時，通常會？', answer: '互相排斥', choices: ['互相排斥', '變成水', '完全消失', '發出花香'], explanation: '磁鐵同極相斥，異極相吸。', tip: '一樣的磁極會推開。' },
  { domain: '觀察方法', prompt: '做自然觀察紀錄時，哪一個做法最好？', answer: '寫下日期、看到的現象和簡單圖', choices: ['寫下日期、看到的現象和簡單圖', '只寫自己心情', '把植物拔起來', '完全不記錄'], explanation: '好的紀錄會包含時間、現象與圖或表。', tip: '紀錄要讓之後的人看得懂。' },
  { domain: '生活中的力', prompt: '用手推門，門打開了，表示力可以改變物體的什麼？', answer: '運動狀態', choices: ['運動狀態', '名字', '顏色一定變紅', '重量立刻消失'], explanation: '力可以讓靜止的物體開始動，或改變運動方向。', tip: '推、拉都和力有關。' },
];

NATURAL_BANK.grade4 = [
  { domain: '水的移動', prompt: '植物根吸收的水分，主要會經由哪個構造往上運送？', answer: '莖', choices: ['莖', '花瓣', '果皮', '種子外殼'], explanation: '根吸收水分後，會透過莖運送到葉和其他部位。', tip: '莖像植物身體裡的通道。' },
  { domain: '水的變化', prompt: '水受熱變成水蒸氣，這種現象叫做？', answer: '蒸發', choices: ['蒸發', '凝固', '沉澱', '磁化'], explanation: '液態水變成氣態水蒸氣叫蒸發。', tip: '濕衣服曬乾也和蒸發有關。' },
  { domain: '昆蟲生活史', prompt: '蝴蝶的成長順序最正確的是？', answer: '卵、幼蟲、蛹、成蟲', choices: ['卵、幼蟲、蛹、成蟲', '卵、蛹、幼蟲、成蟲', '成蟲、卵、蛹、幼蟲', '幼蟲、成蟲、卵、蛹'], explanation: '蝴蝶會經過完全變態：卵、幼蟲、蛹、成蟲。', tip: '毛毛蟲是蝴蝶的幼蟲。' },
  { domain: '動物生活史', prompt: '青蛙從蝌蚪長成成蛙時，哪一項變化最明顯？', answer: '長出腳並逐漸失去尾巴', choices: ['長出腳並逐漸失去尾巴', '變成昆蟲', '身體長出羽毛', '完全不需要水'], explanation: '蝌蚪會長出後腳、前腳，尾巴逐漸消失，成為青蛙。', tip: '想想蝌蚪和青蛙外形差異。' },
  { domain: '月亮觀察', prompt: '同一個月中，月亮看起來形狀改變，主要稱為？', answer: '月相變化', choices: ['月相變化', '地震', '風向改變', '磁極交換'], explanation: '月亮亮面看起來會隨時間改變，稱為月相變化。', tip: '新月、上弦月、滿月都屬於月相。' },
  { domain: '天體觀察', prompt: '晚上觀察月亮時，哪一個紀錄最有幫助？', answer: '日期、時間、位置和形狀', choices: ['日期、時間、位置和形狀', '早餐吃什麼', '書包顏色', '電視節目名稱'], explanation: '天體觀察需要固定紀錄日期、時間、方向位置與外形。', tip: '好的觀察紀錄要能比較變化。' },
  { domain: '力與運動', prompt: '用力拉橡皮筋，橡皮筋形狀改變，表示力可以？', answer: '改變物體形狀', choices: ['改變物體形狀', '讓物體消失', '製造陽光', '讓水結冰'], explanation: '力可以改變物體的形狀，也可能改變運動狀態。', tip: '拉、壓、彎都能讓形狀改變。' },
  { domain: '摩擦力', prompt: '鞋底有紋路，主要可以增加什麼？', answer: '摩擦力', choices: ['摩擦力', '月光', '水蒸氣', '聲音速度'], explanation: '鞋底紋路能增加鞋子和地面的摩擦力，降低滑倒機會。', tip: '雨天走路怕滑，就和摩擦力有關。' },
  { domain: '電路', prompt: '要讓小燈泡發亮，電路必須是什麼狀態？', answer: '形成通路', choices: ['形成通路', '完全斷開', '只放在桌上', '把電池拿走'], explanation: '電池、導線和燈泡連成通路，電流才能流動。', tip: '電流要有完整路徑。' },
  { domain: '導體與絕緣體', prompt: '下列哪一種物品最容易導電？', answer: '銅線', choices: ['銅線', '塑膠尺', '木筷', '橡皮擦'], explanation: '金屬通常是良好導體，銅線很常用來導電。', tip: '電線裡面常有金屬。' },
  { domain: '聲音與振動', prompt: '彈吉他時，主要是哪個部分振動產生聲音？', answer: '琴弦', choices: ['琴弦', '琴盒顏色', '椅子腳', '樂譜封面'], explanation: '琴弦被撥動後振動，會產生聲音。', tip: '聲音常和振動有關。' },
  { domain: '實驗設計', prompt: '比較不同材質導電性時，最應該一次改變哪一項？', answer: '測試的材質', choices: ['測試的材質', '電池數量和燈泡種類全部改掉', '紀錄方式每次亂換', '每次都換不同桌子'], explanation: '公平測試應一次改變一個主要變因，其他條件盡量相同。', tip: '一次只改一個條件，結果才好比較。' },
];

NATURAL_BANK.grade6 = [
  { domain: '聲音', prompt: '聲音通常是由物體的什麼產生？', answer: '振動', choices: ['振動', '溶解', '蒸發', '沉澱'], explanation: '物體振動會產生聲音，振動停止聲音也會停止。', tip: '摸喉嚨說話時會感覺震動。' },
  { domain: '光', prompt: '光遇到鏡子時，最主要會發生什麼？', answer: '反射', choices: ['反射', '溶解', '燃燒', '結冰'], explanation: '鏡子表面平滑，能讓光反射形成影像。', tip: '照鏡子看到自己，和反射有關。' },
  { domain: '熱與物質', prompt: '水受熱變成水蒸氣，這種變化叫做？', answer: '蒸發', choices: ['蒸發', '凝固', '磁化', '沉積'], explanation: '液態水吸收熱後變成氣態水蒸氣，叫蒸發。', tip: '濕衣服曬乾也是蒸發。' },
  { domain: '簡單機械', prompt: '用開瓶器開瓶，比較省力，主要是利用哪一種簡單機械？', answer: '槓桿', choices: ['槓桿', '溫度計', '磁鐵', '漏斗'], explanation: '開瓶器利用支點與力臂，是槓桿的應用。', tip: '有支點、施力點、抗力點。' },
  { domain: '力與運動', prompt: '摩擦力太小時，走在地上最可能發生什麼？', answer: '容易滑倒', choices: ['容易滑倒', '一定飛起來', '影子消失', '水立刻結冰'], explanation: '摩擦力不足時，腳和地面不容易互相抓住，容易滑倒。', tip: '濕滑地板就是例子。' },
  { domain: '月亮與地球', prompt: '月亮本身會發光嗎？', answer: '不會，主要反射太陽光', choices: ['不會，主要反射太陽光', '會像燈泡一樣發光', '只在白天發光', '靠地球發熱發光'], explanation: '我們看到的月光主要是月球反射太陽光。', tip: '月亮像鏡子反射光。' },
  { domain: '太陽與生活', prompt: '地球自轉最直接造成哪一種現象？', answer: '晝夜交替', choices: ['晝夜交替', '四季完全消失', '磁鐵失效', '水不能蒸發'], explanation: '地球自轉使不同地區輪流面向太陽，因此有白天與夜晚。', tip: '一天中的白天和晚上。' },
  { domain: '生物與環境', prompt: '食物鏈中，植物通常扮演什麼角色？', answer: '生產者', choices: ['生產者', '消費者', '分解者', '天氣觀察者'], explanation: '植物能行光合作用製造養分，是生產者。', tip: '能自己製造養分的是生產者。' },
  { domain: '環境保護', prompt: '下列哪一項最能減少一次性塑膠使用？', answer: '自備水壺和餐具', choices: ['自備水壺和餐具', '每天買新的塑膠袋', '把垃圾丟進河裡', '使用後立刻亂丟'], explanation: '自備用品可以減少一次性塑膠垃圾。', tip: '重複使用比用完就丟更環保。' },
  { domain: '實驗設計', prompt: '公平測試時，除了要比較的條件外，其他條件應該？', answer: '盡量保持相同', choices: ['盡量保持相同', '全部隨便改', '不需要紀錄', '每次都換題目'], explanation: '公平測試要控制變因，才能判斷結果和哪個條件有關。', tip: '一次只改一個主要條件。' },
];

function makeRng(seed = Date.now()) {
  let state = (seed >>> 0) ^ 0x9e3779b9;
  state = Math.imul(state ^ (state >>> 16), 2246822507) >>> 0;
  state = Math.imul(state ^ (state >>> 13), 3266489909) >>> 0;
  state = (state ^ (state >>> 16)) >>> 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function pick(array, rng = Math.random) {
  return array[Math.floor(rng() * array.length)];
}

function shuffle(array, rng = Math.random) {
  const items = [...array];
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(rng() * (index + 1));
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }
  return items;
}

function choicesFrom(answer, distractors, rng) {
  const fallback = ['再想一次', '不確定', '以上皆非', '換個角度'];
  const realPool = [...new Set([answer, ...distractors])];
  const pool = realPool.length >= 4 ? realPool : [...new Set([...realPool, ...fallback])];
  const extra = pool.filter((choice) => choice !== answer);
  return shuffle([answer, ...shuffle(extra, rng).slice(0, 3)], rng);
}

function uniqueNumbers(numbers) {
  return [...new Set(numbers)].filter((value) => Number.isFinite(value));
}

function buildNumberChoices(answer, rng, spread = 6, allowNegative = false) {
  const offsets = shuffle([-spread, -3, -2, -1, 1, 2, 3, spread], rng);
  const choices = uniqueNumbers([answer, ...offsets.map((offset) => answer + offset)])
    .filter((value) => allowNegative || value >= 0)
    .slice(0, 4);

  while (choices.length < 4) {
    const candidate = answer + Math.floor(rng() * spread * 2) - spread;
    if ((allowNegative || candidate >= 0) && !choices.includes(candidate)) choices.push(candidate);
  }

  return shuffle(choices, rng).map(String);
}

function formatDecimal(value) {
  return String(Number(value.toFixed(2))).replace(/\.0$/, '');
}

function generateGrade5PercentQuestion({ grade = 'grade5' } = {}, rng = Math.random) {
  const typeIndex = Math.floor(rng() * 6);

  if (typeIndex === 0) {
    const base = pick([80, 100, 120, 150, 160, 200, 240, 300, 400], rng);
    const percent = pick([5, 10, 15, 20, 25, 30, 40, 50, 75], rng);
    const answer = (base * percent) / 100;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '百分率',
      prompt: `${base} 的 ${percent}% 是多少？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(8, Math.round(answer / 2))),
      explanation: `${percent}% = ${percent}/100，所以 ${base} × ${percent}/100 = ${answer}。`,
      tip: '百分率可以先變成分母 100 的分數。',
    });
  }

  if (typeIndex === 1) {
    const percent = pick([5, 8, 10, 12, 15, 20, 25, 40, 50, 75, 125], rng);
    const answer = formatDecimal(percent / 100);
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '百分率換小數',
      prompt: `${percent}% 化成小數是多少？`,
      answer,
      choices: choicesFrom(answer, [
        formatDecimal(percent / 10),
        formatDecimal(percent / 1000),
        `${percent}`,
        `${percent}/100`,
      ], rng),
      explanation: `${percent}% = ${percent}/100 = ${answer}。`,
      tip: '百分率換小數，小數點往左移兩位。',
    });
  }

  if (typeIndex === 2) {
    const original = pick([200, 300, 400, 500, 600, 800, 1000, 1200], rng);
    const offPercent = pick([10, 15, 20, 25, 30, 40], rng);
    const answer = (original * (100 - offPercent)) / 100;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '折扣百分率',
      prompt: `原價 ${original} 元，降價 ${offPercent}% 後，售價是多少元？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(20, Math.round(original * 0.12))),
      explanation: `降價 ${offPercent}% 後要付 ${100 - offPercent}%，所以 ${original} × ${(100 - offPercent) / 100} = ${answer} 元。`,
      tip: '先算還要付原價的百分之幾。',
    });
  }

  if (typeIndex === 3) {
    const base = pick([40, 60, 80, 100, 120, 160, 200], rng);
    const percent = pick([10, 20, 25, 30, 50], rng);
    const increase = rng() > 0.45;
    const answer = increase ? base + (base * percent) / 100 : base - (base * percent) / 100;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: increase ? '增加百分率' : '減少百分率',
      prompt: `${base} ${increase ? '增加' : '減少'} ${percent}% 後是多少？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(10, Math.round(base * 0.2))),
      explanation: `${base} 的 ${percent}% 是 ${(base * percent) / 100}，所以${increase ? '增加後' : '減少後'}是 ${answer}。`,
      tip: `先算出 ${percent}% 的量，再做${increase ? '加法' : '減法'}。`,
    });
  }

  if (typeIndex === 4) {
    const total = pick([20, 25, 30, 40, 50], rng);
    const percent = pick([40, 50, 60, 70, 75, 80, 90], rng);
    const correct = Math.round((total * percent) / 100);
    const answer = `${Math.round((correct / total) * 100)}%`;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '答對率',
      prompt: `小測驗共有 ${total} 題，答對 ${correct} 題，答對率是多少？`,
      answer,
      choices: choicesFrom(answer, [`${correct}%`, `${total - correct}%`, `${Math.round((total / correct) * 100)}%`, `${100 - Number(answer.replace('%', ''))}%`], rng),
      explanation: `答對率 = 答對題數 ÷ 全部題數 × 100% = ${correct} ÷ ${total} × 100% = ${answer}。`,
      tip: '看到「率」，用部分除以全部。',
    });
  }

  const total = pick([40, 50, 80, 100, 120, 160, 200], rng);
  const percent = pick([25, 30, 40, 50, 60, 75, 80], rng);
  const done = (total * percent) / 100;
  const answer = `${percent}%`;
  return makeQuestion({
    subject: 'math',
    grade,
    domain: '完成率',
    prompt: `一本書共有 ${total} 頁，已讀 ${done} 頁，完成率是多少？`,
    answer,
    choices: choicesFrom(answer, [`${done}%`, `${100 - percent}%`, `${Math.round((total / done) * 100)}%`, `${percent / 10}%`], rng),
    explanation: `完成率 = 已讀頁數 ÷ 全部頁數 × 100% = ${done} ÷ ${total} × 100% = ${answer}。`,
    tip: '部分 ÷ 全部，再化成百分率。',
  });
}

function generateGrade5UnitConversionQuestion({ grade = 'grade5' } = {}, rng = Math.random) {
  const typeIndex = Math.floor(rng() * 12);

  if (typeIndex === 0) {
    const hectares = pick([2, 3, 4, 5, 8, 12, 15, 20], rng);
    const answer = hectares * 100;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '公頃公畝換算',
      prompt: `${hectares} 公頃 = 多少公畝？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(40, answer / 2)),
      explanation: `1 公頃 = 100 公畝，所以 ${hectares} 公頃 = ${answer} 公畝。`,
      tip: '公頃換公畝，要乘以 100。',
    });
  }

  if (typeIndex === 1) {
    const hectares = pick([1, 2, 3, 4, 6, 8, 12, 15], rng);
    const answer = hectares * 10000;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '公頃平方公尺換算',
      prompt: `${hectares} 公頃 = 多少平方公尺？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(1000, answer / 4)),
      explanation: `1 公頃 = 10000 平方公尺，所以 ${hectares} 公頃 = ${answer} 平方公尺。`,
      tip: '公頃換平方公尺，要乘以 10000。',
    });
  }

  if (typeIndex === 2) {
    const ares = pick([12, 25, 36, 48, 75, 120, 250, 360], rng);
    const answer = ares * 100;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '公畝平方公尺換算',
      prompt: `${ares} 公畝 = 多少平方公尺？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(300, answer / 4)),
      explanation: `1 公畝 = 100 平方公尺，所以 ${ares} 公畝 = ${answer} 平方公尺。`,
      tip: '公畝換平方公尺，要乘以 100。',
    });
  }

  if (typeIndex === 3) {
    const km2 = pick([1, 2, 3, 4, 5, 8], rng);
    const answer = km2 * 100;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '平方公里公頃換算',
      prompt: `${km2} 平方公里 = 多少公頃？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(50, answer / 2)),
      explanation: `1 平方公里 = 100 公頃，所以 ${km2} 平方公里 = ${answer} 公頃。`,
      tip: '平方公里換公頃，要乘以 100。',
    });
  }

  if (typeIndex === 4) {
    const km2 = pick([1, 2, 3, 5], rng);
    const answer = km2 * 10000;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '平方公里公畝換算',
      prompt: `${km2} 平方公里 = 多少公畝？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(2000, answer / 3)),
      explanation: `1 平方公里 = 100 公頃 = 10000 公畝，所以答案是 ${answer} 公畝。`,
      tip: '先記：1 平方公里 = 10000 公畝。',
    });
  }

  if (typeIndex === 5) {
    const km2 = pick([1, 2, 3, 4], rng);
    const answer = km2 * 1000000;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '平方公里平方公尺換算',
      prompt: `${km2} 平方公里 = 多少平方公尺？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(100000, answer / 4)),
      explanation: `1 平方公里 = 1000000 平方公尺，所以 ${km2} 平方公里 = ${answer} 平方公尺。`,
      tip: '平方公里換平方公尺，要乘以 1000000。',
    });
  }

  if (typeIndex === 6) {
    const hectares = pick([1, 2, 4, 6, 9, 12, 15], rng);
    const ares = pick([5, 10, 25, 40, 60, 75], rng);
    const answer = hectares * 100 + ares;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '複名數換算',
      prompt: `${hectares} 公頃 ${ares} 公畝 = 多少公畝？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(35, hectares * 40)),
      explanation: `${hectares} 公頃 = ${hectares * 100} 公畝，再加 ${ares} 公畝，共 ${answer} 公畝。`,
      tip: '先把公頃換成公畝，再相加。',
    });
  }

  if (typeIndex === 7) {
    const ares = pick([125, 260, 375, 480, 630, 850, 1240], rng);
    const hectares = Math.floor(ares / 100);
    const remain = ares % 100;
    const answer = `${hectares}公頃${remain}公畝`;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '公畝換複名數',
      prompt: `${ares} 公畝 = 多少公頃多少公畝？`,
      answer,
      choices: choicesFrom(answer, [
        `${hectares}公頃${remain * 10}公畝`,
        `${hectares + 1}公頃${remain}公畝`,
        `${Math.max(0, hectares - 1)}公頃${remain + 100}公畝`,
        `${ares}公頃0公畝`,
      ], rng),
      explanation: `100 公畝 = 1 公頃，${ares} 公畝 = ${hectares} 公頃 ${remain} 公畝。`,
      tip: '每 100 公畝可以換成 1 公頃。',
    });
  }

  if (typeIndex === 8) {
    const tons = pick([1.2, 1.5, 2, 2.4, 3, 3.6, 5, 7.5], rng);
    const answer = tons * 1000;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '公噸公斤換算',
      prompt: `${tons} 公噸 = 多少公斤？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(200, answer / 4)),
      explanation: `1 公噸 = 1000 公斤，所以 ${tons} 公噸 = ${answer} 公斤。`,
      tip: '公噸換公斤，要乘以 1000。',
    });
  }

  if (typeIndex === 9) {
    const kg = pick([1250, 1800, 2400, 3200, 4500, 6800, 7500], rng);
    const answer = formatDecimal(kg / 1000);
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '公斤公噸換算',
      prompt: `${kg} 公斤 = 多少公噸？`,
      answer,
      choices: choicesFrom(answer, [
        formatDecimal(kg / 100),
        formatDecimal(kg / 10000),
        String(kg * 1000),
        String(Math.round(kg / 1000)),
      ], rng),
      explanation: `1 公噸 = 1000 公斤，所以 ${kg} 公斤 = ${answer} 公噸。`,
      tip: '公斤換公噸，要除以 1000。',
    });
  }

  if (typeIndex === 10) {
    const squareMeters = pick([500, 1200, 2500, 3600, 4800, 7500, 12500], rng);
    const answer = formatDecimal(squareMeters / 100);
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '平方公尺公畝換算',
      prompt: `${squareMeters} 平方公尺 = 多少公畝？`,
      answer,
      choices: choicesFrom(answer, [
        formatDecimal(squareMeters / 10),
        formatDecimal(squareMeters / 1000),
        String(squareMeters * 100),
        `${squareMeters}公畝`,
      ], rng),
      explanation: `1 公畝 = 100 平方公尺，所以 ${squareMeters} 平方公尺 = ${answer} 公畝。`,
      tip: '平方公尺換公畝，要除以 100。',
    });
  }

  const km = pick([1.2, 1.5, 2.4, 3.6, 4.8, 7.5, 12.5], rng);
  const answer = km * 1000;
  return makeQuestion({
    subject: 'math',
    grade,
    domain: '公里公尺換算',
    prompt: `${km} 公里 = 多少公尺？`,
    answer: String(answer),
    choices: buildNumberChoices(answer, rng, Math.max(200, answer / 5)),
    explanation: `1 公里 = 1000 公尺，所以 ${km} 公里 = ${answer} 公尺。`,
    tip: '公里換公尺，要乘以 1000。',
  });
}

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

function fraction(n, d) {
  const divisor = gcd(n, d);
  const nn = n / divisor;
  const dd = d / divisor;
  if (dd === 1) return String(nn);
  return `${nn}/${dd}`;
}

function makeQuestion({
  subject,
  grade,
  domain,
  prompt,
  choices,
  answer,
  explanation,
  tip,
  speechPrompt = null,
  practiceText = null,
}) {
  return {
    id: `${grade}-${subject}-${domain}-${Math.floor(Math.random() * 1000000)}`,
    subject,
    label: MODES[subject].label,
    grade,
    domain,
    prompt,
    choices,
    answer,
    explanation,
    tip,
    speechPrompt,
    practiceText,
  };
}

function generateMandarinQuestion({ grade = 'grade2', level = 1, wave = 1 } = {}, rng = Math.random) {
  const bank = MANDARIN_BANK[grade] || MANDARIN_BANK.grade2;
  const item = bank[(level + wave + Math.floor(rng() * bank.length)) % bank.length];
  return makeQuestion({
    subject: 'mandarin',
    grade,
    ...item,
    choices: shuffle(item.choices, rng),
  });
}

function generateEnglishQuestion({ grade = 'grade2', level = 1, wave = 1 } = {}, rng = Math.random) {
  const bank = ENGLISH_BANK[grade] || ENGLISH_BANK.grade2;
  const item = bank[(level + wave + Math.floor(rng() * bank.length)) % bank.length];
  const typeIndex = (level + wave + Math.floor(rng() * 3)) % 4;
  const otherWords = bank.filter((entry) => entry.word !== item.word).map((entry) => entry.word);
  const otherZh = bank.filter((entry) => entry.word !== item.word).map((entry) => entry.zh);

  if (typeIndex === 0) {
    const choices = choicesFrom(item.word, [...item.distractors, ...otherWords], rng);
    return makeQuestion({
      subject: 'english',
      grade,
      domain: grade === 'grade2' ? '生活單字' : '核心單字',
      prompt: `「${item.zh}」的英文是？`,
      answer: item.word,
      choices,
      explanation: `${item.word} 是「${item.zh}」。例句：${item.sentence}`,
      tip: '先想課本圖片或句子情境。',
      speechPrompt: `Listen to the choices. ${choices.join('. ')}.`,
      practiceText: item.word,
    });
  }

  if (typeIndex === 1) {
    const choices = choicesFrom(item.zh, otherZh, rng);
    return makeQuestion({
      subject: 'english',
      grade,
      domain: '中英對照',
      prompt: `${item.word} 的中文意思是？`,
      answer: item.zh,
      choices,
      explanation: `${item.word} 可以表示「${item.zh}」。`,
      tip: '把單字放回例句裡讀一次。',
      speechPrompt: item.word,
      practiceText: item.word,
    });
  }

  if (typeIndex === 2) {
    const choices = choicesFrom(item.word, [...item.distractors, ...otherWords], rng);
    return makeQuestion({
      subject: 'english',
      grade,
      domain: '句型填空',
      prompt: item.blank,
      answer: item.word,
      choices,
      explanation: `完整句子：${item.sentence}`,
      tip: '看空格前後的字，找最順的答案。',
      speechPrompt: item.blank.replace('___', 'blank'),
      practiceText: item.sentence,
    });
  }

  const first = item.word[0].toUpperCase();
  const choices = grade === 'grade2'
    ? choicesFrom(first, ['A', 'B', 'C', 'D', 'H', 'L', 'S', 'T'], rng)
    : choicesFrom(item.sentence, [`${item.word} is?`, `She ${item.word} yesterday?`, `Does ${item.word} she?`], rng);
  return makeQuestion({
    subject: 'english',
    grade,
    domain: grade === 'grade2' ? '字母大小寫' : '文法判讀',
    prompt: grade === 'grade2' ? `${item.word} 的第一個英文字母是？` : `哪一句英文正確？`,
    answer: grade === 'grade2' ? first : item.sentence,
    choices,
    explanation: grade === 'grade2' ? `${item.word} 開頭是 ${first}。` : `正確句子是：${item.sentence}`,
    tip: grade === 'grade2' ? '大聲念第一個音。' : '檢查主詞、動詞和問句順序。',
    speechPrompt: grade === 'grade2' ? item.word : `Which sentence is correct? ${choices.join('. ')}.`,
    practiceText: grade === 'grade2' ? item.word : item.sentence,
  });
}

function generateNaturalQuestion({ grade = 'grade5', level = 1, wave = 1, streak = 0 } = {}, rng = Math.random) {
  const bank = NATURAL_BANK[grade] || NATURAL_BANK.grade5;
  const item = bank[(level * 2 + wave + streak + Math.floor(rng() * bank.length)) % bank.length];
  return makeQuestion({
    subject: 'natural',
    grade,
    ...item,
    choices: shuffle(item.choices, rng),
  });
}

function generateGrade3MathQuestion({ grade = 'grade3', level = 1, wave = 1, streak = 0 } = {}, rng = Math.random) {
  const typeIndex = (level + wave + Math.floor(streak / 2) + Math.floor(rng() * 10)) % 12;
  if (typeIndex === 0) {
    const number = 1000 + Math.floor(rng() * 9000);
    const thousands = Math.floor(number / 1000);
    const hundreds = Math.floor((number % 1000) / 100);
    const tens = Math.floor((number % 100) / 10);
    return makeQuestion({
      subject: 'math', grade, domain: '一萬以內位值',
      prompt: `${number} 的百位數字是多少？`,
      answer: String(hundreds),
      choices: buildNumberChoices(hundreds, rng, 4),
      explanation: `${number} 中，千位是 ${thousands}，百位是 ${hundreds}，十位是 ${tens}。`,
      tip: '從右邊數：個位、十位、百位、千位。',
    });
  }
  if (typeIndex === 1) {
    const a = 1200 + Math.floor(rng() * 7600);
    const b = 240 + Math.floor(rng() * 1800);
    const answer = a + b;
    return makeQuestion({
      subject: 'math', grade, domain: '四位數加法',
      prompt: `${a} + ${b} = ?`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 120),
      explanation: `位值對齊相加，答案是 ${answer}。`,
      tip: '直式計算時，個位對個位、十位對十位。',
    });
  }
  if (typeIndex === 2) {
    const b = 300 + Math.floor(rng() * 2600);
    const a = b + 800 + Math.floor(rng() * 5200);
    const answer = a - b;
    return makeQuestion({
      subject: 'math', grade, domain: '四位數減法',
      prompt: `${a} - ${b} = ?`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 120),
      explanation: `位值對齊相減，需要時退位，答案是 ${answer}。`,
      tip: '遇到不夠減，要向前一位借。',
    });
  }
  if (typeIndex === 3) {
    const a = 24 + Math.floor(rng() * 180);
    const b = 2 + Math.floor(rng() * 8);
    const answer = a * b;
    return makeQuestion({
      subject: 'math', grade, domain: '乘以一位數',
      prompt: `${a} × ${b} = ?`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 36),
      explanation: `可以把 ${a} 分成十位和個位來乘，答案是 ${answer}。`,
      tip: '二、三位數乘一位數，先掌握每一位的乘法。',
    });
  }
  if (typeIndex === 4) {
    const divisor = 2 + Math.floor(rng() * 8);
    const quotient = 12 + Math.floor(rng() * 42);
    const dividend = divisor * quotient;
    return makeQuestion({
      subject: 'math', grade, domain: '除法',
      prompt: `${dividend} ÷ ${divisor} = ?`,
      answer: String(quotient),
      choices: buildNumberChoices(quotient, rng, 10),
      explanation: `因為 ${divisor} × ${quotient} = ${dividend}，所以 ${dividend} ÷ ${divisor} = ${quotient}。`,
      tip: '除法可以用乘法來驗算。',
    });
  }
  if (typeIndex === 5) {
    const denominator = pick([3, 4, 5, 6, 8], rng);
    const a = 1 + Math.floor(rng() * (denominator - 1));
    const b = 1 + Math.floor(rng() * (denominator - a));
    const answer = fraction(a + b, denominator);
    return makeQuestion({
      subject: 'math', grade, domain: '同分母分數加法',
      prompt: `${a}/${denominator} + ${b}/${denominator} = ?`,
      answer,
      choices: choicesFrom(answer, [`${a + b}/${denominator + denominator}`, `${a}/${denominator}`, `${b}/${denominator}`], rng),
      explanation: `分母相同，分子相加：${a}+${b}=${a + b}，答案是 ${answer}。`,
      tip: '同分母分數相加，分母不變。',
    });
  }
  if (typeIndex === 6) {
    const a = (10 + Math.floor(rng() * 70)) / 10;
    const b = pick([0.1, 0.2, 0.3, 0.5, 0.7], rng);
    const answer = formatDecimal(a + b);
    return makeQuestion({
      subject: 'math', grade, domain: '一位小數加法',
      prompt: `${formatDecimal(a)} + ${formatDecimal(b)} = ?`,
      answer,
      choices: choicesFrom(answer, [formatDecimal(a + b + 1), formatDecimal(a + b - 0.1), String(Math.round(a + b))], rng),
      explanation: `十分位對齊相加，答案是 ${answer}。`,
      tip: '小數點要對齊。',
    });
  }
  if (typeIndex === 7) {
    const cm = 5 + Math.floor(rng() * 80);
    const mm = pick([2, 4, 5, 6, 8], rng);
    const answer = cm * 10 + mm;
    return makeQuestion({
      subject: 'math', grade, domain: '毫米換算',
      prompt: `${cm} 公分 ${mm} 毫米 = 多少毫米？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 24),
      explanation: `1 公分 = 10 毫米，所以 ${cm} 公分 ${mm} 毫米 = ${answer} 毫米。`,
      tip: '公分換毫米要乘以 10。',
    });
  }
  if (typeIndex === 8) {
    const liters = 1 + Math.floor(rng() * 5);
    const ml = pick([100, 200, 250, 500, 750], rng);
    const answer = liters * 1000 + ml;
    return makeQuestion({
      subject: 'math', grade, domain: '容量換算',
      prompt: `${liters} 公升 ${ml} 毫升 = 多少毫升？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 240),
      explanation: `1 公升 = 1000 毫升，所以共 ${answer} 毫升。`,
      tip: '公升先換成毫升，再相加。',
    });
  }
  if (typeIndex === 9) {
    const kg = 1 + Math.floor(rng() * 6);
    const g = pick([100, 250, 500, 750], rng);
    const answer = kg * 1000 + g;
    return makeQuestion({
      subject: 'math', grade, domain: '重量換算',
      prompt: `${kg} 公斤 ${g} 公克 = 多少公克？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 250),
      explanation: `1 公斤 = 1000 公克，所以共 ${answer} 公克。`,
      tip: '公斤換公克要乘以 1000。',
    });
  }
  if (typeIndex === 10) {
    const hour = 1 + Math.floor(rng() * 3);
    const min = pick([10, 15, 20, 30, 40], rng);
    const add = pick([10, 15, 20, 30], rng);
    const total = hour * 60 + min + add;
    const answer = `${Math.floor(total / 60)}小時${total % 60}分`;
    return makeQuestion({
      subject: 'math', grade, domain: '時間加法',
      prompt: `${hour}小時${min}分 再加 ${add}分 = ?`,
      answer,
      choices: choicesFrom(answer, [`${hour}小時${min + add}分`, `${total}分`, `${hour + 1}小時${min}分`], rng),
      explanation: `先換成分鐘或直接加分鐘，答案是 ${answer}。`,
      tip: '分鐘滿 60 要換成 1 小時。',
    });
  }
  const width = 2 + Math.floor(rng() * 8);
  const height = 2 + Math.floor(rng() * 7);
  const answer = width * height;
  return makeQuestion({
    subject: 'math', grade, domain: '平方公分面積',
    prompt: `一個長方形可以排 ${width} 格 × ${height} 格，每格 1 平方公分，面積是多少平方公分？`,
    answer: String(answer),
    choices: buildNumberChoices(answer, rng, 8),
    explanation: `數格子可用 ${width} × ${height} = ${answer}，所以面積是 ${answer} 平方公分。`,
    tip: '三年級先用格子理解面積。',
  });
}

function generateGrade4MathQuestion({ grade = 'grade4', level = 1, wave = 1, streak = 0 } = {}, rng = Math.random) {
  const typeIndex = (level + wave + Math.floor(streak / 2) + Math.floor(rng() * 13)) % 14;

  if (typeIndex === 0) {
    const tenThousands = 2 + Math.floor(rng() * 8);
    const thousands = Math.floor(rng() * 10);
    const hundreds = Math.floor(rng() * 10);
    const tens = Math.floor(rng() * 10);
    const ones = Math.floor(rng() * 10);
    const number = tenThousands * 10000 + thousands * 1000 + hundreds * 100 + tens * 10 + ones;
    return makeQuestion({
      subject: 'math', grade, domain: '大數位值',
      prompt: `${number} 的千位數字是多少？`,
      answer: String(thousands),
      choices: buildNumberChoices(thousands, rng, 4),
      explanation: `${number} 中，萬位是 ${tenThousands}，千位是 ${thousands}，百位是 ${hundreds}。`,
      tip: '從右邊數：個位、十位、百位、千位、萬位。',
    });
  }

  if (typeIndex === 1) {
    const number = 1200 + Math.floor(rng() * 7800);
    const answer = Math.round(number / 100) * 100;
    return makeQuestion({
      subject: 'math', grade, domain: '概數',
      prompt: `${number} 四捨五入到百位，約是多少？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 200),
      explanation: `看十位數字決定百位要不要進位，${number} 約是 ${answer}。`,
      tip: '四捨五入到百位時，看十位。',
    });
  }

  if (typeIndex === 2) {
    const a = 120 + Math.floor(rng() * 380);
    const b = 12 + Math.floor(rng() * 28);
    const answer = a * b;
    return makeQuestion({
      subject: 'math', grade, domain: '三位數乘兩位數',
      prompt: `${a} × ${b} = ?`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(120, Math.round(answer / 8))),
      explanation: `可把 ${b} 分成十位和個位分別相乘，再相加，答案是 ${answer}。`,
      tip: '乘兩位數時，先乘個位，再乘十位。',
    });
  }

  if (typeIndex === 3) {
    const divisor = 12 + Math.floor(rng() * 18);
    const quotient = 8 + Math.floor(rng() * 42);
    const dividend = divisor * quotient;
    return makeQuestion({
      subject: 'math', grade, domain: '除以兩位數',
      prompt: `${dividend} ÷ ${divisor} = ?`,
      answer: String(quotient),
      choices: buildNumberChoices(quotient, rng, 10),
      explanation: `因為 ${divisor} × ${quotient} = ${dividend}，所以商是 ${quotient}。`,
      tip: '除法可用乘法回推檢查。',
    });
  }

  if (typeIndex === 4) {
    const a = 20 + Math.floor(rng() * 50);
    const b = 2 + Math.floor(rng() * 8);
    const c = 4 + Math.floor(rng() * 12);
    const answer = a + b * c;
    return makeQuestion({
      subject: 'math', grade, domain: '四則混合',
      prompt: `${a} + ${b} × ${c} = ?`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 20),
      explanation: `先算乘法 ${b} × ${c} = ${b * c}，再加 ${a}，答案是 ${answer}。`,
      tip: '沒有括號時，先乘除、後加減。',
    });
  }

  if (typeIndex === 5) {
    const denominator = pick([5, 6, 8, 10, 12], rng);
    const a = 1 + Math.floor(rng() * (denominator - 2));
    const b = 1 + Math.floor(rng() * (denominator - a - 1));
    const answer = fraction(a + b, denominator);
    return makeQuestion({
      subject: 'math', grade, domain: '同分母分數加法',
      prompt: `${a}/${denominator} + ${b}/${denominator} = ?`,
      answer,
      choices: choicesFrom(answer, [`${a + b}/${denominator + denominator}`, `${a}/${denominator}`, `${b}/${denominator}`], rng),
      explanation: `分母相同，分母不變，分子相加：${a}+${b}=${a + b}，答案是 ${answer}。`,
      tip: '同分母分數加法只加分子。',
    });
  }

  if (typeIndex === 6) {
    const denominator = pick([6, 8, 10, 12], rng);
    const b = 1 + Math.floor(rng() * (denominator - 2));
    const a = b + 1 + Math.floor(rng() * (denominator - b - 1));
    const answer = fraction(a - b, denominator);
    return makeQuestion({
      subject: 'math', grade, domain: '同分母分數減法',
      prompt: `${a}/${denominator} - ${b}/${denominator} = ?`,
      answer,
      choices: choicesFrom(answer, [`${a - b}/${denominator + denominator}`, `${a}/${denominator}`, `${b}/${denominator}`], rng),
      explanation: `分母相同，分母不變，分子相減：${a}-${b}=${a - b}，答案是 ${answer}。`,
      tip: '同分母分數減法只減分子。',
    });
  }

  if (typeIndex === 7) {
    const a = (120 + Math.floor(rng() * 780)) / 10;
    const b = pick([1.2, 2.5, 3.4, 4.8, 5.6, 7.5], rng);
    const answer = formatDecimal(a + b);
    return makeQuestion({
      subject: 'math', grade, domain: '小數加法',
      prompt: `${formatDecimal(a)} + ${formatDecimal(b)} = ?`,
      answer,
      choices: choicesFrom(answer, [formatDecimal(a + b + 1), formatDecimal(a + b - 0.1), String(Math.round(a + b))], rng),
      explanation: `小數點對齊相加，答案是 ${answer}。`,
      tip: '小數直式要把小數點對齊。',
    });
  }

  if (typeIndex === 8) {
    const b = pick([1.3, 2.4, 3.5, 4.6, 5.8], rng);
    const a = b + (30 + Math.floor(rng() * 90)) / 10;
    const answer = formatDecimal(a - b);
    return makeQuestion({
      subject: 'math', grade, domain: '小數減法',
      prompt: `${formatDecimal(a)} - ${formatDecimal(b)} = ?`,
      answer,
      choices: choicesFrom(answer, [formatDecimal(a - b + 1), formatDecimal(a - b - 0.1), String(Math.round(a - b))], rng),
      explanation: `小數點對齊相減，答案是 ${answer}。`,
      tip: '位數不夠時，可以補 0 再減。',
    });
  }

  if (typeIndex === 9) {
    const a = pick([35, 40, 45, 55, 60, 75], rng);
    const b = pick([25, 30, 35, 40, 45], rng);
    const answer = a + b;
    return makeQuestion({
      subject: 'math', grade, domain: '角度計算',
      prompt: `一個角由 ${a} 度和 ${b} 度合成，這個角共幾度？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 12),
      explanation: `${a} 度 + ${b} 度 = ${answer} 度。`,
      tip: '合成角度用加法。',
    });
  }

  if (typeIndex === 10) {
    const length = 8 + Math.floor(rng() * 15);
    const width = 3 + Math.floor(rng() * 10);
    const answer = 2 * (length + width);
    return makeQuestion({
      subject: 'math', grade, domain: '長方形周長',
      prompt: `長 ${length} 公分、寬 ${width} 公分的長方形，周長是多少公分？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 16),
      explanation: `長方形周長 = (${length}+${width}) × 2 = ${answer} 公分。`,
      tip: '周長是繞外圍一圈的長度。',
    });
  }

  if (typeIndex === 11) {
    const length = 7 + Math.floor(rng() * 13);
    const width = 4 + Math.floor(rng() * 9);
    const answer = length * width;
    return makeQuestion({
      subject: 'math', grade, domain: '長方形面積',
      prompt: `長 ${length} 公分、寬 ${width} 公分的長方形，面積是多少平方公分？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 24),
      explanation: `長方形面積 = 長 × 寬 = ${length} × ${width} = ${answer} 平方公分。`,
      tip: '面積看裡面鋪滿幾個平方單位。',
    });
  }

  if (typeIndex === 12) {
    const length = 3 + Math.floor(rng() * 6);
    const width = 2 + Math.floor(rng() * 5);
    const height = 2 + Math.floor(rng() * 5);
    const answer = length * width * height;
    return makeQuestion({
      subject: 'math', grade, domain: '體積初步',
      prompt: `一個長方體長 ${length}、寬 ${width}、高 ${height}，可排幾個 1 立方公分小方塊？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 18),
      explanation: `${length} × ${width} × ${height} = ${answer}，所以能排 ${answer} 個小方塊。`,
      tip: '一層的數量再乘上高度。',
    });
  }

  const bread = 18 + Math.floor(rng() * 18);
  const cake = bread + pick([4, 6, 8, 10, 12], rng);
  const cookie = 12 + Math.floor(rng() * 12);
  return makeQuestion({
    subject: 'math', grade, domain: '統計圖讀值',
    prompt: `麵包店今天賣出麵包 ${bread} 個、蛋糕 ${cake} 個、餅乾 ${cookie} 包，哪一項賣得最多？`,
    answer: '蛋糕',
    choices: ['蛋糕', '麵包', '餅乾', '三項一樣多'],
    explanation: `蛋糕 ${cake} 個比麵包 ${bread} 個、餅乾 ${cookie} 包都多。`,
    tip: '讀統計資料時，先比較數字大小。',
  });
}

function generateGrade6MathQuestion({ grade = 'grade6', level = 1, wave = 1, streak = 0 } = {}, rng = Math.random) {
  const typeIndex = (level + wave + Math.floor(streak / 2) + Math.floor(rng() * 12)) % 14;
  if (typeIndex === 0) {
    const base = pick([18, 24, 30, 36, 42, 48, 54, 60, 72], rng);
    const answer = gcd(base, pick([12, 18, 24, 30, 36, 48], rng));
    const other = pick([12, 18, 24, 30, 36, 48], rng);
    const fixedAnswer = gcd(base, other);
    return makeQuestion({
      subject: 'math', grade, domain: '最大公因數',
      prompt: `${base} 和 ${other} 的最大公因數是多少？`,
      answer: String(fixedAnswer),
      choices: buildNumberChoices(fixedAnswer, rng, 8),
      explanation: `${base} 和 ${other} 共同的因數中，最大的是 ${fixedAnswer}。`,
      tip: '列出共同因數，再找最大的。',
    });
  }
  if (typeIndex === 1) {
    const a = pick([4, 6, 8, 9, 10, 12], rng);
    const b = pick([6, 8, 10, 12, 15, 18], rng);
    const answer = (a * b) / gcd(a, b);
    return makeQuestion({
      subject: 'math', grade, domain: '最小公倍數',
      prompt: `${a} 和 ${b} 的最小公倍數是多少？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 12),
      explanation: `${a} 和 ${b} 共同的倍數中，最小的是 ${answer}。`,
      tip: '找共同倍數，第一個共同出現的就是最小公倍數。',
    });
  }
  if (typeIndex === 2) {
    const a = pick([1, 2, 3, 4, 5], rng);
    const b = pick([2, 3, 4, 5, 6], rng);
    const c = pick([1, 2, 3, 4], rng);
    const d = pick([2, 3, 4, 5], rng);
    const answer = fraction(a * d, b * c);
    return makeQuestion({
      subject: 'math', grade, domain: '分數除法',
      prompt: `${a}/${b} ÷ ${c}/${d} = ?`,
      answer,
      choices: choicesFrom(answer, [fraction(a * c, b * d), fraction(a + c, b + d), fraction(a * d + 1, b * c)], rng),
      explanation: `除以分數等於乘以倒數：${a}/${b} × ${d}/${c} = ${answer}。`,
      tip: '分數除法先把第二個分數倒過來再乘。',
    });
  }
  if (typeIndex === 3) {
    const dividend = pick([4.8, 6.4, 7.2, 8.4, 9.6, 12.5, 15.6], rng);
    const divisor = pick([0.2, 0.4, 0.5, 0.8], rng);
    const answer = formatDecimal(dividend / divisor);
    return makeQuestion({
      subject: 'math', grade, domain: '小數除法',
      prompt: `${dividend} ÷ ${divisor} = ?`,
      answer,
      choices: choicesFrom(answer, [formatDecimal(dividend * divisor), formatDecimal(dividend / (divisor * 10)), formatDecimal(dividend / divisor + 1)], rng),
      explanation: `除數是小數時，可把除數和被除數同乘 10，答案是 ${answer}。`,
      tip: '先把除數變成整數會比較好算。',
    });
  }
  if (typeIndex === 4) {
    const a = pick([2, 3, 4, 5], rng);
    const b = pick([3, 4, 5, 6, 8], rng);
    const k = 2 + Math.floor(rng() * 7);
    const answer = `${a * k}:${b * k}`;
    return makeQuestion({
      subject: 'math', grade, domain: '比的等值',
      prompt: `把 ${a}:${b} 的前項和後項都乘以 ${k}，得到哪一個比？`,
      answer,
      choices: choicesFrom(answer, [`${a + k}:${b + k}`, `${a * k}:${b}`, `${a}:${b * k}`], rng),
      explanation: `比的前項和後項同乘 ${k}，${a}:${b} = ${answer}。`,
      tip: '等值比可以同乘或同除一個相同的數。',
    });
  }
  if (typeIndex === 5) {
    const km = pick([60, 72, 90, 120, 150], rng);
    const hr = pick([2, 3, 4, 5], rng);
    const answer = km / hr;
    return makeQuestion({
      subject: 'math', grade, domain: '速率',
      prompt: `${hr} 小時走 ${km} 公里，平均每小時走多少公里？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 12),
      explanation: `速率 = 距離 ÷ 時間 = ${km} ÷ ${hr} = ${answer} 公里/時。`,
      tip: '每小時多少，就是距離除以小時。',
    });
  }
  if (typeIndex === 6) {
    const mapCm = pick([2, 3, 4, 5, 6], rng);
    const scale = pick([500, 1000, 2000, 5000], rng);
    const answer = mapCm * scale;
    return makeQuestion({
      subject: 'math', grade, domain: '比例尺',
      prompt: `地圖比例尺 1:${scale}，地圖上 ${mapCm} 公分代表實際多少公分？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(200, answer / 4)),
      explanation: `實際長度 = 地圖長度 × 比例尺分母 = ${mapCm} × ${scale} = ${answer} 公分。`,
      tip: '比例尺 1:n 表示圖上 1 公分代表實際 n 公分。',
    });
  }
  if (typeIndex === 7) {
    const r = pick([3, 4, 5, 6, 8, 10], rng);
    const answer = formatDecimal(2 * 3.14 * r);
    return makeQuestion({
      subject: 'math', grade, domain: '圓周長',
      prompt: `半徑 ${r} 公分的圓，圓周長是多少公分？（π 用 3.14）`,
      answer,
      choices: choicesFrom(answer, [formatDecimal(3.14 * r), formatDecimal(3.14 * r * r), formatDecimal(2 * r)], rng),
      explanation: `圓周長 = 2 × π × 半徑 = 2 × 3.14 × ${r} = ${answer}。`,
      tip: '半徑求圓周長，要乘 2π。',
    });
  }
  if (typeIndex === 8) {
    const r = pick([3, 4, 5, 6, 8], rng);
    const answer = formatDecimal(3.14 * r * r);
    return makeQuestion({
      subject: 'math', grade, domain: '圓面積',
      prompt: `半徑 ${r} 公分的圓，面積是多少平方公分？（π 用 3.14）`,
      answer,
      choices: choicesFrom(answer, [formatDecimal(2 * 3.14 * r), formatDecimal(3.14 * r), formatDecimal(r * r)], rng),
      explanation: `圓面積 = π × 半徑 × 半徑 = 3.14 × ${r} × ${r} = ${answer}。`,
      tip: '圓面積是 πr²。',
    });
  }
  if (typeIndex === 9) {
    const radius = pick([2, 3, 4, 5], rng);
    const height = pick([4, 5, 6, 8, 10], rng);
    const answer = formatDecimal(3.14 * radius * radius * height);
    return makeQuestion({
      subject: 'math', grade, domain: '圓柱體積',
      prompt: `圓柱底面半徑 ${radius} 公分、高 ${height} 公分，體積是多少？（π 用 3.14）`,
      answer,
      choices: choicesFrom(answer, [formatDecimal(2 * 3.14 * radius * height), formatDecimal(3.14 * radius * radius), formatDecimal(radius * height)], rng),
      explanation: `柱體體積 = 底面積 × 高 = 3.14 × ${radius} × ${radius} × ${height} = ${answer}。`,
      tip: '先算圓形底面積，再乘高。',
    });
  }
  if (typeIndex === 10) {
    const total = pick([100, 200, 300, 400, 500], rng);
    const pct = pick([20, 25, 30, 40, 50], rng);
    const answer = (total * pct) / 100;
    return makeQuestion({
      subject: 'math', grade, domain: '圓形圖百分率',
      prompt: `圓形圖中「遊戲時間」占 ${pct}%，全部 ${total} 分鐘，遊戲時間是多少分鐘？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, Math.max(12, answer / 2)),
      explanation: `${pct}% = ${pct}/100，所以 ${total} × ${pct}/100 = ${answer}。`,
      tip: '圓形圖的百分率表示部分占全部的比例。',
    });
  }
  if (typeIndex === 11) {
    const red = pick([12, 15, 18, 20], rng);
    const blue = red + pick([8, 10, 12, 15], rng);
    return makeQuestion({
      subject: 'math', grade, domain: '可能性',
      prompt: `袋中有紅球 ${red} 顆、藍球 ${blue} 顆，抽到哪一種球比較可能？`,
      answer: '藍球',
      choices: ['藍球', '紅球', '一樣可能', '無法從數量判斷'],
      explanation: `藍球 ${blue} 顆比紅球 ${red} 顆多，所以抽到藍球比較可能。`,
      tip: '只比較數量多寡，不需要算複雜機率。',
    });
  }
  if (typeIndex === 12) {
    const w = pick([4, 5, 6, 8], rng);
    const h = pick([3, 4, 5, 6], rng);
    const len = pick([7, 8, 10, 12], rng);
    const answer = w * h * len;
    return makeQuestion({
      subject: 'math', grade, domain: '角柱體積',
      prompt: `一個柱體底面積 ${w * h} 平方公分、高 ${len} 公分，體積是多少立方公分？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 36),
      explanation: `柱體體積 = 底面積 × 高 = ${w * h} × ${len} = ${answer}。`,
      tip: '柱體體積都可以用底面積乘高。',
    });
  }
  const a = pick([3, 4, 5, 6], rng);
  const b = pick([2, 3, 4, 5], rng);
  const c = pick([10, 12, 15, 18], rng);
  const answer = a * c + b * c;
  return makeQuestion({
    subject: 'math', grade, domain: '分配律',
    prompt: `${a} × ${c} + ${b} × ${c} = ?`,
    answer: String(answer),
    choices: buildNumberChoices(answer, rng, 20),
    explanation: `可以合併成 (${a}+${b}) × ${c} = ${a + b} × ${c} = ${answer}。`,
    tip: '相同的乘數可以先合併。',
  });
}

function generateMathQuestion({ grade = 'grade2', level = 1, wave = 1, streak = 0, difficulty = 'sprout' } = {}, rng = Math.random) {
  const diff = DIFFICULTIES[difficulty] || DIFFICULTIES.sprout;
  const typeIndex = (level + wave + Math.floor(streak / 2) + Math.floor(rng() * 5)) % 8;

  if (grade === 'grade3') return generateGrade3MathQuestion({ grade, level, wave, streak }, rng);
  if (grade === 'grade4') return generateGrade4MathQuestion({ grade, level, wave, streak }, rng);
  if (grade === 'grade6') return generateGrade6MathQuestion({ grade, level, wave, streak }, rng);

  if (grade === 'grade5') {
    const grade5TypeIndex = (level + wave + Math.floor(streak / 2) + Math.floor(rng() * 9)) % 16;
    if (grade5TypeIndex === 12 || grade5TypeIndex === 13) {
      const [b, d] = pick([[2, 3], [3, 4], [2, 5], [3, 5], [4, 5], [4, 6], [6, 8], [2, 7], [3, 8]], rng);
      const isAdd = grade5TypeIndex === 12;
      let a = 1 + Math.floor(rng() * (b - 1));
      let c = 1 + Math.floor(rng() * (d - 1));
      if (isAdd && a * d + c * b > b * d) {
        a = 1;
        c = 1;
      }
      if (!isAdd && a * d - c * b <= 0) {
        [a, c] = [Math.max(a, Math.ceil((c * b + 1) / d)), c];
        if (a >= b) {
          a = b - 1;
          c = 1;
        }
      }
      const numerator = isAdd ? a * d + c * b : a * d - c * b;
      if (numerator <= 0) {
        return generateGrade5PercentQuestion({ grade }, rng);
      }
      const answer = fraction(numerator, b * d);
      const wrongNoCommon = `${isAdd ? a + c : Math.abs(a - c)}/${Math.max(b, d)}`;
      const wrongBothAdd = `${isAdd ? a + c : Math.abs(a - c)}/${b + d}`;
      const wrongNumerator = fraction(numerator + 1, b * d);
      return makeQuestion({
        subject: 'math',
        grade,
        domain: isAdd ? '異分母分數加法' : '異分母分數減法',
        prompt: `${a}/${b} ${isAdd ? '+' : '−'} ${c}/${d} = ?`,
        answer,
        choices: choicesFrom(answer, [wrongNoCommon, wrongBothAdd, wrongNumerator], rng),
        explanation: `先通分成分母 ${b * d}：${a}/${b} = ${a * d}/${b * d}，${c}/${d} = ${c * b}/${b * d}，${isAdd ? '相加' : '相減'}得 ${numerator}/${b * d}，約分後是 ${answer}。`,
        tip: '分母不同要先通分，再把分子相' + (isAdd ? '加' : '減') + '。',
      });
    }
    if (grade5TypeIndex === 14) {
      const [n, d] = pick([[1, 2], [2, 3], [3, 4], [2, 5], [3, 5], [5, 6], [1, 4], [4, 7]], rng);
      const k = 2 + Math.floor(rng() * 5);
      const answer = `${n}/${d}`;
      return makeQuestion({
        subject: 'math',
        grade,
        domain: '約分',
        prompt: `${n * k}/${d * k} 約分成最簡分數是多少？`,
        answer,
        choices: choicesFrom(answer, [`${n * k}/${d}`, `${n}/${d * k}`, `${n + 1}/${d}`], rng),
        explanation: `分子和分母同時除以 ${k}：${n * k} ÷ ${k} = ${n}，${d * k} ÷ ${k} = ${d}，所以是 ${answer}。`,
        tip: '找出分子和分母的公因數，一起除掉。',
      });
    }
    if (grade5TypeIndex === 15) {
      const [a, b, c, d] = pick([
        [2, 3, 3, 5],
        [3, 4, 5, 8],
        [1, 2, 3, 8],
        [5, 6, 7, 9],
        [2, 5, 1, 3],
        [1, 2, 3, 7],
        [3, 5, 1, 2],
      ], rng);
      const firstBigger = a * d > c * b;
      const answer = firstBigger ? `${a}/${b}` : `${c}/${d}`;
      const loser = firstBigger ? `${c}/${d}` : `${a}/${b}`;
      return makeQuestion({
        subject: 'math',
        grade,
        domain: '通分比大小',
        prompt: `${a}/${b} 和 ${c}/${d}，哪一個比較大？`,
        answer,
        choices: choicesFrom(answer, [loser, '一樣大', '無法比較'], rng),
        explanation: `通分成分母 ${b * d}：${a}/${b} = ${a * d}/${b * d}，${c}/${d} = ${c * b}/${b * d}，因為 ${Math.max(a * d, c * b)} > ${Math.min(a * d, c * b)}，所以 ${answer} 比較大。`,
        tip: '分母不同時，先通分再比分子。',
      });
    }
    if (grade5TypeIndex === 0) {
      const d = pick([6, 8, 10, 12], rng);
      const a = 1 + Math.floor(rng() * (d - 2));
      const b = 1 + Math.floor(rng() * 5);
      const answer = fraction(a * b, d);
      return makeQuestion({
        subject: 'math',
        grade,
        domain: '分數計算',
        prompt: `${fraction(a, d)} × ${b} = ?`,
        answer,
        choices: choicesFrom(answer, [fraction(a + b, d), fraction(a * b + 1, d), fraction(a, d * b), String(a * b)], rng),
        explanation: `分子 ${a} 乘以 ${b}，再約分成 ${answer}。`,
        tip: '整數乘分數時，先乘分子。',
      });
    }
    if (grade5TypeIndex === 1) {
      const l = 4 + Math.floor(rng() * 8);
      const w = 3 + Math.floor(rng() * 6);
      const h = 2 + Math.floor(rng() * 5);
      const answer = l * w * h;
      return makeQuestion({
        subject: 'math',
        grade,
        domain: '體積',
        prompt: `長方體長 ${l} cm、寬 ${w} cm、高 ${h} cm，體積是多少 cm³？`,
        answer: String(answer),
        choices: buildNumberChoices(answer, rng, 20),
        explanation: `長方體體積 = 長 × 寬 × 高 = ${l} × ${w} × ${h} = ${answer}。`,
        tip: '看到長、寬、高，就想到三個數相乘。',
      });
    }
    if (grade5TypeIndex === 2) {
      const liters = 1 + Math.floor(rng() * 5);
      const ml = pick([125, 250, 500, 750], rng);
      const answer = liters * 1000 + ml;
      return makeQuestion({
        subject: 'math',
        grade,
        domain: '容積容量',
        prompt: `${liters} 公升 ${ml} 毫升 = 多少毫升？`,
        answer: String(answer),
        choices: buildNumberChoices(answer, rng, 250),
        explanation: `1 公升 = 1000 毫升，所以是 ${liters * 1000} + ${ml} = ${answer} 毫升。`,
        tip: '先把公升換成毫升。',
      });
    }
    if (grade5TypeIndex === 3) {
      const a = (12 + Math.floor(rng() * 78)) / 10;
      const b = 2 + Math.floor(rng() * 8);
      const answer = Number((a * b).toFixed(1));
      return makeQuestion({
        subject: 'math',
        grade,
        domain: '小數乘法',
        prompt: `${a.toFixed(1)} × ${b} = ?`,
        answer: answer.toFixed(1),
        choices: choicesFrom(answer.toFixed(1), [String(answer + 1), (answer / 10).toFixed(2), String(Math.round(answer)), (answer + 0.5).toFixed(1)], rng),
        explanation: `先當整數乘，再放回小數點，答案是 ${answer.toFixed(1)}。`,
        tip: '小數位數不要忘記。',
      });
    }
    if (grade5TypeIndex === 4 || grade5TypeIndex === 9) {
      return generateGrade5PercentQuestion({ grade }, rng);
    }
    if (grade5TypeIndex === 5 || grade5TypeIndex === 10 || grade5TypeIndex === 11) {
      return generateGrade5UnitConversionQuestion({ grade }, rng);
    }
    if (grade5TypeIndex === 6) {
      const l = 3 + Math.floor(rng() * 7);
      const w = 2 + Math.floor(rng() * 5);
      const h = 2 + Math.floor(rng() * 4);
      const answer = 2 * (l * w + l * h + w * h);
      return makeQuestion({
        subject: 'math',
        grade,
        domain: '表面積',
        prompt: `長方體 ${l}×${w}×${h} cm，表面積是多少 cm²？`,
        answer: String(answer),
        choices: buildNumberChoices(answer, rng, 18),
        explanation: `表面積 = 2 × (長寬 + 長高 + 寬高) = ${answer}。`,
        tip: '長方體有三組相同的面，每組兩個。',
      });
    }
    if (grade5TypeIndex === 7) {
      const h = 1 + Math.floor(rng() * 3);
      const m = pick([10, 15, 20, 30, 45], rng);
      const times = 2 + Math.floor(rng() * 4);
      const total = (h * 60 + m) * times;
      const answer = `${Math.floor(total / 60)}小時${total % 60}分`;
      return makeQuestion({
        subject: 'math',
        grade,
        domain: '時間乘除',
        prompt: `${h}小時${m}分 × ${times} = ?`,
        answer,
        choices: choicesFrom(answer, [`${h * times}小時${m}分`, `${Math.floor(total / 60)}小時${(total % 60) + 10}分`, `${total}分`, `${times}小時${m}分`], rng),
        explanation: `先換成分鐘：${h * 60 + m} 分 × ${times} = ${total} 分，再換回 ${answer}。`,
        tip: '時間計算先換成分鐘會更穩。',
      });
    }
    const dividend = (120 + Math.floor(rng() * 380)) / 10;
    const divisor = pick([2, 4, 5], rng);
    const answer = Number((dividend / divisor).toFixed(2));
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '小數除法',
      prompt: `${dividend.toFixed(1)} ÷ ${divisor} = ?`,
      answer: String(answer).replace(/\.0$/, ''),
      choices: choicesFrom(String(answer).replace(/\.0$/, ''), [String(answer + 1), String(answer * 10), String(Math.round(answer)), (answer + 0.25).toFixed(2)], rng),
      explanation: `小數除以整數，商的小數點要對齊，答案是 ${answer}。`,
      tip: '把直式的小數點對齊。',
    });
  }

  const grade2TypeIndex = (level + wave + Math.floor(streak / 2) + Math.floor(rng() * 7)) % 11;
  if (grade2TypeIndex === 8) {
    const fifties = 1 + Math.floor(rng() * 2);
    const tens = 1 + Math.floor(rng() * 4);
    const ones = Math.floor(rng() * 5);
    const total = fifties * 50 + tens * 10 + ones;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '錢幣計算',
      prompt: `小美有 ${fifties} 個 50 元、${tens} 個 10 元和 ${ones} 個 1 元硬幣，一共有多少元？`,
      answer: String(total),
      choices: buildNumberChoices(total, rng, 12),
      explanation: `${fifties} × 50 = ${fifties * 50}，${tens} × 10 = ${tens * 10}，再加 ${ones} 元，共 ${total} 元。`,
      tip: '先算 50 元的，再算 10 元的，最後加 1 元的。',
    });
  }
  if (grade2TypeIndex === 9) {
    const per = 3 + Math.floor(rng() * 6);
    const bags = 2 + Math.floor(rng() * 7);
    const total = per * bags;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '分裝',
      prompt: `${total} 顆糖果，每袋裝 ${per} 顆，可以裝成幾袋？`,
      answer: String(bags),
      choices: buildNumberChoices(bags, rng, 4),
      explanation: `${total} ÷ ${per} = ${bags}，可以裝成 ${bags} 袋。`,
      tip: '分裝就是算「總數裡有幾個一份」。',
    });
  }
  if (grade2TypeIndex === 10) {
    const biggest = 300 + Math.floor(rng() * 650);
    const candidates = uniqueNumbers([
      biggest,
      biggest - 10 - Math.floor(rng() * 80),
      biggest - 100 - Math.floor(rng() * 150),
      biggest - 1 - Math.floor(rng() * 9),
    ]).filter((value) => value >= 100);
    while (candidates.length < 4) {
      const filler = biggest - 20 - Math.floor(rng() * 250);
      if (filler >= 100 && !candidates.includes(filler)) candidates.push(filler);
    }
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '數的大小比較',
      prompt: '下面哪一個數最大？',
      answer: String(biggest),
      choices: shuffle(candidates.map(String), rng),
      explanation: `先比百位，再比十位、個位，最大的是 ${biggest}。`,
      tip: '比大小先從最高位（百位）比起。',
    });
  }

  const range = diff.range + Math.floor(level * 12);
  if (typeIndex === 0) {
    const a = 100 + Math.floor(rng() * Math.min(700, range * 30));
    const b = 80 + Math.floor(rng() * 220);
    const answer = a + b;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '三位數加法',
      prompt: `${a} + ${b} = ?`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 40),
      explanation: `個位、十位、百位對齊相加，答案是 ${answer}。`,
      tip: '直式計算時位值要排整齊。',
    });
  }
  if (typeIndex === 1) {
    const b = 60 + Math.floor(rng() * 260);
    const a = b + 120 + Math.floor(rng() * 360);
    const answer = a - b;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '三位數減法',
      prompt: `${a} - ${b} = ?`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 35),
      explanation: `位值對齊相減，需要時向前一位借位，答案是 ${answer}。`,
      tip: '先看個位能不能減。',
    });
  }
  if (typeIndex === 2) {
    const a = 2 + Math.floor(rng() * 8);
    const b = 2 + Math.floor(rng() * 8);
    const answer = a * b;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '九九乘法',
      prompt: `${a} × ${b} = ?`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 8),
      explanation: `${a} 組，每組 ${b}，一共 ${answer}。`,
      tip: '可以用跳數或九九乘法表。',
    });
  }
  if (typeIndex === 3) {
    const people = 2 + Math.floor(rng() * 7);
    const each = 2 + Math.floor(rng() * 8);
    const total = people * each;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '平分',
      prompt: `${total} 顆星星平均分給 ${people} 人，每人幾顆？`,
      answer: String(each),
      choices: buildNumberChoices(each, rng, 5),
      explanation: `${total} ÷ ${people} = ${each}，每人 ${each} 顆。`,
      tip: '平均分就是每一份一樣多。',
    });
  }
  if (typeIndex === 4) {
    const meters = 1 + Math.floor(rng() * 4);
    const cm = pick([5, 10, 20, 35, 50, 75], rng);
    const answer = meters * 100 + cm;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '長度',
      prompt: `${meters} 公尺 ${cm} 公分 = 多少公分？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 30),
      explanation: `1 公尺 = 100 公分，所以是 ${meters * 100} + ${cm} = ${answer}。`,
      tip: '先把公尺換成公分。',
    });
  }
  if (typeIndex === 5) {
    const hour = 8 + Math.floor(rng() * 3);
    const minute = pick([5, 10, 20, 30, 40], rng);
    const add = pick([15, 20, 30, 40], rng);
    const total = hour * 60 + minute + add;
    const answer = `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '時間',
      prompt: `${hour}:${String(minute).padStart(2, '0')} 再過 ${add} 分鐘是？`,
      answer,
      choices: choicesFrom(answer, [`${hour}:${String(minute + add).padStart(2, '0')}`, `${hour + 1}:${String(minute).padStart(2, '0')}`, `${Math.floor(total / 60)}:${String((total % 60) + 5).padStart(2, '0')}`], rng),
      explanation: `先把時間加上 ${add} 分鐘，答案是 ${answer}。`,
      tip: '分鐘滿 60 要進 1 小時。',
    });
  }
  if (typeIndex === 6) {
    const price = 12 + Math.floor(rng() * 20);
    const count = 2 + Math.floor(rng() * 6);
    const paid = price * count + pick([5, 10, 20], rng);
    const answer = paid - price * count;
    return makeQuestion({
      subject: 'math',
      grade,
      domain: '兩步驟應用',
      prompt: `一盒彩筆 ${price} 元，買 ${count} 盒付 ${paid} 元，找回多少元？`,
      answer: String(answer),
      choices: buildNumberChoices(answer, rng, 8),
      explanation: `先算 ${price} × ${count} = ${price * count}，再算 ${paid} - ${price * count} = ${answer}。`,
      tip: '先算總價，再算找回。',
    });
  }
  const hundreds = 1 + Math.floor(rng() * 8);
  const tens = Math.floor(rng() * 10);
  const ones = Math.floor(rng() * 10);
  const number = hundreds * 100 + tens * 10 + ones;
  return makeQuestion({
    subject: 'math',
    grade,
    domain: '位值',
    prompt: `${number} 的十位數字是多少？`,
    answer: String(tens),
    choices: buildNumberChoices(tens, rng, 4),
    explanation: `${number} 中，百位是 ${hundreds}，十位是 ${tens}，個位是 ${ones}。`,
    tip: '從右邊數：個位、十位、百位。',
  });
}

function generateQuestion({
  mode = 'mixed',
  grade = 'grade2',
  level = 1,
  wave = 1,
  streak = 0,
  difficulty = 'sprout',
  answeredCount = 0,
} = {}, seed) {
  const rng = makeRng(seed ?? Math.floor(Math.random() * 100000000));
  const subject =
    mode === 'mixed'
      ? SUBJECT_ORDER[(answeredCount + wave + level + streak) % SUBJECT_ORDER.length]
      : mode;

  if (subject === 'mandarin') return generateMandarinQuestion({ grade, level, wave }, rng);
  if (subject === 'english') return generateEnglishQuestion({ grade, level, wave }, rng);
  if (subject === 'natural') return generateNaturalQuestion({ grade, level, wave, streak }, rng);
  return generateMathQuestion({ grade, level, wave, streak, difficulty }, rng);
}

function getMonsterForWave(wave) {
  return MONSTERS[(Math.max(1, wave) - 1) % MONSTERS.length];
}

function getMonsterHp(monster, wave, difficulty, { boss = false } = {}) {
  const diff = DIFFICULTIES[difficulty] || DIFFICULTIES.sprout;
  const base = monster.hp + diff.hpBoost + Math.floor((wave - 1) * 14);
  return boss ? Math.round(base * 1.55) : base;
}

function calculateDamage({ streak = 0, level = 1, subject = 'math', retrying = false } = {}) {
  const subjectBonus = subject === 'english' ? 3 : subject === 'mandarin' ? 2 : subject === 'natural' ? 3 : 4;
  const retryPenalty = retrying ? 5 : 0;
  return Math.max(10, 15 + Math.floor(level * 1.8) + Math.min(20, streak * 3) + subjectBonus - retryPenalty);
}

function createInitialRun({
  mode = 'mixed',
  grade = 'grade2',
  difficulty = 'sprout',
  savedCollection = [],
  savedPetDex = {},
  savedFoodBag = {},
  savedHouse = {},
  phase = 'playing',
  stageIndex = 0,
} = {}) {
  const waveInStage = 1;
  const firstMonster = getStageMonster(stageIndex, waveInStage);
  const globalWave = stageIndex * 5 + waveInStage;
  const monsterMaxHp = getMonsterHp(firstMonster, globalWave, difficulty, { boss: isBossWave(waveInStage) });
  const collection = [...new Set(savedCollection)];
  return {
    phase,
    mode,
    grade,
    difficulty,
    stageIndex,
    waveInStage,
    stageWrong: 0,
    stageStars: 0,
    level: 1,
    wave: globalWave,
    score: 0,
    hearts: DIFFICULTIES[difficulty].hearts,
    maxHearts: DIFFICULTIES[difficulty].hearts,
    streak: 0,
    bestStreak: 0,
    energy: 0,
    answeredCount: 0,
    correctCount: 0,
    wrongCount: 0,
    correctionCount: 0,
    collection,
    petDex: normalizePetDex(savedPetDex, collection),
    foodBag: normalizeFoodBag(savedFoodBag),
    house: normalizeHouse(savedHouse),
    currentEgg: null,
    monster: firstMonster,
    monsterMaxHp,
    monsterHp: monsterMaxHp,
    question: generateQuestion({ mode, grade, level: 1, wave: globalWave, difficulty }),
    answered: null,
    wrongChoices: [],
    reviewQueue: [],
    retrying: false,
    feedback: null,
    log: ['期末冒險開始'],
  };
}

function summarizeRun(run) {
  const attempts = run.correctCount + run.wrongCount;
  const accuracy = attempts === 0 ? 0 : Math.round((run.correctCount / attempts) * 100);
  return {
    accuracy,
    collected: run.collection.length,
    score: run.score,
    bestStreak: run.bestStreak,
    corrections: run.correctionCount,
  };
}
