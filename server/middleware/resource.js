module.exports = options =>{
  return async(req,res,next)=>{
    //首字母小写的复数改成首字母大写的单数
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../modules/${modelName}`) 
    next()
  }
}