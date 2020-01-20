var express = require('express');
var app = express();
app.get('/', function (req, res) {
    // 返回页面
    res.sendFile(__dirname + '/index.html');
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