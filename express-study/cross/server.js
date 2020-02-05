var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/user', function (req, res) {
    // 获取姓名
    let uname = req.query.uname;
    // 获取年龄
    let age = req.query.age;
    // 返回数据
    res.send({
        uname: uname,
        age: age
    });
});
app.listen(2000, function () {
    console.log('服务启动成功');
    console.log('端口号:2000');
});