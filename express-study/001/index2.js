var express = require('express');
var app = express();
//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
})
app.get('/users', function (req, res) {
    console.log('请求 users接口');
    res.json({
        name: '乔峰',
        age: 18,
        sex: '男'
    });
});
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function (req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})

//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})


var server = app.listen(8082, function () {
    console.log('服务启动成功');
    console.log('端口号8082');
})