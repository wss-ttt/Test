var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
    // 返回页面
    res.sendFile(__dirname + '/index.html');
});
app.post('/user', urlencodedParser, function (req, res) {
    // 获取姓名
    let uname = req.body.uname;
    // 获取年龄
    let age = req.body.age;
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