module.exports = app =>{
  const mongoose = require('mongoose')
  //eprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. 
  //To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
  //useUnifiedTopology:true 这句话是用来解决上面的报错的
   //DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.
  //See: https://mongoosejs.com/docs/deprecations.html#findandmodify
  //useFindAndModify: false这句话是用来解决上面的报错的
  mongoose.connect("mongodb://127.0.0.1:27017/node-vue-moba",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false},function(err){
      if(err){
        console.log('连接失败')
      }else {
        console.log('连接成功')
      }
  })
  require('require-all')(__dirname+'/../modules')
}