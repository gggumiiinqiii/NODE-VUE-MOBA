module.exports = options =>{
  const jwt = require('jsonwebtoken')//获取jsonwebtoken的插件
  const AdminUser = require('../modules/AdminUser')
  const assert = require('http-assert')//处理报错的插件
  return async(req,res,next)=>{
    // pop表示提取最后一个数组
    const token = String(req.headers.authorization || '').split(' ').pop()

    assert(token,401,'请先登录')
    //解密token,获取登录的ID
    const {id} = jwt.verify(token,req.app.get('secret'))
    assert(id,401,'请先登录')
    // 挂载到req上
    req.user = await AdminUser.findById(id)
    assert(req.user,401,'请先登录')
    await next()
  }
}