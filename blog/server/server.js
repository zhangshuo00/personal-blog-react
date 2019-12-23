const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const proxy = require('express-http-proxy');

// 引入api文件

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));//静态文件目录

// 跨域请求设置
app.use('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// get请求测试，返回ok
app.get('/',(req,res)=>{
    res.send('ok');
});

// 调用api中间件

// 监听8080端口
app.listen(8080,(err)=>{
    if(err) console.error(err);
    console.log('server start on 8080...');
})
module.exports = app;