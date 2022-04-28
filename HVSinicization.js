// ==UserScript==
// @name         HV - 战斗日志汉化
// @namespace    Aloxaf_hentai
// @version      0.1.3
// @description  汉化 HV 战斗日志
// @notice       原作者@qp_xe，物品汉化文本由HV物品装备汉化提供
// @author       qp_xe & 1235789gzy1
// @include      https://hentaiverse.org/*
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

// 隐藏原先的战斗 log
GM_addStyle('#textlog { display: none }');

let words = {
  //可在此自行增加翻译，注意格式
    //示例
    //'原始文本1': '<span style=\"background:#字体背景色\" >自定义文本1</span>',
    //'原始文本2': '<span style=\"color:字体颜色\" >自定义文本2</span>',
    //颜色请使用html颜色代码

  // 恢复
  'Refreshment' : '提神',
  'Regeneration' : '再生',
  'Replenishment' : '补给',
  'Kicking Ass': '海扁',
  'Sleeper Imprint' : '沉睡烙印',

  // BUFF 效果
  'Regen' : '细胞活化',
  'Protection' : '守护',
  'Spirit Shield' : '灵力盾',
  'Hastened' : '疾速',
  'Shadow Veil' : '影纱',
  'Absorbing Ward' : '吸收结界',
  'Spark of Life' : '生命火花',
  'Cloak of the Fallen' : '陨落的披风',
  'Heartseeker' : '穿心',
  'Arcane Focus' : '奥术集成',

  //战斗风格
  'Overwhelming Strikes': '压倒性的攻击',
  'Coalesced Mana': '魔力合流',
  'Ether Tap' : '以太水龙头',

  // 物品
  'Health Gem' : '生命宝石',
  'Mana Gem' : '魔力宝石',
  'Spirit Gem' : '灵力宝石',
  'Mystic Gem' : '神秘宝石',
  'Health Potion' : '体力药水',
  'Health Draught' : '体力长效药',
  'Health Elixir' : '终极体力药',
  'Mana Potion' : '法力药水',
  'Mana Draught' : '法力长效药',
  'Mana Elixir' : '终极法力药',
  'Spirit Potion' : '灵力药水',
  'Spirit Draught' : '灵力长效药',
  'Spirit Elixir' : '终极灵力药',
  'Last Elixir' : '终极秘药',
  'Energy Drink' : '能量饮料',
  'Caffeinated Candy' : '咖啡因糖果',
  'Soul Stone' : '灵魂石',
  'Flower Vase' : '花瓶',
  'Bubble-Gum' : '泡泡糖',
  'Infusion of Darkness' : '黑暗魔药',
  'Infusion of Divinity' : '神圣魔药',
  'Infusion of Storms' : '风暴魔药',
  'Infusion of Lightning' : '闪电魔药',
  'Infusion of Frost' : '冰冷魔药',
  'Infusion of Flames' : '火焰魔药',
  'Infusion of Gaia' : '盖亚魔药',
  'Scroll of Swiftness' : '加速卷轴',
  'Scroll of the Avatar' : '化身卷轴',
  'Scroll of Shadows' : '幻影卷轴',
  'Scroll of Absorption' : '吸收卷轴',
  'Scroll of Life' : '生命卷轴',
  'Scroll of Protection' : '保护卷轴',
  'Scroll of the Gods' : '神之卷轴',

  //攻击咒语效果
  'Searing Skin' : '烧灼的皮肤',
  'Freezing Limbs' : '冰封的肢体',
  'Turbulent Air' : '湍流的空气',
  'Deep Burns' : '深层的烧伤',
  'Breached Defense' : '崩溃的防御',
  'Blunted Attack' : '钝化的攻击',

  // 技能
  'Flee' : '逃跑',
  'Scan' : '扫描',

  'FUS RO DAH' : '龙吼',
  'Orbital Friendship Cannon' : '友谊小马炮',
  'Concussive Strike' : '震荡打击',
  'Skyward Sword' : '天空之剑',
  'Frenzied Blows' : '狂乱百裂斩',
  'Iris Strike' : '虹膜打击',
  'Backstab' : '背刺',
  'Shatter Strike' : '破碎打击',
  'Rending Blow' : '撕裂打击',
  'Great Cleave' : '大劈砍',
  'Merciful Blow' : '最后的慈悲',
  'Shield Bash' : '盾击',
  'Vital Strike' : '要害强击',

  'Fiery Blast' : '灼热冲击(Ⅰ)',
  'Inferno' : '地狱火(Ⅱ)',
  'Flames of Loki' : '邪神之火(Ⅲ)',
  'Freeze' : '冰冻(Ⅰ)',
  'Blizzard' : '暴风雪(Ⅱ)',
  'Fimbulvetr' : '芬布尔之冬(Ⅲ)',
  'Shockblast' : '电能爆破(Ⅰ)',
  'Chained Lightning' : '连锁闪电(Ⅱ)',
  'Wrath of Thor' : '雷神之怒(Ⅲ)',
  'Gale' : '烈风(Ⅰ)',
  'Downburst' : '下击暴流(Ⅱ)',
  'Storms of Njord' : '尼奥尔德风暴(Ⅲ)',
  'Smite' : '惩戒(Ⅰ)',
  'Banishment' : '放逐(Ⅱ)',
  'Paradise Lost' : '失乐园(Ⅲ)',
  'Corruption' : '腐化(Ⅰ)',
  'Disintegrate' : '瓦解(Ⅱ)',
  'Ragnarok' : '诸神黄昏(Ⅲ)',

  'Drain' : '枯竭',
  'Slow' : '缓慢',
  'Weaken' : '虚弱',
  'Silence' : '沉默',
  'Sleep' : '沉眠',
  'Confuse' : '混乱',
  'Imperil' : '陷危',
  'Blind' : '致盲',
  'MagNet' : '魔磁网',

  'Regen' : '细胞活化',
  'Full-Cure' : '完全治愈',
  'Cure' : '治疗',
  'Haste' : '急速',
  'Protection' : '守护',
  'Shadow Veil' : '影纱',
  'Absorb' : '吸收',
  'Spark of Life' : '生命火花',
  'Arcane Focus' : '奥术集成',
  'Heartseeker' : '穿心',
  '[sS]pirit [sS]hield' : '灵力盾',

  //武器效果
  'Penetrated Armor' : '破甲',
  'Stunned' : '眩晕',
  'Bleeding Wound' : '流血',
  'Void Strike': '虚空冲击',
  'Wind Strike': '狂风冲击',
  'spike shield': '刺盾',

  // 动作
  'casts?': '<span style=\"background:#7CFC00\" >咏唱</span>',
  'parries your attack': '<span style=\"background:	#00FFFF\" >招架了你的攻击</span>',
  'uses': '<span style=\"background:#ADFF2F\" >使用了</span>',
  'hits': '<span style=\"color:#FF00FF\" >击中</span>',
  'crits': '<span style=\"color:#DC143C\" >暴击</span>',
  'restores': '<span style=\"color:#006400\" >恢复了</span>',
  'You use': '<span style=\"background:#ADFF2F\" >你使用了</span>',
  'gains? the effect': '<span style=\"background:#ADFF2F" >获得了状态</span>',
  'You crit': '<span style=\"color:#1E90FF\" >你</span><span style=\"color:#DC143C\" >暴击</span>',
  'You hit': '<span style=\"color:#1E90FF\" >你</span><span style=\"color:#FF00FF\" >击中</span>',
  'You are healed for (.*) Health Points': '你受到 $1 点生命的治疗',
  'You evade the attack from (.*)\.': '<span style=\"color:#696969\" >你躲开了 $1 的攻击.</span>',
  'You block the attack from (.*)\.': '<span style=\"color:#696969\" >你格挡了 $1 的攻击</span>',
  'You parry the attack from (.*)\.': '<span style=\"color:#696969\" >你招架了 $1 的攻击</span>',
  'You evade the attack': '<span style=\"color:#696969\" >你躲开了这次攻击</span>',
  'You block the attack': '<span style=\"color:#696969\" >你格挡了这次攻击</span>',
  'You parry the attack': '<span style=\"color:#696969\" >你招架了这次攻击</span>',
  'Your (.*) absorbs (.*) from the attack into': '你的 $1 吸收了 $2 并转化为 ',
  'You are Victorious!': '你胜利了',
  'You gain': '你获得了',
  'You obtained': '你获得了',
  'The effect (.*) on (.*) has expired': '<span style=\"color:	#9370DB\" >$2 身上的状态 $1 已失效</span>',
  'The effect (.*) has expired': '<span style=\"background:#7B68EE\" >状态 $1 已失效</span>',
  'Cooldown expired for (.*)': '$1 已冷却',

  'counter (.*) for (.*)': '<span style=\"background:#FFFF00\" >反击</span> $1 <span style=\"background:#FFFF00\" >造成 $2</span>',
  'healing (.*) for (.*) points of health': '治疗 $1 $2 点生命',
  'but is absorbed': '但被吸收了',
  'Spirit Stance Engaged': '灵动架势开启',
  'Spirit Stance Exhausted': '灵动架势关闭',

  'Spawned Monster': '生成怪物',
  'has been defeated': '已被打败',

  'for (\\d+)': '<span style=\"background:#FFFF00\" >造成 $1</span>',
  '[yY]our': '<span style=\"color:#1E90FF\" >你的</span>',
  '[yY]ou': '<span style=\"color:#1E90FF\" >你</span>',

  // 伤害
  'cold damage': '冰属性伤害',
  'void damage': '虚空属性伤害',
  'wind damage': '风属性伤害',
  'spirit damage': '灵力伤害',
  'crushing damage': '敲击伤害',
  'slashing damage': '砍击伤害',
  'piercing damage': '刺击伤害',
  'damage': '伤害',

  'points of': '点',
  'health': '生命',
  'magic': '魔力',
  'spirit': '灵力',
  
  //以下内容来自HV装备物品汉化
    'Health Potion' : '体力药水',
        'Health Draught' : '体力长效药',
        'Health Elixir' : '终极体力药',
        'Mana Potion' : '法力药水',
        'Mana Draught' : '法力长效药',
        'Mana Elixir' : '终极法力药',
        'Spirit Potion' : '灵力药水',
        'Spirit Draught' : '灵力长效药',
        'Spirit Elixir' : '终极灵力药',
        'Monster Chow' : '怪物饲料',
        'Last Elixir' : '终极秘药',
        'Energy Drink' : '能量饮料',
        'Caffeinated Candy' : '咖啡因糖果',
        'Golden Lottery Ticket' : '黄金彩票券',
        'Soul Stone' : '灵魂石',
        'Flower Vase' : '花瓶',
        'Bubble-Gum' : '泡泡糖',
        'Binding of Slaughter':  '粘合剂 基础物理伤害',
        'Binding of Balance':  '粘合剂 物理命中率',
        'Binding of Isaac':  '粘合剂 物理暴击率',
        'Binding of Destruction':  '粘合剂 基础魔法伤害',
        'Binding of Focus':  '粘合剂 魔法命中率',
        'Binding of Friendship':  '粘合剂 魔法暴击率',
        'Binding of Protection':  '粘合剂 物理减伤',
        'Binding of Warding':  '粘合剂 魔法减伤',
        'Binding of the Fleet':  '粘合剂 回避率',
        'Binding of the Barrier':  '粘合剂 格挡率',
        'Binding of the Nimble':  '粘合剂 招架率',
        'Binding of Negation':  '粘合剂 抵抗率',
        'Binding of the Ox':  '粘合剂 力量',
        'Binding of the Raccoon':  '粘合剂 灵巧',
        'Binding of the Cheetah':  '粘合剂 敏捷',
        'Binding of the Turtle':  '粘合剂 体质',
        'Binding of the Fox':  '粘合剂 智力',
        'Binding of the Owl':  '粘合剂 智慧',
        'Binding of the Elementalist':  '粘合剂 元素魔法熟练度',
        'Binding of the Heaven-sent':  '粘合剂 神圣魔法熟练度',
        'Binding of the Demon-fiend':  '粘合剂 黑暗魔法熟练度',
        'Binding of the Curse-weaver':  '粘合剂 减益魔法熟练度',
        'Binding of the Earth-walker':  '粘合剂 增益魔法熟练度',
        'Binding of Surtr':  '粘合剂 火属性咒语伤害',
        'Binding of Niflheim':  '粘合剂 冰属性咒语伤害',
        'Binding of Mjolnir':  '粘合剂 雷属性咒语伤害',
        'Binding of Freyr':  '粘合剂 风属性咒语伤害',
        'Binding of Heimdall':  '粘合剂 圣属性咒语伤害',
        'Binding of Fenrir':  '粘合剂 暗属性咒语伤害',
        'Binding of Dampening':  '粘合剂 敲击减伤',
        'Binding of Stoneskin':  '粘合剂 斩击减伤',
        'Binding of Deflection':  '粘合剂 刺击减伤',
        'Binding of the Fire-eater':  '粘合剂 火属性减伤',
        'Binding of the Frost-born':  '粘合剂 冰属性减伤',
        'Binding of the Thunder-child':  '粘合剂 雷属性减伤',
        'Binding of the Wind-waker':  '粘合剂 风属性减伤',
        'Binding of the Thrice-blessed':  '粘合剂 圣属性减伤',
        'Binding of the Spirit-ward':  '粘合剂 暗属性减伤',

        'Infusion of Darkness' : '黑暗魔药',
        'Infusion of Divinity' : '神圣魔药',
        'Infusion of Storms' : '风暴魔药',
        'Infusion of Lightning' : '闪电魔药',
        'Infusion of Frost' : '冰冷魔药',
        'Infusion of Flames' : '火焰魔药',
        'Infusion of Gaia' : '盖亚魔药',
        'Scroll of Swiftness' : '加速卷轴',
        'Scroll of the Avatar' : '化身卷轴',
        'Scroll of Shadows' : '幻影卷轴',
        'Scroll of Absorption' : '吸收卷轴',
        'Scroll of Life' : '生命卷轴',
        'Scroll of Protection' : '保护卷轴',
        'Scroll of the Gods' : '神之卷轴',
        'Crystal of Vigor' : '力量水晶',
        'Crystal of Finesse' : '灵巧水晶',
        'Crystal of Swiftness' : '敏捷水晶',
        'Crystal of Fortitude' : '体质水晶',
        'Crystal of Cunning' : '智力水晶',
        'Crystal of Knowledge' : '智慧水晶',
        'Crystal of Flames' : '火焰水晶',
        'Crystal of Frost' : '冰冻水晶',
        'Crystal of Lightning' : '闪电水晶',
        'Crystal of Tempest' : '疾风水晶',
        'Crystal of Devotion' : '神圣水晶',
        'Crystal of Corruption' : '暗黑水晶',
        'Crystal of Quintessence' : '灵魂水晶',

        'Monster Edibles' : '怪物食品',
        'Monster Cuisine' : '怪物料理',
        'Happy Pills' : '快乐药丸',

        'Wispy Catalyst' : '纤小 催化剂',
        'Diluted Catalyst' : '稀释 催化剂',
        'Regular Catalyst' : '平凡 催化剂',
        'Robust Catalyst' : '充沛 催化剂',
        'Vibrant Catalyst' : '活力 催化剂',
        'Coruscating Catalyst' : '闪耀 催化剂',
        'Low-Grade Cloth': '低级布料',
        'Mid-Grade Cloth': '中级布料',
        'High-Grade Cloth': '高级布料',
        'Low-Grade Leather': '低级皮革',
        'Mid-Grade Leather': '中级皮革',
        'High-Grade Leather': '高级皮革',
        'Low-Grade Metals': '低级金属',
        'Mid-Grade Metals': '中级金属',
        'High-Grade Metals': '高级金属',
        'Low-Grade Wood': '低级木头',
        'Mid-Grade Wood': '中级木头',
        'High-Grade Wood': '高级木头',
        'Scrap Metal' : '金属废料',
        'Scrap Leather' : '皮革废料',
        'Scrap Wood' : '木材废料',
        'Scrap Cloth' : '布制废料',
        'Energy Cell' : '能量元',
        'Defense Matrix Modulator' : '力场碎片(盾)',
        'Repurposed Actuator' : '动力碎片(重)',
        'Shade Fragment' : '暗影碎片(轻)',
        'Crystallized Phazon' : '相位碎片(布)',
        'Legendary Weapon Core' : '传奇武器核心',
        'Peerless Weapon Core' : '无双武器核心',
        'Legendary Staff Core' : '传奇法杖核心',
        'Peerless Staff Core' : '无双法杖核心',
        'Legendary Armor Core' : '传奇护甲核心',
        'Peerless Armor Core' : '无双护甲核心',
        'Voidseeker Shard' : '虚空碎片',
        'Featherweight Shard' : '羽毛碎片',
        'Aether Shard' : '以太碎片',
        'Amnesia Shard' : '重铸碎片',
        'Soul Fragment' : '灵魂碎片',
        'Blood Token' : '鲜血令牌',
        'Token of Blood' : '鲜血令牌',
        'Chaos Token' : '混沌令牌',

        'Precursor Artifact' : '古遗物',
        'ManBearPig Tail' : '人熊猪的尾巴(等级2)',
        'Mithra\'s Flower' : '猫人族的花(等级2)',
        'Holy Hand Grenade of Antioch' : '安提阿的神圣手榴弹(等级2)',
        'Dalek Voicebox' : '戴立克音箱(等级2)',
        'Lock of Blue Hair' : '一绺蓝发(等级2)',
        'Bunny-Girl Costume' : '兔女郎装(等级3)',
        'Hinamatsuri Doll' : '雏人形(等级3)',
        'Broken Glasses' : '破碎的眼镜(等级3)',
        'Sapling' : '树苗(等级4)',
        'Black T-Shirt' : '黑色Ｔ恤(等级4)',
        'Unicorn Horn' : '独角兽的角(等级5)',
        'Noodly Appendage' : '面条般的附肢(等级6)',

        'Bronze Coupon' : '铜礼券(等级3)',
        'Silver Coupon' : '银礼券(等级5)',
        'Gold Coupon' : '黄金礼券(等级7)',
        'Platinum Coupon' : '白金礼券(等级8)',
        'Peerless Voucher' : '无双凭证',


        //节日及特殊奖杯
        'Mysterious Box' : '神秘宝盒(等级9)', // 在‘训练：技能推广’调整价格后赠予某些玩家。
        'Solstice Gift' : '冬至赠礼(等级7)', //  2009 冬至
        'Stocking Stuffers' : '圣诞袜小礼物(等级7)', // 2009年以来每年圣诞节礼物。
        'Tenbora\'s Box' : '天菠拉的盒子(等级9)', // 年度榜单或者年度活动奖品
        'Shimmering Present' : '微光闪动的礼品(等级8)', //  2010 圣诞节
        'Potato Battery' : '马铃薯电池(等级7)', // 《传送门 2》发售日
        'RealPervert Badge' : '真-变态胸章(等级7)', // 2011 愚人节
        'Rainbow Egg' : '彩虹蛋(等级8)', //  2011 复活节
        'Colored Egg' : '彩绘蛋(等级7)', //  2011 复活节
        'Raptor Jesus' : '猛禽耶稣(等级7)', //  哈罗德·康平的被提预言
        'Gift Pony' : '礼品小马(等级8)', // 2011 圣诞节
        'Faux Rainbow Mane Cap' : '人造彩虹鬃毛帽(等级8)', //  2012 复活节
        'Pegasopolis Emblem' : '天马族徽(等级7)', // 2012 复活节
        'Fire Keeper Soul' : '防火女的灵魂(等级8)', // 2012 圣诞节
        'Crystalline Galanthus' : '结晶雪花莲(等级8)', // 2013 复活节
        'Sense of Self-Satisfaction' : '自我满足感(等级7)', // 2013 复活节
        'Six-Lock Box' : '六道锁盒子(等级8)', // 2013 圣诞节
        'Golden One-Bit Coin' : '金色一比特硬币(等级8)', // 2014 复活节
        'USB ASIC Miner' : '随身型特定应用积体电路挖矿机(等级7)', // 2014 复活节
        'Reindeer Antlers' : '驯鹿鹿角(等级8)', // 2014 圣诞节
        'Ancient Porn Stash' : '古老的色情隐藏档案(等级8)', // 2015 复活节
        'VPS Hosting Coupon' : '虚拟专用服务器代管优惠券(等级7)', // 2015 复活节
        'Heart Locket' : '心型盒坠(等级8)', // 2015 圣诞节
        'Holographic Rainbow Projector' : '全像式彩虹投影机(等级8)', // 2016 复活节
        'Pot of Gold' : '黄金罐(等级7)', // 2016 复活节
        'Dinosaur Egg' : '恐龙蛋(等级8)', // 2016 圣诞节
        'Precursor Smoothie Blender' : '旧世界冰沙机(等级8)', // 2017 复活节
        'Rainbow Smoothie' : '彩虹冰沙(等级7)', // 2017 复活节
        'Mysterious Tooth' : '神秘的牙齿(等级8)', // 2017 圣诞节
        'Grammar Nazi Armband' : '语法纳粹臂章(等级7)', // 2018 复活节
        'Abstract Wire Sculpture' : '抽象线雕(等级8)', // 2018 复活节
        'Delicate Flower' : '娇嫩的花朵(等级8)', // 2018 圣诞节
        'Assorted Coins' : '什锦硬币(等级7)', // 2019 复活节
        'Coin Collector\'s Guide' : '硬币收藏家指南(等级8)', // 2019 复活节
        'Iron Heart' : '钢铁之心(等级8)', // 2019 圣诞节
        'Shrine Fortune' : '神社灵签(等级7)', // 2020起复活节
        'Plague Mask' : '瘟疫面具(等级8)', // 2020 复活节
        'Festival Coupon' : '节日礼券(等级7)', //2020起收获节（中秋？）
        'Annoying Gun' : '烦人的枪(等级8)', //2020 圣诞节
        'Vaccine Certificate' : '疫苗证明(等级8)', //2021 复活节
        'Barrel' : '酒桶(等级8)', //2021 圣诞节
        'CoreCare Starter Kit' : '核心服务工具套件(等级8)', //2022 复活节


        //旧旧古董
        'Priceless Ming Vase' : '无价的明朝瓷器',
        'Grue' : '格鲁',
        'Seven-Leafed Clover' : '七叶幸运草',
        'Rabbit\'s Foot' : '幸运兔脚',
        'Wirt\'s Leg' : '维特之脚',
        'Wirts Leg' : '维特之脚',
        'Shark-Mounted Laser' : '装在鲨鱼头上的激光枪',
        'BFG9000' : 'BFG9000',
        'Railgun' : '磁道炮',
        'Flame Thrower' : '火焰喷射器',
        'Small Nuke' : '小型核武',
        'Chainsaw Oil' : '电锯油',
        'Chainsaw Fuel' : '电锯燃油',
        'Chainsaw Chain' : '电锯链',
        'Chainsaw Safety Manual' : '电锯安全手册',
        'Chainsaw Repair Guide' : '电锯维修指南',
        'Chainsaw Guide Bar' : '电锯导板',
        'ASHPD Portal Gun' : '光圈科技传送门手持发射器',
        'Smart Bomb' : '炸弹机器人',
        'Tesla Coil' : '电光塔',
        'Vorpal Blade Hilt' : '斩龙剑的剑柄',
        'Crystal Jiggy' : '水晶拼图',

        //圣诞文物
        'Fiber-Optic Xmas Tree' : '光纤圣诞树',
        'Decorative Pony Sled' : '小马雪橇装饰品',
        'Hearth Warming Lantern' : '暖心节灯笼',
        'Mayan Desk Calendar' : '马雅桌历',
        'Fiber-Optic Tree of Harmony' : '光纤谐律之树',
        'Crystal Snowman' : '水晶雪人',
        'Annoying Dog' : '烦人的狗',
        'Iridium Sprinkler' : '铱制洒水器',
        'Robo Rabbit Head' : '机器兔子头',

        //复活节文物
        //2011
        'Easter Egg' : '复活节彩蛋',
        //S、N、O、W、F、L、A、K、E。
        //2012
        'Red Ponyfeather' : '红色天马羽毛',
        'Orange Ponyfeather' : '橙色天马羽毛',
        'Yellow Ponyfeather' : '黄色天马羽毛',
        'Green Ponyfeather' : '绿色天马羽毛',
        'Blue Ponyfeather' : '蓝色天马羽毛',
        'Indigo Ponyfeather' : '靛色天马羽毛',
        'Violet Ponyfeather' : '紫色天马羽毛',
        //2013
        'Twinkling Snowflake' : '闪闪发光(Twinkling)的雪花',
        'Glittering Snowflake' : '闪闪发光(Glittering)的雪花',
        'Shimmering Snowflake' : '闪闪发光(Shimmering)的雪花',
        'Gleaming Snowflake' : '闪闪发光(Gleaming)的雪花',
        'Sparkling Snowflake' : '闪闪发光(Sparkling)的雪花',
        'Glinting Snowflake' : '闪闪发光(Glinting)的雪花',
        'Scintillating Snowflake' : '闪闪发光(Scintillating)的雪花',
        //2014
        'Altcoin' : '山寨币',
        'LiteCoin' : '莱特币',
        'DogeCoin' : '多吉币',
        'PeerCoin' : '点点币',
        'FlappyCoin' : '象素鸟币',
        'VertCoin' : '绿币',
        'AuroraCoin' : '极光币',
        'DarkCoin' : '暗黑币',
        //2015
        'Ancient Server Part' : '古老的服务器零组件',
        'Server Motherboard' : '服务器主板',
        'Server CPU Module' : '服务器中央处理器模组',
        'Server RAM Module' : '服务器主内存模组',
        'Server Chassis' : '服务器机壳',
        'Server Network Card' : '服务器网络卡',
        'Server Hard Drive' : '服务器硬盘',
        'Server Power Supply' : '服务器电源供应器',
        //2016
        'Chicken Figurines' : '小鸡公仔',
        'Red Chicken Figurine' : '红色小鸡公仔',
        'Orange Chicken Figurine' : '橙色小鸡公仔',
        'Yellow Chicken Figurine' : '黄色小鸡公仔',
        'Green Chicken Figurine' : '绿色小鸡公仔',
        'Blue Chicken Figurine' : '蓝色小鸡公仔',
        'Indigo Chicken Figurine' : '靛色小鸡公仔',
        'Violet Chicken Figurine' : '紫色小鸡公仔',
        //2017
        'Ancient Fruit Smoothies' : '古老的水果冰沙',
        'Ancient Lemon' : '古代柠檬',
        'Ancient Plum' : '古代李子',
        'Ancient Kiwi' : '古代奇异果',
        'Ancient Mulberry' : '古代桑葚',
        'Ancient Blueberry' : '古代蓝莓',
        'Ancient Strawberry' : '古代草莓',
        'Ancient Orange' : '古代橙子',
        //2018
        'Aggravating Spelling Error' : '严重的拼写错误',
        'Exasperating Spelling Error' : '恼人的拼写错误',
        'Galling Spelling Error' : '恼怒的拼写错误',
        'Infuriating Spelling Error' : '激怒的拼写错误',
        'Irking Spelling Error' : '忿怒的拼写错误',
        'Vexing Spelling Error' : '烦恼的拼写错误',
        'Riling Spelling Error' : '愤怒的拼写错误',
        //2019
        'Manga Category Button' : '漫画类别按钮',
        'Doujinshi Category Button' : '同人志类别按钮',
        'Artist CG Category Button' : '画师CG类别按钮',
        'Western Category Button' : '西方类别按钮',
        'Image Set Category Button' : '图集类别按钮',
        'Game CG Category Button' : '游戏CG类别按钮',
        'Non-H Category Button' : '非H类别按钮',
        'Cosplay Category Button' : 'Cosplay类别按钮',
        'Asian Porn Category Button' : '亚洲色情类别按钮',
        'Misc Category Button' : '杂项类别按钮',
        //2020
        'Hoarded Hand Sanitizer' : '库存的洗手液',
        'Hoarded Disinfecting Wipes' : '库存的消毒湿巾',
        'Hoarded Face Masks' : '库存的口罩',
        'Hoarded Toilet Paper' : '库存的厕纸',
        'Hoarded Dried Pasta' : '库存的干面',
        'Hoarded Canned Goods' : '库存的罐头',
        'Hoarded Powdered Milk' : '库存的奶粉',
        //2021
        'Red Vaccine Vial' : '红色疫苗瓶',
        'Orange Vaccine Vial' : '橙色疫苗瓶',
        'Yellow Vaccine Vial' : '黄色疫苗瓶',
        'Green Vaccine Vial' : '绿色疫苗瓶',
        'Blue Vaccine Vial' : '蓝色疫苗瓶',
        'Indigo Vaccine Vial' : '靛色疫苗瓶',
        'Violet Vaccine Vial' : '紫色疫苗瓶',
        //2022
        'Core Carrying Bag' : '核心携带包',
        'Core Display Stand' : '核心展示架',
        'Core Ornament Set' : '核心饰品套装',
        'Core Maintenance Set' : '核心维护套装',
        'Core Wall-Mount Display' : '核心壁挂显示器',
        'Core LED Illumination' : '核心LED照明',
///////////////////////////////////////////武器种类
        // 单手武器类
        'Dagger':'*匕首（单）',
        'Sword Chucks' : '*锁链双剑（单）',
        'Shortsword':'短剑（单）',
        'Wakizashi':'脇差（单）',
        'Axe':'斧（单）',
        'Club':'棍（单）',
        'Rapier':'<span style=\"background:#ffa500\" >西洋剑</span>（单）',
        //双手
        'Scythe':'*镰刀（双）',
        'Longsword':'长剑（双）',
        'Katana':'太刀（双）',
        'Mace':'重槌（双）',
        'Estoc':'刺剑（双）',
        //法杖
        'Staff':'法杖',
        //布甲
        'Cap ':'兜帽 ',
        'Cap$':'兜帽',
        'Cap<':'兜帽<',
        'Robe':'长袍',
        'Gloves':'手套',
        'Pants':'短裤',
        'Shoes':'鞋',
        //轻甲
        'Helmet':'头盔',
        'Breastplate':'护胸',
        'Gauntlets':'手甲',
        'Leggings':'护腿',
        //重甲
        'Cuirass':'胸甲',
        'Armor':'盔甲',
        'Sabatons':'铁靴',
        'Boots':'靴子',
        'Greaves':'护胫',
        //锁子甲
        'Coif' : '头巾',
        'Mitons' : '护手',
        'Hauberk' : '装甲',
        'Chausses' : '裤',

        /////////////////////////////盾或者材料,武器不会出现这个
        'Buckler':'圆盾',
        'Kite Shield':'鸢盾',
        'Tower Shield':'*塔盾',
        'Force Shield':'<span style=\"background:#ffa500\" >力场盾</span>',

        ////////////////////////材质前缀////////////////////////
        //布甲
        'Cotton':'棉质<span style=\"background:#FFFFFF;color:#000000\" >(布)</span>',
        'Gossamer':'*薄纱<span style=\"background:#FFFFFF;color:#000000\" >(布)</span>',
        'Silk' : '*丝绸<span style=\"background:#FFFFFF;color:#000000\" >(布)</span>',
        'Phase':'<span style=\"background:#ffa500\" >相位</span><span style=\"background:#FFFFFF;color:#000000\" >(布)</span>',
        //轻甲
        'Leather':'皮革<span style=\"background:#666666;color:#FFFFFF\" >(轻)</span>',
        'Kevlar':'*凯夫拉<span style=\"background:#666666;color:#FFFFFF\" >(轻)</span>',
        'Dragon Hide' : '*龙皮<span style=\"background:#666666;color:#FFFFFF\" >(轻)</span>',
        'Shade':'<span style=\"background:#ffa500\" >暗影</span><span style=\"background:#666666;color:#FFFFFF\" >(轻)</span>',
        //重甲
        'Chainmail' : '*锁子甲<span style=\"background:#000000;color:#FFFFFF\" >(重)</span>',
        'Plate':'板甲<span style=\"background:#000000;color:#FFFFFF\" >(重)</span>',
        'Power':'<span style=\"background:#ffa500\" >动力</span><span style=\"background:#000000;color:#FFFFFF\" >(重)</span>',
        //法杖
        'Ebony':'*乌木',
        'Redwood':'红木',
        'Willow':'柳木',
        'Oak':'橡木',
        'Katalox':'铁木',

        ///////////////////////////////////////////防具后缀////////////////////////////////////////////
        'of Negation':'否定',
        'of the Shadowdancer':'影舞者',
        'of the Arcanist':'奥术师',
        'of the Fleet':'迅捷',
        'of the Fire-eater':'噬火者',
        'of the Thunder-child':'雷之子',
        'of the Wind-waker':'风之杖',
        'of the Frost-born':'冰人',
        'of the Spirit-ward':'灵魂护佑',
        'of the Thrice-blessed':'三重祝福',
        'of the Stone-skinned':'硬皮',
        'of Dampening':'抑制',
        'of Stoneskin':'石肤',
        'of Deflection':'偏转',
        'of the Nimble':'招架',
        'of the Barrier':'格挡',
        'of Protection':'物防',
        'of Warding':'魔防',

        'of the Ox' :  '牛（力量）',
        'of the Raccoon' :  '浣熊（灵巧）',
        'of the Cheetah' :  '猎豹（敏捷）',
        'of the Turtle' :  '乌龟（体质）',
        'of the Fox' :  '狐狸（智力）',
        'of the Owl' :  '猫头鹰（智慧）',
        'of the Hulk' :  '浩克',
        'of the Shielding Aura' :  '守护光环',

        ////////////////////////////////////////////////////武器后缀/////////////////////////////////
        'of Slaughter':'<span style=\"background:#FF0000;color:#FFFFFF\" >杀戮</span>',
        'of Swiftness':'加速',
        'of Balance':'平衡',
        'of the Battlecaster':'战法师',
        'of the Banshee':'报丧女妖',
        'of the Illithid':'灵吸怪',
        'of the Vampire':'吸血鬼',
        'of Destruction':'<span style=\"background:#9400d3;color:#FFFFFF\" >毁灭</span>',
        'of Surtr':'<span style=\"background:#f97c7c\" >苏尔特（火伤）</span>',
        'of Niflheim':'<span style=\"background:#94c2f5\" >尼芙菲姆（冰伤）</span>',
        'of Mjolnir':'<span style=\"background:#f4f375\" >姆乔尔尼尔（雷伤）</span>',
        'of Freyr':'<span style=\"background:#7ff97c\" >弗瑞尔（风伤）</span>',
        'of Heimdall':'<span style=\"background:#ffffff\;color:#000000\" >海姆达（圣伤）</span>',
        'of Fenrir':'<span style=\"background:#000000\;color:#ffffff" >芬里尔（暗伤）</span>',
        'of Focus':'专注',
        'of the Elementalist':'元素使',
        'of the Heaven-sent':'天堂',
        'of the Demon-fiend':'恶魔',
        'of the Earth-walker':'地行者',
        'of the Priestess':'牧师',
        'of the Curse-weaver':'咒术师',

        ///////////////武器或者防具属性/////////////////
        'Radiant':'<span style=\"background:#ffffff\;color:#000000" >✪魔光✪</span>',
        'Mystic':'神秘的',
        'Charged':'<span style=\"color:red\" >充能的</span>',
        'Amber':'<span style=\"background:#ffff00\;color:#9f9f16" >琥珀的（雷抗）</span>',
        'Mithril':'<span style=\"color:red\" >秘银的</span>',
        'Agile':'俊敏的',
        'Zircon':'<span style=\"background:#ffffff\;color:#5c5a5a" >锆石的（圣抗）</span>',
        'Frugal':'<span style=\"color:red\" >节能</span>',
        'Jade':'<span style=\"background:#b1f9b1\" >翡翠的（风抗）</span>',
        'Cobalt':'<span style=\"background:#a0f4f4\" >钴石的（冰抗）</span>',
        'Ruby':'<span style=\"background:#ffa6a6\" >红宝石（火抗）</span>',
        'Onyx':'<span style=\"background:#cccccc\" >缟玛瑙（暗抗）</span>',
        'Savage':'<span style=\"color:red\" >野蛮的</span>',
        'Reinforced':'加固的',
        'Shielding':'盾化的',
        'Arctic':'<span style=\"background:#94c2f5\" >极寒之</span>',
        'Fiery':'<span style=\"background:#f97c7c\" >灼热之</span>',
        'Shocking':'<span style=\"background:#f4f375\" >闪电之</span>',
        'Tempestuous':'<span style=\"background:#7ff97c\" >风暴之</span>',
        'Hallowed':'<span style=\"background:#ffffff\;color:#000000" >神圣之</span>',
        'Demonic':'<span style=\"background:#000000\;color:#ffffff" >恶魔之</span>',
        'Ethereal':'<span style=\"background:#ffffff\;color:#5c5a5a" >虚空之</span>',

        'Bronze ' : '铜 ',
        'Iron ' : '铁 ',
        'Silver ' : '银 ',
        'Steel ' : '钢 ',
        'Gold ' : '金 ',
        'Bronze-' : '铜-',
        'Iron-' : '铁-',
        'Silver-' : '银-',
        'Steel-' : '钢-',
        'Gold-' : '金-',
        'Platinum' : '白金',
        'Titanium' : '钛',
        'Emerald' : '祖母绿',
        'Sapphire' : '蓝宝石',
        'Diamond' : '金刚石',
        'Prism' : '光棱',
        '-trimmed' : '-镶边',
        '-adorned' : '-装饰',
        '-tipped' : '-前端',
        'Astral' : '五芒星',
        'Quintessential' : '第五元素',

        /////////////////品质//////////
        'Flimsy ' : '薄弱 ',
        'Crude ':'<span style=\"background:#acacac\" >劣质</span> ',
        'Fair ':'<span style=\"background:#c1c1c1\" >一般</span> ',
        'Average ':'<span style=\"background:#dfdfdf\" >中等</span> ',
        'Superior ':'<span style=\"background:#fbf9f9\" >上等</span> ',
        'Fine ':'<span style=\"background:#b9ffb9\" >优质</span> ',
        'Exquisite':'<span style=\"background:#d7e698\" >✧精良✧</span>',
        'Magnificent':'<span style=\"background:#a6daf6\" >☆史诗☆</span>',
        'Legendary':'<span style=\"background:#ffbbff\" >✪传奇✪</span>',
        'Peerless':'<span style=\"background:#ffd760\" >☯无双☯</span>',

        /////////////////装备部位，更换装备列表用的//////////
        'Empty':'空',
        'Main Hand':'主手',
        'Off Hand':'副手',
        'Helmet':'头盔',
        'Body':'身体',
        'Hands':'手部',
        'Legs(\\W)':'腿部$1',
        'Feet(\\W)':'脚部$1',

        'Current Owner':'持有者',
        /////////////////个人补充翻译//////////
        'dropped':'掉落',
        'Soul Fragments':'灵魂碎片',
        'Channeling':'急速'
}

