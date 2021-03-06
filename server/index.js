const express = require('express');

const app = express()
app.set('secret','ghj123456')
//使用跨域
app.use(require('cors')())
//在admin/index.js await 中req.body使用
app.use(express.json())
//托管静态文件
app.use('/uploads',express.static(__dirname+'/uploads'))
// 数据库的连接
require('./plugins/db.js')(app)
//路由的连接
require('./router/admin/index.js')(app)

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})