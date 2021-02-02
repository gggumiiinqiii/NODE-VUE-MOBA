module.exports = app =>{
  const express = require('express')
  const router = express.Router()
  const Category = require('../../modules/Category')
  //创建分类
  router.post('/categories',async(req,res)=>{
    //使用schema生成一个model,req.body是前端model传过来的数据
    const model =  await Category.create(req.body)
    res.send(model)//发送给前端
  })
  //修改分类
  router.put('/categories/:id',async(req,res)=>{
    //使用schema生成一个model,req.body是前端model传过来的数据
    const model =  await Category.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)//发送给前端
  })

  //获取分类列表
  router.get('/categories',async(req,res)=>{
    //使用schema生成一个model,req.body是前端model传过来的数据
    const items =  await Category.find().limit(10)
    res.send(items)//把找出的内容发送给前端
  })
  //根据id获取姓名
  router.get('/categories/:id',async(req,res)=>{
    const model = await Category.findById(req.params.id)
    res.send(model)
  })
   app.use('/admin/api',router)
}