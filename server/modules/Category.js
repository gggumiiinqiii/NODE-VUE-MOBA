const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name:{type:String},
  // 关联自己本身的模型
  parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
})

module.exports = mongoose.model('Category',schema)