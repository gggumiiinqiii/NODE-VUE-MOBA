const mongoose = require('mongoose')
const Category = require('./Category')

const schema = new mongoose.Schema({
  name:{type:String},
  avatar:{type:String},
  banner:{type:String},
  title:{type:String},
  // 一个英雄关联多个分类
  categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
  scores:{
    difficult:{type:Number},
    skill:{type:Number},
    attack:{type:Number},
    survive:{type:Number},
  },
  skills:[{
    icon:{type:String},
    name:{type:String},
    delay:{type:String},
    cost:{type:String},
    description:{type:String},
    tips:{type:String}
  }],
  //顺风出装
  sitems:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
  //逆风出装
  nitems:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
  //使用技巧
  usageTips:{type:String},
  //对战技巧
  battleTips:{type:String},
  //团战技巧
  teamTips:{type:String},
  //最佳搭档
  partners:[{
    hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
    description:{type:String}
  }]
})

module.exports = mongoose.model('Hero',schema,'heroes')