var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('好好学习 天天向上');   // 浏览器上不会出现乱码
})

var server = app.listen(8081, function () {

    console.log('服务启动成功');
    console.log('端口号8081');
});