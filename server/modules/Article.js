const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  title:{type:String},
  content:{type:String},
  categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}]
},{
  //录入数据的时候自动加时间戳
  timestamps:true
})

module.exports = mongoose.model('Article',scheme)