var express = require('express');
var app = express();
var personRouter = require('./routes/person');

app.use('/person', personRouter);
app.listen(2000, function () {
    console.log('服务启动成功');
    console.log('端口号:2000');
});