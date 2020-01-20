var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(2000, function () {
    console.log('服务启动成功');
    console.log('端口号:2000');
});