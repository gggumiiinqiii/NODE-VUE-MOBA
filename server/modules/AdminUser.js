const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  username:{type:String},
  // set是一个函数可以自定义修改保存的内容
  password:{
    type:String,
    //表示无法被选中
    select:false,
    set(val){
      return require('bcryptjs').hashSync(val,10)
    }
  }
})

module.exports = mongoose.model('AdminUser',schema)