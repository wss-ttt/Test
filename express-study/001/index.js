var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');
});
app.get('/user/:name/:age',function(req,res){
    let uname = req.params.name;
    let age = req.params.age;
    res.json({
        msg:'success',
        uname:uname,
        age:age
    });
});

var server = app.listen(2000, function () {

    console.log('服务启动成功');
    console.log('端口号2000');
});