module.exports = app =>{
  const router = require('express').Router()
  const mongoose = require('mongoose')
  // 测试添加录入数据
  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')
  router.get('/news/init',async(req,res)=>{
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
  app.use('/web/api',router)
}