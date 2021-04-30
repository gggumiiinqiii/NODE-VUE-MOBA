module.exports = app =>{
  const router = require('express').Router()
  const mongoose = require('mongoose')
  // 测试添加录入数据
  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')
  const Hero = mongoose.model('Hero')
  const Item = mongoose.model('Item')
  //导入物品数据
  router.get('/items/initfff',async(req,res)=>{
    const itemLists = [{
	"item_id": 1111,
	"item_name": "铁剑",
	"item_type": 1,
	"price": 150,
	"total_price": 250,
	"des1": "<p>+20物理攻击</p>"
}, {
	"item_id": 1112,
	"item_name": "匕首",
	"item_type": 1,
	"price": 174,
	"total_price": 290,
	"des1": "<p>+10%攻击速度 </p>"
}, {
	"item_id": 1113,
	"item_name": "搏击拳套",
	"item_type": 1,
	"price": 192,
	"total_price": 320,
	"des1": "<p>+8%暴击率 </p>"
}, {
	"item_id": 1114,
	"item_name": "吸血之镰",
	"item_type": 1,
	"price": 246,
	"total_price": 410,
	"des1": "<p>+10物理攻击<br>+8%物理吸血</p>"
}, {
	"item_id": 1116,
	"item_name": "雷鸣刃",
	"item_type": 1,
	"price": 270,
	"total_price": 450,
	"des1": "<p>+40物理攻击</p>"
}, {
	"item_id": 1117,
	"item_name": "冲能拳套",
	"item_type": 1,
	"price": 330,
	"total_price": 550,
	"des1": "<p>+15%暴击率</p> "
}, {
	"item_id": 1121,
	"item_name": "风暴巨剑",
	"item_type": 1,
	"price": 546,
	"total_price": 910,
	"des1": "<p>+80物理攻击</p> "
}, {
	"item_id": 1122,
	"item_name": "日冕",
	"item_type": 1,
	"price": 474,
	"total_price": 790,
	"des1": "<p>+40物理攻击<br>+300最大生命</p> ",
	"des2": "<p>唯一被动-残废：普通攻击有30%几率降低敌人20%移动速度，持续2秒</p>"
}, {
	"item_id": 1123,
	"item_name": "狂暴双刃",
	"item_type": 1,
	"price": 534,
	"total_price": 890,
	"des1": "<p>+15%攻击速度<br>+10%暴击率<br>+5%移速</p>"
}, {
	"item_id": 1124,
	"item_name": "陨星",
	"item_type": 1,
	"price": 648,
	"total_price": 1080,
	"des1": "<p>+45物理攻击<br>+10%冷却缩减</p>",
	"des2": "<p>唯一被动-切割：+60物理穿透</p>"
}, {
	"item_id": 1131,
	"item_name": "碎星锤",
	"item_type": 1,
	"price": 1260,
	"total_price": 2100,
	"des1": "<p>+80物理攻击<br>+10%冷却缩减</p>",
	"des2": "<p>唯一被动-破甲：+40%物理穿透</p>"
}, {
	"item_id": 1126,
	"item_name": "末世",
	"item_type": 1,
	"price": 1296,
	"total_price": 2160,
	"des1": "<p>+60物理攻击<br>+30%攻击速度 <br>+10%物理吸血</p>",
	"des2": "<p>唯一被动-破败：普通攻击附带敌人当前生命值8%的物理伤害（对野怪最多：80）</p>"
}, {
	"item_id": 1127,
	"item_name": "名刀·司命",
	"item_type": 1,
	"price": 1056,
	"total_price": 1900,
	"des1": "<p>+60物理攻击<br>+5%冷却缩减</p>",
	"des2": "<p>唯一被动-暗幕：受到致命伤害时，进入短暂无敌状态并增加30%移动速度，持续1秒（远程英雄使用时用时持续时间缩短为0.5秒）冷却时间：120秒</p>"
}, {
	"item_id": 1128,
	"item_name": "寒霜袭侵",
	"item_type": 1,
	"price": 1188,
	"total_price": 1980,
	"des1": "<p>+100物理攻击<br>+40%攻击速度</p>",
	"des2": "<p>被动-寒霜：普攻会给目标附加寒霜效果，可叠加3层，每层减少15%攻速，持续1.5秒。该效果的冷却时间：0.2秒</p>"
}, {
	"item_id": 1129,
	"item_name": "速击之枪",
	"item_type": 1,
	"price": 534,
	"total_price": 890,
	"des1": "<p>+25%攻击速度</p>",
	"des2": "<p>唯一被动-精准：普通攻击伤害提升30点，远程英雄使用时该效果翻倍。</p>"
}, {
	"item_id": 11210,
	"item_name": "制裁之刃",
	"item_type": 1,
	"price": 1080,
	"total_price": 1800,
	"des1": "<p>+100物理攻击<br>+15%物理吸血</p>",
	"des2": "<p>唯一被动-重伤：造成伤害使得目标的生命恢复效果减少50%，持续1.5秒（如果该伤害由普攻触发，则持续时间延长至3秒）</p>"
}, {
	"item_id": 1132,
	"item_name": "泣血之刃",
	"item_type": 1,
	"price": 1044,
	"total_price": 1740,
	"des1": "<p>+100物理攻击<br>+25%物理吸血 </p>"
}, {
	"item_id": 1133,
	"item_name": "无尽战刃",
	"item_type": 1,
	"price": 1284,
	"total_price": 2140,
	"des1": "<p>+110物理攻击<br>+25%暴击率</p>",
	"des2": "<p>唯一被动：+40%暴击效果</p>"
}, {
	"item_id": 1134,
	"item_name": "宗师之力",
	"item_type": 1,
	"price": 1260,
	"total_price": 2100,
	"des1": "<p>+80物理攻击<br>+20%暴击率<br>+400 最大法力<br>+400最大生命</p>",
	"des2": "<p>唯一被动-强击：使用技能后，2秒内提升自身12%移动速度，并使得下次普通攻击造成额外0.8*物理攻击的物理伤害，冷却时间：3秒</p>"
}, {
	"item_id": 1135,
	"item_name": "闪电匕首",
	"item_type": 1,
	"price": 1104,
	"total_price": 1840,
	"des1": "<p>+40%攻击速度<br>+10%暴击率<br>+8%移速</p>",
	"des2": "<p>唯一被动-电弧：普通攻击有30%几率释放连锁闪电，对目标造成（120+0.3*物理攻击）点法术伤害，这个伤害可以暴击，冷却时间：0.2秒</p>"
}, {
	"item_id": 1136,
	"item_name": "影刃",
	"item_type": 1,
	"price": 1242,
	"total_price": 2070,
	"des1": "<p>+40%攻击速度<br>+20%暴击率<br>+5%移速</p>",
	"des2": "<p>唯一被动-暴风：暴击后提升自身30%攻击速度和10%移动速度，持续2秒</p>"
}, {
	"item_id": 1137,
	"item_name": "暗影战斧",
	"item_type": 1,
	"price": 1254,
	"total_price": 2090,
	"des1": "<p>+85物理攻击<br>+15%冷却缩减<br>+500最大生命</p>",
	"des2": "<p>唯一被动-切割：增加(50+英雄等级*8)点护甲穿透<br>唯一被动-残废：普通攻击有30%几率降低敌人20%移动速度，持续2秒</p>"
}, {
	"item_id": 1138,
	"item_name": "破军",
	"item_type": 1,
	"price": 1770,
	"total_price": 2950,
	"des1": "<p>+180物理攻击 </p>",
	"des2": "<p>唯一被动-破军：对生命值低于50%的敌人造成额外30%的伤害</p>"
}, {
	"item_id": 11311,
	"item_name": "纯净苍穹",
	"item_type": 1,
	"price": 1338,
	"total_price": 2121,
	"des1": "<p>+100物理攻击<br>+10%冷却缩减<br>++500最大生命</p>",
	"des2": "<p>唯一主动-驱散：90秒CD，受到的所有伤害降低30%，持续3秒，可以在被控制时使用</p>"
}, {
	"item_id": 1141,
	"item_name": "逐日之弓",
	"item_type": 1,
	"price": 1260,
	"total_price": 2100,
	"des1": "<p>+25%攻击速度<br>+15%暴击</p>",
	"des2": "<p>唯一被动-精准：普通攻击伤害提升35点，远程英雄使用时该效果翻倍。<br>唯一主动-逐日：增加自己150点普攻射程和20%移动速度，持续5秒，冷却时间：60秒（增加射程效果仅远程英雄生效）</p>"
}, {
	"item_id": 1125,
	"item_name": "破魔刀",
	"item_type": 1,
	"price": 1200,
	"total_price": 2000,
	"des1": "<p>+100物理攻击<br>+150法术防御</p>",
	"des2": "<p>唯一被动-破魔：获得额外的法术防御，数值等于你的物理攻击*0.5且最多增加300点</p>"
}, {
	"item_id": 1154,
	"item_name": "穿云弓",
	"item_type": 1,
	"price": 660,
	"total_price": 1100,
	"des1": "<p>+40物理攻击<br>+10%攻击速度</p>",
	"des2": "<p>唯一被动-破甲：+10%物理穿透（远程英雄使用时效果翻倍）</p>"
}, {
	"item_id": 1155,
	"item_name": "破晓",
	"item_type": 1,
	"price": 2040,
	"total_price": 3400,
	"des1": "<p>+50物理攻击<br>+35%攻击速度<br>+10%暴击率</p>",
	"des2": "<p>唯一被动-破甲：+20%物理穿透（远程英雄使用时效果翻倍）<br>唯一被动：普通攻击伤害提升50点（远程英雄使用时效果翻倍）</p>"
}, {
	"item_id": 1211,
	"item_name": "咒术典籍",
	"item_type": 2,
	"price": 180,
	"total_price": 300,
	"des1": "<p>+40法术攻击</p> "
}, {
	"item_id": 1212,
	"item_name": "蓝宝石",
	"item_type": 2,
	"price": 132,
	"total_price": 220,
	"des1": "<p>+300最大法力</p>"
}, {
	"item_id": 1213,
	"item_name": "炼金护符",
	"item_type": 2,
	"price": 72,
	"total_price": 120,
	"des1": "<p>+10 每5秒回蓝</p> "
}, {
	"item_id": 1214,
	"item_name": "圣者法典",
	"item_type": 2,
	"price": 300,
	"total_price": 500,
	"des1": "<p>+20法术攻击<br>+8%冷却缩减</p> "
}, {
	"item_id": 1216,
	"item_name": "元素杖",
	"item_type": 2,
	"price": 324,
	"total_price": 540,
	"des1": "<p>+80法术攻击</p> "
}, {
	"item_id": 1221,
	"item_name": "大棒",
	"item_type": 2,
	"price": 492,
	"total_price": 820,
	"des1": "<p>+120法术攻击</p>"
}, {
	"item_id": 1229,
	"item_name": "破碎圣杯",
	"item_type": 2,
	"price": 480,
	"total_price": 800,
	"des1": "<p>+80法术攻击<br>+5%冷却缩减<br>+20 每5秒回蓝</p>"
}, {
	"item_id": 1223,
	"item_name": "光辉之剑",
	"item_type": 2,
	"price": 438,
	"total_price": 730,
	"des1": "<p>+400最大生命<br>+400最大法力</p> ",
	"des2": "<p>唯一被动-强击：使用技能后，5秒内的下一次普通攻击附加50%物理攻击（+30%法术加成）的法术伤害，这个效果有3秒的冷却时间</p>"
}, {
	"item_id": 1225,
	"item_name": "进化水晶",
	"item_type": 2,
	"price": 432,
	"total_price": 720,
	"des1": "<p>+400最大法力<br>+400最大生命</p>",
	"des2": "<p>唯一被动-英勇奖赏：升级后在3秒内回复20%生命与法力值</p>"
}, {
	"item_id": 1222,
	"item_name": "血族之书",
	"item_type": 2,
	"price": 744,
	"total_price": 1240,
	"des1": "<p>+75法术攻击<br>+10%冷却缩减</p>",
	"des2": "<p>唯一被动-嗜血：增加20%法术吸血</p>"
}, {
	"item_id": 1227,
	"item_name": "炽热支配者",
	"item_type": 2,
	"price": 1170,
	"total_price": 1950,
	"des1": "<p>+180法术攻击<br>+600最大法力<br>+15 每5秒回蓝</p>",
	"des2": "<p>唯一被动-法力护盾：血量低于30%时立即解除自身控制，同时获得一个吸收（500+1.5*法术攻击）伤害的护盾，护盾持续期间提升30%移动速度，持续4秒，冷却时间：90秒</p>"
}, {
	"item_id": 12211,
	"item_name": "梦魇之牙",
	"item_type": 2,
	"price": 1230,
	"total_price": 2050,
	"des1": "<p>+240法术攻击<br>+5%移速<br>+5%冷却缩减</p>",
	"des2": "<p>唯一被动-重伤：造成伤害使得目标的生命恢复效果减少50%，持续1.5秒（如果该伤害由普攻触发，则持续时间延长至3秒）</p>"
}, {
	"item_id": 1231,
	"item_name": "虚无法杖",
	"item_type": 2,
	"price": 1266,
	"total_price": 2110,
	"des1": "<p>+240法术攻击<br>+300最大生命值</p>",
	"des2": "<p>唯一被动：+45%法术穿透</p>"
}, {
	"item_id": 1232,
	"item_name": "博学者之怒",
	"item_type": 2,
	"price": 1380,
	"total_price": 2300,
	"des1": "<p>+240法术攻击</p>",
	"des2": "<p>唯一被动-毁灭：法术攻击提升35%</p>"
}, {
	"item_id": 1239,
	"item_name": "辉月",
	"item_type": 2,
	"price": 1194,
	"total_price": 1990,
	"des1": "<p>+160法术攻击<br>+10%冷却缩减</p>",
	"des2": "<p>唯一主动-月之守护：90秒CD，免疫所有效果，不能移动、攻击和使用技能，持续1.5秒</p>"
}, {
	"item_id": 1233,
	"item_name": "回响之杖",
	"item_type": 2,
	"price": 1260,
	"total_price": 2100,
	"des1": "<p>+240法术攻击 <br>+7%移速 </p>",
	"des2": "<p>唯一被动-回响：技能命中会触发小范围爆炸造成100（+40%法术加成）法术伤害，这个效果有5秒CD</p>"
}, {
	"item_id": 1234,
	"item_name": "凝冰之息",
	"item_type": 2,
	"price": 1260,
	"total_price": 2100,
	"des1": "<p>+200法术攻击 <br>+1000最大生命</p>",
	"des2": "<p>被动-凝冰：英雄技能造成伤害会附带20%的减速效果，持续2秒</p>"
}, {
	"item_id": 1235,
	"item_name": "痛苦面具",
	"item_type": 2,
	"price": 1224,
	"total_price": 2040,
	"des1": "<p>+120法术攻击<br>+5%冷却缩减<br>+800最大生命</p>",
	"des2": "<p>被动-折磨：技能命中敌人时会每0.4秒造成当前生命值3%的法术伤害，持续2秒，对野怪每次最多造成200点伤害，冷却时间：2秒"
}, {
	"item_id": 1236,
	"item_name": "巫术法杖",
	"item_type": 2,
	"price": 1272,
	"total_price": 2120,
	"des1": "<p>+140法术攻击<br>+400最大生命<br>+400最大法力<br>+8%移速</p>",
	"des2": "<p>唯一被动-强击：使用技能后，5秒内下一次普通攻击附加30%物理攻击（+80%法术加成）的法术伤害，这个效果有3秒冷却时间</p>"
}, {
	"item_id": 1226,
	"item_name": "圣杯",
	"item_type": 2,
	"price": 1080,
	"total_price": 1800,
	"des1": "<p>+180法术攻击<br>+15%冷却缩减<br>+25每5秒回蓝</p>",
	"des2": "<p>唯一被动-法力源泉：每秒回复1%法力值，如果法力值已满，每秒回复1%生命值</p>"
}, {
	"item_id": 1237,
	"item_name": "时之预言",
	"item_type": 2,
	"price": 1254,
	"total_price": 2090,
	"des1": "<p>+140法术攻击<br>+500最大法力<br>+800最大生命</p>",
	"des2": "<p>唯一被动-英勇奖赏：升级后在3秒内回复20%生命值与法力值<br>唯一被动-守护： 获得额外的物理和法术防御，数值等于你的法术攻击*0.4，且最多不超过250点。</p>"
}, {
	"item_id": 1238,
	"item_name": "贤者之书",
	"item_type": 2,
	"price": 1794,
	"total_price": 2990,
	"des1": "<p>+460法术攻击</p>",
	"des2": "<p>唯一被动-刻印：增加1600点生命</p>"
}, {
	"item_id": 1240,
	"item_name": "噬神之书",
	"item_type": 2,
	"price": 1254,
	"total_price": 2090,
	"des1": "<p>+180法术攻击<br>+10%冷却缩减<br>+800最大生命</p>",
	"des2": "<p>唯一被动-嗜血：增加25%法术吸血</p>"
}, {
	"item_id": 1311,
	"item_name": "红玛瑙",
	"item_type": 3,
	"price": 180,
	"total_price": 300,
	"des1": "<p>+300最大生命</p>"
}, {
	"item_id": 1312,
	"item_name": "布甲",
	"item_type": 3,
	"price": 132,
	"total_price": 220,
	"des1": "<p>+90物理防御</p>"
}, {
	"item_id": 1313,
	"item_name": "抗魔披风",
	"item_type": 3,
	"price": 132,
	"total_price": 220,
	"des1": "<p>+90法术防御</p>"
}, {
	"item_id": 1314,
	"item_name": "提神水晶",
	"item_type": 3,
	"price": 84,
	"total_price": 140,
	"des1": "<p>+30 每5秒回复</p>"
}, {
	"item_id": 1321,
	"item_name": "力量腰带",
	"item_type": 3,
	"price": 540,
	"total_price": 900,
	"des1": "<p>+1000最大生命</p>"
}, {
	"item_id": 1322,
	"item_name": "熔炼之心",
	"item_type": 3,
	"price": 540,
	"total_price": 900,
	"des1": "<p>+700最大生命</p>",
	"des2": "<p>唯一被动-业炎：每秒对身边300范围内的敌人造成1%最大生命的法术伤害，对小兵额外造成100%伤害</p>"
}, {
	"item_id": 1323,
	"item_name": "神隐斗篷",
	"item_type": 3,
	"price": 612,
	"total_price": 1020,
	"des1": "<p>+120法术防御<br>+700最大生命<br>+50每5秒回血</p>"
}, {
	"item_id": 1324,
	"item_name": "雪山圆盾",
	"item_type": 3,
	"price": 540,
	"total_price": 900,
	"des1": "<p>+10%减CD<br>+400最大法力<br>+110物理防御</p>"
}, {
	"item_id": 1325,
	"item_name": "守护者之铠",
	"item_type": 3,
	"price": 438,
	"total_price": 730,
	"des1": "<p>+210物理防御</p>",
	"des2": "<p>唯一被动-寒铁：受到攻击会减少攻击者15%攻击速度，持续3秒</p>"
}, {
	"item_id": 1724,
	"item_name": "近卫荣耀",
	"item_type": 7,
	"price": 1206,
	"total_price": 2010,
	"des1": "<p>+10%移动速度<br>+1000最大生命</p>",
	"des2": "<p>唯一被动-解放：拔除其他装备中的奉献效果，周围小兵和野怪死亡后你可以与队友平分收益。<br>唯一被动-守护光环：提升周围800范围友军(54+英雄等级*6）点物理防御和法术防御<br>多个辅助装光环无法同时生效<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币。</p>"
}, {
	"item_id": 1723,
	"item_name": "奔狼纹章",
	"item_type": 7,
	"price": 1254,
	"total_price": 2090,
	"des1": "<p>+10%移动速度<br>+1000最大生命</p>",
	"des2": "<p>唯一被动-解放：拔除其他装备中的奉献效果，周围小兵和野怪死亡后你可以与队友平分收益。<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币。<br>唯一主动-奔腾号令：给自己和周围友军增加移速，3秒内会递增35%+15%*英雄等级的移速，一共持续5秒，受到英雄攻击或敌方英雄攻击则效果消失，冷却时间：120秒。所有同CD辅助装备的主动技能均为全队共享冷却时间</p>"
}, {
	"item_id": 1327,
	"item_name": "反伤刺甲",
	"item_type": 3,
	"price": 1104,
	"total_price": 1910,
	"des1": "<p>+30物理攻击<br>+400物理防御</p>",
	"des2": "<p>唯一被动-荆棘：受到物理伤害时，会将伤害量的25%以法术伤害的形式回敬给对方。自身每20点物理防御属性提升1%该伤害（最多+100%）。攻击者距离越远，这个伤害越低，最多在距离800时衰减至70%。<br>唯一被动-反刺：2秒内受到物理伤害超过20%最大生命时，在自身周围发出刺击，对附近目标造成10%最大生命的法术伤害。该效果的冷却时间：3秒。</p>"
}, {
	"item_id": 1328,
	"item_name": "血魔之怒",
	"item_type": 3,
	"price": 1272,
	"total_price": 2120,
	"des1": "<p>+40物理攻击<br>+1000最大生命</p>",
	"des2": "<p>唯一主动-血怒：逐渐扣除30%当前生命值，逐渐获得40%最大生命值的护盾，并增加80点物理攻击，持续4秒。<br>冷却时间：60秒</p>"
}, {
	"item_id": 1331,
	"item_name": "红莲斗篷",
	"item_type": 3,
	"price": 1098,
	"total_price": 1830,
	"des1": "<p>+240物理防御<br>+1000最大生命</p>",
	"des2": "<p>唯一被动-业炎：每秒对身边300范围内的敌人造成使用者最大生命值2%的法术伤害，对小兵额外造成100%伤害</p>"
}, {
	"item_id": 1332,
	"item_name": "霸者重装",
	"item_type": 3,
	"price": 1242,
	"total_price": 2070,
	"des1": "<p>+2000最大生命<br>+100每5秒回血</p>",
	"des2": "<p>唯一被动-复苏：脱离战斗后每秒回复3%最大生命值</p>"
}, {
	"item_id": 1341,
	"item_name": "冰霜冲击",
	"item_type": 3,
	"price": 1260,
	"total_price": 2100,
	"des1": "<p>+240物理防御<br>+1000最大生命</p>",
	"des2": "<p>主动-冲击：减少600范围内敌人15%移速和攻速，1.5秒后对400范围内敌人造成0.5秒晕眩，若目标移速或攻速受损(低于初始值)，则分别追加0.25秒晕眩。冷却时间：90秒</p>"
}, {
	"item_id": 1333,
	"item_name": "不祥征兆",
	"item_type": 3,
	"price": 1308,
	"total_price": 2180,
	"des1": "<p>+270物理防御<br>+1200最大生命</p>",
	"des2": "<p>唯一被动-寒铁：受到攻击会减少攻击者30%攻击速度与15%移动速度，持续3秒</p>"
}, {
	"item_id": 1334,
	"item_name": "不死鸟之眼",
	"item_type": 3,
	"price": 1260,
	"total_price": 2100,
	"des1": "<p>+100每5秒回血<br>+240法术防御<br>+1200最大生命</p>",
	"des2": "<p>唯一被动-血统：每损失10%生命值，受到的所有治疗效果会额外增加6%。</p>"
}, {
	"item_id": 1335,
	"item_name": "魔女斗篷",
	"item_type": 3,
	"price": 1272,
	"total_price": 2080,
	"des1": "<p>+200法术防御<br>+1000最大生命<br>+100每5秒回血</p>",
	"des2": "<p>唯一被动-迷雾：脱战后立即获得一个吸收（100+英雄等级*100）点法术伤害的护盾<br>被动-御魔：获得8~120点法术防御</p>"
}, {
	"item_id": 1336,
	"item_name": "极寒风暴",
	"item_type": 3,
	"price": 1260,
	"total_price": 2100,
	"des1": "<p>+20%冷却缩减<br>+500最大法力<br>+360物理防御</p>",
	"des2": "<p>唯一被动-冰心：受到单次伤害超过当前生命值10%时触发寒冰冲击，对周围敌人造成（50+英雄等级*10）点法术伤害并降低其30%攻击和移动速度，持续2秒，这个效果有2秒内置CD</p>"
}, {
	"item_id": 13310,
	"item_name": "冰痕之握",
	"item_type": 3,
	"price": 1212,
	"total_price": 2070,
	"des1": "<p>+600最大生命<br>+500最大法力<br>+10%冷却缩减<br>+240物理防御<br>+30物理攻击</p>",
	"des2": "<p>唯一被动-强击：使用技能后，5秒内的下一次普攻造成范围30%减速（远程英雄使用时减速效果衰减为10%）与（140+英雄等级*20）点物理伤害，这个效果有1.2秒的冷却时间</p>"
}, {
	"item_id": 1337,
	"item_name": "贤者的庇护",
	"item_type": 3,
	"price": 1248,
	"total_price": 2080,
	"des1": "<p>+140物理防御<br>+140法术防御</p>",
	"des2": "<p>唯一被动-复生：死亡后2秒原地复活，并获得（2000+英雄等级*100）点生命值，冷却时间：150秒。这个效果每局游戏只能触发2次</p>"
}, {
	"item_id": 1338,
	"item_name": "暴烈之甲",
	"item_type": 3,
	"price": 1170,
	"total_price": 1950,
	"des1": "<p>+220物理防御<br>+900最大生命<br>+5%移速<br>+30物理攻击</p>",
	"des2": "<p>唯一被动-无畏：每次受到伤害后，自身造成的所有伤害提升2%并增加2%的移速，这个效果最高可以叠加5层，最多提升10%的伤害输出和10%移速，持续3秒</p>"
}, {
	"item_id": 1411,
	"item_name": "神速之靴",
	"item_type": 4,
	"price": 150,
	"total_price": 250,
	"des1": "<p>唯一被动：+30移动速度</p>",
	"des2": "<p>所有鞋类装备的移速加成效果不叠加</p>"
}, {
	"item_id": 1421,
	"item_name": "影忍之足",
	"item_type": 4,
	"price": 426,
	"total_price": 710,
	"des1": "<p>+110物理防御</p>",
	"des2": "<p>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）<br>唯一被动：减少15%受到普通攻击的伤害</p>"
}, {
	"item_id": 1422,
	"item_name": "抵抗之靴",
	"item_type": 4,
	"price": 426,
	"total_price": 710,
	"des1": "<p>+110法术防御</p>",
	"des2": "<p>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）<br>唯一被动：+35%韧性</p>"
}, {
	"item_id": 1423,
	"item_name": "冷静之靴",
	"item_type": 4,
	"price": 426,
	"total_price": 710,
	"des1": "<p>+15%减CD</p>",
	"des2": "<p>唯一被动-静谧：所有英雄技能的冷却恢复速度加快3%~10%（随英雄等级成长）这个效果对剩余冷却时间小于5秒的技能不会生效。<br>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）</p>"
}, {
	"item_id": 1424,
	"item_name": "秘法之靴",
	"item_type": 4,
	"price": 426,
	"total_price": 710,
    "des1": "<p>+25 每5秒回蓝</p>",
	"des2": "<p>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）<br>唯一被动-法术精通：获得(45+英雄等级*5)点法术穿透</p>"
}, {
	"item_id": 1425,
	"item_name": "急速战靴",
	"item_type": 4,
	"price": 426,
	"total_price": 710,
	"des1": "<p>+25%攻速</p>",
	"des2": "<p>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）</p>"
}, {
	"item_id": 1426,
	"item_name": "疾步之靴",
	"item_type": 4,
	"price": 318,
	"total_price": 530,
	"des1": "<p>唯一被动-神行：脱离战斗后增加60移动速度<br>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）</p>"
}, {
	"item_id": 1511,
	"item_name": "狩猎宽刃",
	"item_type": 5,
	"price": 150,
	"total_price": 250,
	"des1": "<p>（打野刀升级后将惩戒技能替换为寒冰惩戒：寒冰惩戒可对英雄使用，造成伤害和减速效果）<br>必须携带惩击才可够买</p>",
	"des2": "<p>唯一被动-打野：增加50%对野怪的伤害，自己击杀或500范围内友方击杀野怪时，自己会额外获得20%经验</p>"
}, {
	"item_id": 1521,
	"item_name": "游击弯刀",
	"item_type": 5,
	"price": 450,
	"total_price": 750,
	"des1": "<p>必须携带惩击才可够买，获得寒冰惩击效果</p>",
	"des2": "<p>唯一被动-打野：增加60%对野怪的伤害，自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币<br>唯一被动-奖赏：自己击杀或500范围内友方击杀野怪增加自身6点法术攻击，最多叠加20层<br>被动-回响：技能命中后，之后在地面留下2秒范围持续爆炸，共造成(200+10%法术攻击)法术伤害，该效果冷却时间为5秒</p>"
}, {
	"item_id": 1522,
	"item_name": "巡守利斧",
	"item_type": 5,
	"price": 450,
	"total_price": 750,
	"des1": "<p>唯一被动-燎火：每秒对范围内的野怪和小兵造成自身1%最大生命值的法术伤害（对英雄不生效）,对野怪额外造成100%伤害<br>必须携带惩击才可够买，获得寒冰惩击效果</p>",
	"des2": "<p>唯一被动-打野：增加60%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币<br>唯一被动-奖赏：自己击杀或500范围内友方击杀野怪增加自身40点最大生命，最多叠加15层</p>"
}, {
	"item_id": 1523,
	"item_name": "追击刀锋",
	"item_type": 5,
	"price": 450,
	"total_price": 750,
	"des1": "<p>必须携带惩击才可够买，获得寒冰惩击效果</p>",
	"des2": "<p>唯一被动-打野：增加60%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币<br>唯一被动-奖赏：自己击杀或500范围内友方击杀野怪增加自身2点物理攻击和0.5%冷却缩减，最多叠加20层</p>"
}, {
	"item_id": 1531,
	"item_name": "符文大剑",
	"item_type": 5,
	"price": 1296,
	"total_price": 2160,
	"des1": "<p>+80法术攻击<br>+5%冷却缩减<br>+7%移速</p>",
	"des2": "<p>唯一被动-强击：使用技能后，5秒内的下一次普通攻击附加50+0.5*法术攻击的法术伤害，冷却时间：2秒<br>唯一被动-打野：增加60%对野怪的伤害，自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币<br>唯一被动-奖赏：自己击杀或500范围内友方击杀野怪增加自身6点法术攻击，最多叠加30层<br>被动-回响：技能命中后触发范围爆炸，造成(150+25%法术攻击)法术伤害，之后在地面留下2秒范围持续爆炸，共造成(200+10%法术攻击)法术伤害，该效果冷却时间为5秒</p>"
}, {
	"item_id": 1532,
	"item_name": "巨人之握",
	"item_type": 5,
	"price": 1080,
	"total_price": 1800,
	"des1": "<p>+600最大生命</p>",
	"des2": "<p>唯一被动-燎火：每秒对身边小范围的敌人造成自身2%最大生命值的法术伤害,对野怪额外造成100%伤害<br>唯一被动-打野：增加60%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币<br>唯一被动-奖赏：自己击杀或500范围内友方击杀野怪增加自身50点最大生命，最多叠加25层</p>"
}, {
	"item_id": 1533,
	"item_name": "贪婪之噬",
	"item_type": 5,
	"price": 1296,
	"total_price": 2160,
	"des1": "<p>+60物理攻击<br>+8%移速</p>",
	"des2": "<p>唯一被动-打野：增加60%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币<br>唯一被动-奖赏：自己击杀或500范围内友方击杀野怪增加自身2点物理攻击和0.5%冷却缩减，最多叠加30层<br>被动-锋利：增加30~100点物理穿透</p>"
}, {
	"item_id": 1714,
	"item_name": "鼓舞之盾",
	"item_type": 7,
	"price": 726,
	"total_price": 1210,
	"des1": "<p>+5%移动速度<br>+500最大生命</p>",
	"des2": "<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验。<br>唯一被动-守护光环：提升周围800范围友军(36+英雄等级*4）点物理防御和法术防御<br>多个辅助装光环无法同时生效<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币。</p>"
}, {
	"item_id": 1713,
	"item_name": "风灵纹章",
	"item_type": 7,
	"price": 708,
	"total_price": 1180,
	"des1": "<p>+5%移动速度<br>+500最大生命</p>",
	"des2": "<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验。<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币。<br>唯一主动-奔腾号令：给自己和周围友军增加移速，3秒内会递增21%+9%*英雄等级的移速，一共持续5秒，受到英雄攻击或对敌方英雄攻击则消失，冷却时间：120秒。<br>所有同CD辅助装的主动技能均为全队共享冷却时间</p>"
}, {
	"item_id": 1722,
	"item_name": "救赎之翼",
	"item_type": 7,
	"price": 1080,
	"total_price": 1800,
	"des1": "<p>+10%移动速度<br>+1000最大生命</p>",
	"des2": "<p>唯一被动-解放：拔除其他装备中的奉献效果，周围小兵和野怪死亡后你可以与队友平分收益。<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币<br>唯一主动-救援：立即为周围友方英雄（包括自己）提供一个吸收（ 600+60*英雄等级）伤害的护盾，持续3秒，冷却时间：60秒。所有同CD辅助装备的主动技能均为全队共享冷却时间</p>"
}, {
	"item_id": 1712,
	"item_name": "风之轻语",
	"item_type": 7,
	"price": 606,
	"total_price": 1010,
	"des1": "<p>+5%移速<br>+500最大生命</p>",
	"des2": "<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验。<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币。<br>唯一主动-救援：立即为周围友方英雄（包括自己）提供一个吸收（380+38*英雄等级）伤害的护盾，持续3秒，冷却时间：60秒。所有同CD辅助装的主动技能均为全队共享冷却时间</p>"
}, {
	"item_id": 1721,
	"item_name": "极影",
	"item_type": 7,
	"price": 1146,
	"total_price": 1910,
	"des1": "<p>+10%移动速度<br>+1000最大生命</p>",
	"des2": "<p>唯一被动-解放：拔除其他装备中的奉献效果，周围小兵和野怪死亡后你可以与队友平分收益。<br>唯一被动-迅捷光环：提升周围800范围友军30%攻击速度和10%冷却缩减。<br>多个辅助装光环无法同时生效<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币。</p>"
},{
	"item_id": 1725,
	"item_name": "星泉",
	"item_type": 7,
	"price": 1128,
	"total_price": 1880,
	"des1": "<p>+1000最大生命<br>+10%移动速度</p>",
	"des2": "<p>唯一被动-解放：拔除其他装备中的奉献效果，周围小兵和野怪死亡后你可以与队友平分收益。<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币。<br>唯一主动-星芒：立即与周围血量最低的友方英雄建立链接，分摊其50%所受伤害。链接在超过一定范围后会断开，持续2秒，冷却时间：60秒。所有同CD辅助装备的主动技能均为全队共享冷却时间</p>"
},{
	"item_id": 1726,
	"item_name": "星之佩饰",
	"item_type": 7,
	"price": 600,
	"total_price": 1000,
	"des1": "<p>+500最大生命<br>+5%移动速度</p>",
	"des2": "<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验。<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币。<br>唯一主动-星芒：立即与周围血量最低的友方英雄建立链接，分摊其50%所受伤害。链接在超过一定范围后会断开，持续2秒，冷却时间：60秒。所有同CD辅助装备的主动技能均为全队共享冷却时间</p>"
},{
	"item_id": 1711,
	"item_name": "凤鸣指环",
	"item_type": 7,
	"price": 642,
	"total_price": 1070,
	"des1": "<p>+5%移动速度<br>+500最大生命</p>",
	"des2": "<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验。<br>唯一被动-迅捷光环：提升周围800范围友军20%攻击速度和6%冷却缩减。<br>多个辅助装光环无法同时生效<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币。</p>"
}, {
	"item_id": 1701,
	"item_name": "学识宝石",
	"item_type": 7,
	"price": 180,
	"total_price": 300,
	"des1": "<p>+5%移动速度</p>",
	"des2": "<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验。<br>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币。</p>"
}, {
	"item_id": 1727,
	"item_name": "日暮之流",
	"item_type": 2,
	"price": 1272,
	"total_price": 2120,
	"des1": "<p>+200法术攻击<br>+300最大生命<br>+10%冷却缩减</p>",
	"des2": "<p>被动-日暮时分：对英雄造成伤害会获得14~28点法术穿透，持续4秒，该效果可叠加10层。</p>"
}, {
	"item_id": 1728,
	"item_name": "金色圣剑",
	"item_type": 2,
	"price": 1242,
	"total_price": 2070,
	"des1": "<p>+140法术攻击<br>+20%攻击速度<br>+5%移动速度</p>",
	"des2": "<p>唯一被动-圣剑：普攻命中敌人会获得10%攻速，持续5秒，最多可叠加两层；叠满后，普攻会额外附带(0.3*法术攻击)点法术伤害，该伤害冷却时间：0.2秒。<br>唯一被动-精准：普通攻击伤害提升35点，远程英雄使用时该效果翻倍。</p>"
},{
	"item_id": 1512,
	"item_name": "弃鳞短刃",
	"item_type": 5,
	"price": 150,
	"total_price": 250,
	"des1": "<p>必须携带惩击才可购买</p>",
	"des2": "<p>唯一被动-狩猎：击杀野怪提升20%经验。普攻或技能命中野怪时附带灼烧，每0.5秒造成70~490点真实伤害，持续2秒。<br>唯一被动-游击：当你周围有队友时，小兵死亡后队友会获得小兵提供的全额收益，你会获得50%金币和经验。多个【游击】效果共存时，只有经济最低者的【游击】生效。<br>被动-奖赏：普攻/技能命中敌方英雄后，每0.5秒造成一次真实伤害，持续2秒。伤害量由奖赏层数决定，每层可提升1点真实伤害，击败/助攻可分别获得2层/1层奖赏效果，效果最多叠加20层。</p>"
},{
	"item_id": 1524,
	"item_name": "龙鳞利剑",
	"item_type": 5,
	"price": 450,
	"total_price": 750,
	"des1": "<p>+8%移动速度</p>",
	"des2": "<p>被动-狩猎：击杀野怪提升30%经验，获得20%金币。对野怪造成伤害时附带2秒灼烧效果。每0.5秒对野怪造成80~500点真实伤害。<br>被动-奖赏：普攻/技能命中敌方英雄后，每0.5秒造成一次真实伤害，持续2秒。伤害量由奖赏层数决定，每层可提升2点真实伤害，击败/助攻可分别获得2层/1层奖赏效果，效果最多叠加20层。<br>唯一被动-游击：当你周围有队友时，小兵死亡后队友会获得小兵提供的全额收益，你会获得50%金币和经验。多个【游击】效果共存时，只有经济最低者的【游击】生效。</p>"
},{
	"item_id": 1534,
	"item_name": "浴火之怒",
	"item_type": 5,
	"price": 1248,
	"total_price": 2080,
	"des1": "<p>+120物理防御<br>+120法术防御<br>+10%移动速度</p>",
	"des2": "<p>被动-狩猎：击杀野怪提升30%经验，获得20%金币。对野怪造成伤害时附带2秒灼烧效果。每0.5秒对野怪造成80~640点真实伤害。<br>唯一被动-共赢：拔除【游击】【赏金】效果。<br>被动-奖赏：普攻/技能命中敌方英雄后，每0.5秒造成一次真实伤害，持续2秒。伤害量由奖赏层数决定，每层可提升5点真实伤害，击败/助攻可分别获得2层/1层奖赏效果，效果最多叠加20层。</p>"
},{
	"item_id": 1345,
	"item_name": "荆棘护手",
	"item_type": 3,
	"price": 426,
	"total_price": 710,
	"des1": "<p>+160物理防御<br>+30物理攻击</p>"
}, {
	"item_id": 1347,
	"item_name": "永夜守护",
	"item_type": 3,
	"price": 1266,
	"total_price": 2110,
	"des1": "<p>+360法术防御<br>+1000最大生命</p>",
	"des2": "<p>被动-守护：在3秒内受到超过30%最大生命的伤害时，会在接下来的3秒内累计回复320(+8%最大生命)点生命，冷却时间：7秒</p>"
}, {
	"item_id": 1346,
	"item_name": "暗夜小甲",
	"item_type": 3,
	"price": 426,
	"total_price": 710,
	"des1": "<p>+180法术防御</p>",
	"des2": "<p>唯一被动-守护：在3秒内受到超过40%最大生命的伤害时，会在接下来的3秒内累计回复60(+6%最大生命)点生命，冷却时间：7秒</p>"

}, {
	"item_id": 1349,
	"item_name": "原初遗珠",
	"item_type": 3,
	"price": 1248,
	"total_price": 2080,
	"des1": "<p>+140物理防御<br>+140法术防御</p>",
	"des2": "<p>获取方式：当【贤者的庇护】使用两次后，会立即变成【原初遗珠】。此时商店不可再购买【贤者的庇护】，同时【原初遗珠】开放购买，买卖价格同【贤者的庇护】</p>"
}, {
	"item_id": 1350,
	"item_name": "怒魂",
	"item_type": 3,
	"price": 2520,
	"total_price": 4200,
	"des1": "<p>+40物理攻击<br>+1000最大生命</p>",
	"des2": "<p>主动-血怒：开启后每0.5秒扣除自身4%当前生命，并对500范围内的敌人造成(4%最大生命)真实伤害，开启时间最多持续3秒。结束后根据开启时长每0.5秒返还(8%最大生命)护盾，并增加80点物理攻击，持续4秒。</p>"
}, {
	"item_id": 1351,
	"item_name": "凛冬",
	"item_type": 3,
	"price": 2508,
	"total_price": 4180,
	"des1": "<p>+240物理防御<br>+1000最大生命</p>",
	"des2": "<p>主动-冲击：朝敌人移动时增加50%移速，减少600范围内敌人30%移速和攻速，1.5秒后对400范围内敌人造成0.5秒冰冻，若目标移速或攻速受损(低于初始值)，则分别追加0.5秒冰冻。冷却时间：90秒</p>"
}, {
	"item_id": 1156,
	"item_name": "日渊",
	"item_type": 1,
	"price": 2508,
	"total_price": 4180,
	"des1": "<p>+25%攻击速度<br>+15%暴击率</p>",
	"des2": "<p>被动-精准：普攻伤害提升35点，远程英雄使用时该效果翻倍<br>主动-逐日：开启后增加自己150点普攻射程和30%移速，期间普攻会向目标附近的1个目标造成30%额外伤害，持续5秒，冷却时间：60秒</p>"
}, {
	"item_id": 1157,
	"item_name": "天穹",
	"item_type": 1,
	"price": 2520,
	"total_price": 4200,
	"des1": "<p>+100物理攻击<br>+10%冷却缩减<br>+500最大生命</p>",
	"des2": "<p>主动-驱散：解除所有控制，自身获得30%减伤，增加30%移速并无视地形阻挡，持续3秒。如果期间击杀敌方英雄，则会刷新效果持续时间。冷却时间：90秒</p>"
}, {
	"item_id": 1242,
	"item_name": "月神",
	"item_type": 2,
	"price": 2442,
	"total_price": 4070,
	"des1": "<p>+160法术攻击<br>+10%冷却缩减</p>",
	"des2": "<p>主动-月之守护：开启后自身免疫所有效果，不能移动、攻击和使用技能，持续1.5秒。随后获得2秒霸体效果和4秒25%法术吸血。冷却时间：90秒</p>"
}, {
	"item_id": 1224,
	"item_name": "魔道之石",
	"item_type": 2,
	"price": 534,
	"total_price": 890,
	"des1": "<p>+100法术攻击</p>",
	"des2": "<p>被动-法力波：技能命中后额外造成130~200点法术伤害，冷却时间2秒</p>"
}, {
	"item_id": 1243,
	"item_name": "云灵木",
	"item_type": 2,
	"price": 582,
	"total_price": 970,
	"des1": "<p>+70法术攻击<br>+300最大生命</p>",
	"des2": "<p>被动-破法：增加40点法术穿透</p>"
    }]
    const newitemLists = itemLists.map(item=>{
      // item.name = item.item_name;
      // item.icon = `http://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`
      return {
        name:item.item_name,
        icon:`http://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`
      }
    })
    await Item.deleteMany()
    await Item.insertMany(newitemLists)
    res.send(newitemLists)
  })

  router.get('/news/initfff',async(req,res)=>{
    const parent = await Category.findOne({
      name:'新闻资讯'
    })
    //添加查询条件parent是name为新闻资讯得一条数据
    const cats = await Category.find().where({
      parent:parent
    }).lean()
    const nesTitles = ["公孙离-祈雪灵祝海报重绘方案票选结果公布", "王者荣耀×吉列联名款剃须刀锋芒全场", "快手棋王争霸赛", "狄某有话说｜有辅助装我不买，我就蹭线，哎，就是玩儿~", "元芳潍坊国际风筝会“环游记”纪实", "4月23日体验服停机更新公告", "4月23日体验服S23赛季王者段位专属赛季拖尾奖励发放公告", "【王者荣耀】权限使用说明", "4月21日净化游戏环境声明及处罚公告", "4月21日外挂专项打击公告", "鸿运抽奖活动开启公告", "【入职探案】免费限时语音包-“掐指一算，这把能赢”活动公告", "春风携礼游峡谷，梦入江南烟水路", "【入职探案】免费限时语音包-“掐指一算，这把能赢”活动公告", "一元福利周活动公告", "观看全国大赛，免费抽取腾讯红魔游戏手机", "第三届王者荣耀全国大赛华南大区第一期大区决赛震撼来袭！", "“少年英雄迭代起” 第三届王者荣耀全国大赛城市海选赛长沙运达汇站落幕", "荣耀之城·再度起航  第三届王者荣耀全国大赛城市海选赛常德卡乐星球站即将开战！", "扬州（邗江）电竞文化节暨第三届王者荣耀全国大赛城市赛道扬州海选赛即将开赛"]
    const newsList = nesTitles.map(title=>{
      const randomCats = cats.slice(0).sort((a,b)=>Math.random()-0.5)
      return {
        categories:randomCats.slice(0,2),
        title:title
      }
    })
    await Article.deleteMany()
    await Article.insertMany(newsList)
    res.send(newsList)
  })
  //获取新闻接口
  //populate是连接查询
  router.get('/news/list',async(req,res)=>{
    // const parent = await Category.findOne({
    //   name:'新闻资讯'
    // }).populate({
    //   path:'children',
    //   populate:{
    //     path:'newsList'
    //   }
    // }).lean()
    const parent = await Category.findOne({
      name:'新闻资讯'
    })
    const cats = await Category.aggregate([
      {$match:{parent:parent._id}},
      {
        $lookup:{
          from:'articles',
          localField:'_id',
          foreignField:'categories',
          as:'newsList'
        }
      },
      {
        $addFields:{
          newsList:{$slice:['$newsList',5]}
        }
      }
    ])
    const subCats = cats.map(v=>v._id)
    cats.unshift({
      name:'热门',
      newsList:await Article.find().where({
        categories:{$in:subCats}
      }).populate('categories').limit(5).lean()
    })
    //前端在热门那里需要原本的名字需要,后面需要和title一样的名字,所以调用两个map和一个三元运算符进行判断赋值
    cats.map(cat=>{
      cat.newsList.map(news=>{
        news.categoryname=cat.name==='热门'?
        news.categories[0].name:
        cat.name;
        return news;
      })
    })
    res.send(cats)
  })
  /*
  前端爬虫
  $$('.hero-nav>li').map((li,i)=>{
    return {
        name:li.innerText,
        heroes:$$('li',$$('.hero-list')[i])
        .map(el=>{
            return {
                name:$$('h3',el)[0].innerHTML,
                avatar:$$('img',el)[0].src
            }
        })
    }
  })
  */
  //导入英雄数据
  router.get('/heroes/init32323',async(req,res)=>{
    const rawData = [
      {
          "name": "热门",
          "heroes": [
              {
                  "name": "鲁班七号",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
              },
              {
                  "name": "亚瑟",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
              },
              {
                  "name": "安琪拉",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
              },
              {
                  "name": "后羿",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
              },
              {
                  "name": "妲己",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"
              },
              {
                  "name": "吕布",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"
              },
              {
                  "name": "孙悟空",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
              },
              {
                  "name": "瑶",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg"
              },
              {
                  "name": "虞姬",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"
              },
              {
                  "name": "铠",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
              }
          ]
      },
      {
          "name": "战士",
          "heroes": [
              {
                  "name": "赵云",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"
              },
              {
                  "name": "墨子",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"
              },
              {
                  "name": "钟无艳",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"
              },
              {
                  "name": "吕布",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"
              },
              {
                  "name": "夏侯惇",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"
              },
              {
                  "name": "曹操",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg"
              },
              {
                  "name": "典韦",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg"
              },
              {
                  "name": "宫本武藏",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg"
              },
              {
                  "name": "达摩",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"
              },
              {
                  "name": "老夫子",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg"
              },
              {
                  "name": "关羽",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg"
              },
              {
                  "name": "程咬金",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
              },
              {
                  "name": "露娜",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
              },
              {
                  "name": "花木兰",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"
              },
              {
                  "name": "橘右京",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"
              },
              {
                  "name": "亚瑟",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
              },
              {
                  "name": "孙悟空",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
              },
              {
                  "name": "刘备",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg"
              },
              {
                  "name": "杨戬",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg"
              },
              {
                  "name": "雅典娜",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg"
              },
              {
                  "name": "哪吒",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg"
              },
              {
                  "name": "铠",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
              },
              {
                  "name": "苏烈",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"
              },
              {
                  "name": "梦奇",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"
              },
              {
                  "name": "裴擒虎",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"
              },
              {
                  "name": "狂铁",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg"
              },
              {
                  "name": "孙策",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"
              },
              {
                  "name": "李信",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg"
              },
              {
                  "name": "盘古",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg"
              },
              {
                  "name": "云中君",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"
              },
              {
                  "name": "曜",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg"
              },
              {
                  "name": "马超",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"
              },
              {
                  "name": "蒙恬",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg"
              },
              {
                  "name": "夏洛特",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg"
              },
              {
                  "name": "司空震",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg"
              }
          ]
      },
      {
          "name": "法师",
          "heroes": [
              {
                  "name": "小乔",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg"
              },
              {
                  "name": "墨子",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"
              },
              {
                  "name": "妲己",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"
              },
              {
                  "name": "嬴政",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg"
              },
              {
                  "name": "高渐离",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg"
              },
              {
                  "name": "孙膑",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"
              },
              {
                  "name": "扁鹊",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg"
              },
              {
                  "name": "芈月",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"
              },
              {
                  "name": "周瑜",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg"
              },
              {
                  "name": "甄姬",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"
              },
              {
                  "name": "武则天",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg"
              },
              {
                  "name": "貂蝉",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"
              },
              {
                  "name": "安琪拉",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
              },
              {
                  "name": "露娜",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
              },
              {
                  "name": "姜子牙",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
              },
              {
                  "name": "王昭君",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg"
              },
              {
                  "name": "张良",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg"
              },
              {
                  "name": "不知火舞",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"
              },
              {
                  "name": "钟馗",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"
              },
              {
                  "name": "诸葛亮",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg"
              },
              {
                  "name": "干将莫邪",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg"
              },
              {
                  "name": "女娲",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg"
              },
              {
                  "name": "杨玉环",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg"
              },
              {
                  "name": "弈星",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg"
              },
              {
                  "name": "米莱狄",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg"
              },
              {
                  "name": "司马懿",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"
              },
              {
                  "name": "沈梦溪",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg"
              },
              {
                  "name": "上官婉儿",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"
              },
              {
                  "name": "嫦娥",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"
              },
              {
                  "name": "西施",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg"
              },
              {
                  "name": "司空震",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg"
              }
          ]
      },
      {
          "name": "坦克",
          "heroes": [
              {
                  "name": "廉颇",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg"
              },
              {
                  "name": "庄周",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
              },
              {
                  "name": "刘禅",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"
              },
              {
                  "name": "钟无艳",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"
              },
              {
                  "name": "白起",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg"
              },
              {
                  "name": "芈月",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"
              },
              {
                  "name": "吕布",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"
              },
              {
                  "name": "夏侯惇",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"
              },
              {
                  "name": "达摩",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"
              },
              {
                  "name": "项羽",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg"
              },
              {
                  "name": "程咬金",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
              },
              {
                  "name": "刘邦",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
              },
              {
                  "name": "亚瑟",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
              },
              {
                  "name": "牛魔",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"
              },
              {
                  "name": "张飞",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"
              },
              {
                  "name": "太乙真人",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"
              },
              {
                  "name": "东皇太一",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"
              },
              {
                  "name": "铠",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
              },
              {
                  "name": "苏烈",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"
              },
              {
                  "name": "梦奇",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"
              },
              {
                  "name": "孙策",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"
              },
              {
                  "name": "盾山",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"
              },
              {
                  "name": "嫦娥",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"
              },
              {
                  "name": "猪八戒",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg"
              },
              {
                  "name": "蒙恬",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg"
              },
              {
                  "name": "阿古朵",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg"
              }
          ]
      },
      {
          "name": "刺客",
          "heroes": [
              {
                  "name": "赵云",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"
              },
              {
                  "name": "阿轲",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg"
              },
              {
                  "name": "李白",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg"
              },
              {
                  "name": "貂蝉",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"
              },
              {
                  "name": "韩信",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
              },
              {
                  "name": "兰陵王",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg"
              },
              {
                  "name": "花木兰",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"
              },
              {
                  "name": "不知火舞",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"
              },
              {
                  "name": "娜可露露",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg"
              },
              {
                  "name": "橘右京",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"
              },
              {
                  "name": "孙悟空",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
              },
              {
                  "name": "百里守约",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"
              },
              {
                  "name": "百里玄策",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg"
              },
              {
                  "name": "裴擒虎",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"
              },
              {
                  "name": "元歌",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg"
              },
              {
                  "name": "司马懿",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"
              },
              {
                  "name": "上官婉儿",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"
              },
              {
                  "name": "云中君",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"
              },
              {
                  "name": "马超",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"
              },
              {
                  "name": "镜",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg"
              },
              {
                  "name": "澜",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg"
              }
          ]
      },
      {
          "name": "射手",
          "heroes": [
              {
                  "name": "孙尚香",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"
              },
              {
                  "name": "鲁班七号",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
              },
              {
                  "name": "马可波罗",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg"
              },
              {
                  "name": "狄仁杰",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg"
              },
              {
                  "name": "后羿",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
              },
              {
                  "name": "李元芳",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg"
              },
              {
                  "name": "虞姬",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"
              },
              {
                  "name": "成吉思汗",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg"
              },
              {
                  "name": "黄忠",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg"
              },
              {
                  "name": "百里守约",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"
              },
              {
                  "name": "公孙离",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg"
              },
              {
                  "name": "伽罗",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg"
              },
              {
                  "name": "蒙犽",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg"
              },
              {
                  "name": "艾琳",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg"
              }
          ]
      },
      {
          "name": "辅助",
          "heroes": [
              {
                  "name": "庄周",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
              },
              {
                  "name": "刘禅",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"
              },
              {
                  "name": "孙膑",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"
              },
              {
                  "name": "牛魔",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"
              },
              {
                  "name": "张飞",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"
              },
              {
                  "name": "钟馗",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"
              },
              {
                  "name": "蔡文姬",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg"
              },
              {
                  "name": "太乙真人",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"
              },
              {
                  "name": "大乔",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg"
              },
              {
                  "name": "东皇太一",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"
              },
              {
                  "name": "鬼谷子",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg"
              },
              {
                  "name": "明世隐",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg"
              },
              {
                  "name": "盾山",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"
              },
              {
                  "name": "瑶",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg"
              },
              {
                  "name": "鲁班大师",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg"
              },
              {
                  "name": "阿古朵",
                  "avatar": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg"
              }
          ]
      }
    ]
    await Hero.deleteMany()
    // const newData = rawData.filter(item=>item.name!=='热门')
    for(let cat of rawData) {
      if(cat.name === '热门') {
        continue
      }
      const category = await Category.findOne({
        name:cat.name
      })
      cat.heroes = cat.heroes.map(hero=>{
        hero.categories = [category]
        return hero
      })
      await Hero.insertMany(cat.heroes)
    }
    res.send(await Hero.find())
  })
  //获取英雄数据接口
  router.get('/heroes/list',async(req,res)=>{
    const parent = await Category.findOne({
      name:'英雄列表'
    })
    const cats = await Category.aggregate([
      {$match:{parent:parent._id}},
      {
        $lookup:{
          from:'heroes',
          localField:'_id',
          foreignField:'categories',
          as:'heroesList'
        }
      },
    ])
    const subCats = cats.map(v=>v._id)
    cats.unshift({
      name:'热门',
      heroesList:await Hero.find().where({
        categories:{$in:subCats}
      }).populate('categories').limit(10).lean()
    })
    cats.map(cat=>{
      cat.heroesList.map(heroes=>{
        heroes.categoryname=cat.name==='热门'?
        heroes.categories[0].name:
        cat.name;
        return heroes;
      })
    })
    res.send(cats)
  })
  //获取文章详情
  router.get('/articles/:id',async(req,res)=>{
    const data = await Article.findById(req.params.id).lean()
    data.related = await Article.find().where({
      categories:{$in:data.categories}
    }).limit(5)
    res.send(data)
  })
  //获取英雄详情
  router.get('/heroes/:id',async(req,res)=>{
    const data = await Hero.findById(req.params.id).populate('categories sitems nitems partners.hero').lean()
    res.send(data)
  })
  app.use('/web/api',router)
}