const express = require('express');

const app = express()
//使用跨域
app.use(require('cors')())
//在admin/index.js await 中req.body使用
app.use(express.json())
//托管静态文件
app.use('/uploads',express.static(__dirname+'/uploads'))
// 数据库的连接
require('./plugins/db')(app)
//路由的连接
require('./router/admin')(app)

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})