let regexs = [], chinese = [];

for (const [key, value] of Object.entries(words)) {
  regexs.push(new RegExp(`(?<=[ ,.\\[]|^)${key}(?=[ ,.\\]]|$)`, 'g'));
  chinese.push(value);
}

unsafeWindow.trans_regexs  = regexs;
unsafeWindow.trans_chinese = chinese;

function trans(text) {
  let regexs  = unsafeWindow.trans_regexs  || regexs;
  let chinese = unsafeWindow.trans_chinese || chinese;
  for (const [idx, regex] of Object.entries(regexs)) {
    text = text.replace(regex, chinese[idx]);
  }
  return text;
}

function observe_node(node, config, callback) {
    const observer = new MutationObserver(callback);
    observer.observe(node, config);
    return observer;
}

function add_to_log(text) {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.classList.add('tl');
  td.innerHTML = trans(text);
  tr.appendChild(td);
  let log = document.querySelector('#translog');
  log.insertBefore(tr, log.firstChild);
}

function handle_log(mutations, _observer) {
  for (const mutation of mutations) {
    if (mutation.type !== 'childList') {
      continue;
    }
    for (const node of mutation.addedNodes) {
      if (node.nodeName !== 'TR') {
        continue;
      }
      let text = [];
      node.childNodes.forEach(n => text.push(n.innerHTML));
      add_to_log(text.join(' '));
      // console.log(trans(node.textContent));
    }
  }
}

function start_observe() {
  // 在原日志的后面增加一个新的元素存放翻译后的日志，避免对其他插件造成可能存在的干扰
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');
  table.id = 'translog';
  table.appendChild(tbody);

  let textlog = document.querySelector('#pane_log');
  textlog.appendChild(table);

  // 添加一下已存在的日志
  let texts = [];
  for (const log of document.querySelectorAll('#textlog > tbody > tr > td')) {
    texts.push(log.innerHTML);
  }
  for (const text of texts.reverse()) {
    add_to_log(text);
  }

  return observe_node(document.querySelector('#textlog').firstChild, {childList: true}, handle_log);
}


if (document.querySelector('#battle_main') !== null) {
  // 新回合开始时会刷新 battle_main，导致原本的监听失效，必须在刷新时重新监听一次
  observe_node(document.querySelector('#battle_main'), { childList: true }, () => {
    start_observe();
  });
  observe_node(document.querySelector('body'), { childList: true }, () => {
    start_observe();
  });
  start_observe();
}
