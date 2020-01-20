var express = require('express');
var path = require('path')
var app = express();
app.use('/test',express.static('public'));
app.listen(2000, function () {
    console.log('服务端启动成功');
    console.log('端口号是:2000');
});