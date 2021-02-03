module.exports = app =>{
  const express = require('express')
  const router = express.Router({
    // 合并url参数
    mergeParams:true
  })
  // const Category = require('../../modules/Category')

  //创建
  router.post('/',async(req,res)=>{
    //使用schema生成一个model,req.body是前端model传过来的数据
    const model =  await req.Model.create(req.body)
    res.send(model)//发送给前端
  })
 
  //修改
  router.put('/:id',async(req,res)=>{
    //使用schema生成一个model,req.body是前端model传过来的数据
    const model =  await req.Model.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)//发送给前端
  })
  //删除
  router.delete('/:id',async(req,res)=>{
    await req.Model.findByIdAndDelete(req.params.id,req.body)
    res.send({
      success:true
    })//发送给前端
  })

  //获取列表
  router.get('/',async(req,res)=>{
    let queryOptions = {}
    if(req.Model.modelName === "Category") {
      queryOptions.populate = 'parent'
    }
    //使用schema生成一个model,req.body是前端model传过来的数据 ,populate是关联字段，现在前端返回的是一个parent对象
    const items =  await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)//把找出的内容发送给前端
  })
  //根据id获取姓名
  router.get('/:id',async(req,res)=>{
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  //resource是传过来的categoties之类的
  app.use('/admin/api/rest/:resource',async(req,res,next)=>{
    //首字母小写的复数改成首字母大写的单数
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../modules/${modelName}`) 
    next()
  },router)
  
  const multer = require('multer')
  // __dirname：绝对地址/当前模块的目录名:D:\BV1A4411Y7\NODE-VUE-MOBA\server\router\admin
  // '/../../uploads':D:\BV1A4411Y7\NODE-VUE-MOBA\server\uploads\a6265d859b1c2f1637619ef666b88a47  
  // 与'../../uploads'：D:\BV1A4411Y7\NODE-VUE-MOBA\server\router\uploads\6a6a26afcbc24b96550c4d082396b28b
  const upload = multer({dest:__dirname + '/../../uploads'})
  //这里可以获取到上传文件
  app.post('/admin/api/upload', upload.single('file'),async(req,res)=>{
      //生成一个file
      const file = req.file
      file.url=`http://localhost:3000/uploads/${file.filename}`
      res.send(file)
  })
}