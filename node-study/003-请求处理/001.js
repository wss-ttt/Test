var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
    // 这样写  页面上的中文会乱码
    // res.writeHead(200, { 'Content-Type': 'text/plain' });

    // 后面要加上charset=utf8 否则中文会乱码
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'}); 
    // res.writeHead(200,{'Content-Type':'text/plain;charset=UTF8'});

    console.log(req.url);
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    console.log(url.parse(req.url, true));
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();

}).listen(3000);