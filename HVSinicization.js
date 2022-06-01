// ==UserScript==
// @name         HV - 战斗日志汉化
// @namespace    Aloxaf_hentai
// @version      0.1.7
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
    //颜色请使用html颜色代码,注意添加逗号

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
  'Channeling' : '引导',
  'Fleeing' : '逃跑',

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
  'Soul Fragments':'灵魂碎片',

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
  'have escaped from the battle': '从战斗中脱离了',
  
  'A traveling salesmoogle gives':'自动出售给予了',
  'dropped':'掉落',

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
        'Monster Chow' : '怪物口粮',
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

        'Festival Coupon' : '节日礼券(等级7)', //2020起收获节（中秋）

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
        'Flimsy' : '薄弱 ',
        'Crude':'<span style=\"background:#acacac\" >劣质</span> ',
        'Fair':'<span style=\"background:#c1c1c1\" >一般</span> ',
        'Average':'<span style=\"background:#dfdfdf\" >中等</span> ',
        'Superior':'<span style=\"background:#fbf9f9\" >上等</span> ',
        'Fine':'<span style=\"background:#b9ffb9\" >优质</span> ',
        'Exquisite':'<span style=\"background:#d7e698\" >✧精良✧</span>',
        'Magnificent':'<span style=\"background:#a6daf6\" >☆史诗☆</span>',
        'Legendary':'<span style=\"background:#ffbbff\" >✪传奇✪</span>',
        'Peerless':'<span style=\"background:#ffd760\" >☯无双☯</span>',

        /////////////////个人补充翻译//////////

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
  if (document.getElementById('translog')) return;
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
