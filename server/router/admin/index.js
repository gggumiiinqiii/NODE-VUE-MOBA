module.exports = app =>{
  const express = require('express')
  const jwt = require('jsonwebtoken')//获取jsonwebtoken的插件
  const AdminUser = require('../../modules/AdminUser')
  const assert = require('http-assert')//处理报错的插件
  const multer = require('multer')//处理文件上传的插件
  const router = express.Router({
    // 合并url参数
    mergeParams:true
  })
  //登录授权中间件
  const auth = require('../../middleware/auth')
  //资源名称更改中间件
  const resource = require('../../middleware/resource')
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
  //获取列表,中间键必须要有next
  router.get('/',auth(),async(req,res)=>{
    let queryOptions = {}
    if(req.Model.modelName === "Category") {
      queryOptions.populate = 'parent'
    }
    //使用schema生成一个model,req.body是前端model传过来的数据 ,populate是关联字段，现在前端返回的是一个parent对象
    const items =  await req.Model.find().setOptions(queryOptions)
    res.send(items)//把找出的内容发送给前端
  })
  //根据id获取姓名
  router.get('/:id',async(req,res)=>{
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  //resource是传过来的categoties之类的
  app.use('/admin/api/rest/:resource',auth(),resource(),router)
  // __dirname：绝对地址/当前模块的目录名:D:\BV1A4411Y7\NODE-VUE-MOBA\server\router\admin
  // '/../../uploads':D:\BV1A4411Y7\NODE-VUE-MOBA\server\uploads\a6265d859b1c2f1637619ef666b88a47  
  // 与'../../uploads'：D:\BV1A4411Y7\NODE-VUE-MOBA\server\router\uploads\6a6a26afcbc24b96550c4d082396b28b
  const upload = multer({dest:__dirname + '/../../uploads'})
  //这里可以获取到上传文件
  app.post('/admin/api/upload',auth(),upload.single('file'),async(req,res)=>{
      //生成一个file
      const file = req.file
      file.url=`http://localhost:3000/uploads/${file.filename}`
      res.send(file)
  })

  //登录路由
  app.post('/admin/api/login',async (req,res)=>{
    const {username,password} = req.body
    //1.根据用户名找用户
    const user = await AdminUser.findOne({
      username:username
    }).select(`+password`) //默认不取出这个，现在让他取出来
    assert(user,422,'用户不存在')
    // if(!user) {
    //   //422status请求格式正确，但是由于含有语义错误，无法响应。
    //   return res.status(422).send({
    //     message:'用户名不存在'
    //   })
    // }
    //2.校验密码啊
    const isvalid =  require('bcryptjs').compareSync(password,user.password)
    assert(isvalid,422,'密码错误')
    // if(!isvalid) {
    //   return res.status(422).send({
    //     message:'密码错误'
    //   })
    // }
    //3.返回token
    const token = jwt.sign({id:user._id},app.get('secret'))
    res.send({token})
  })


  //错误处理函数,assert返回json,简单的抛出异常的程序
  app.use(async(err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
      message:err.message
    })
  })
}