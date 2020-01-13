var http = require('http');
var querystring = require('querystring');

http.createServer(function (req, res) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    //跨域允许的header类型
    res.setHeader("Access-Control-Allow-Headers", "Content-type,Content-Length,Authorization,Accept,X-Requested-Width");
    //跨域允许的请求方式
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    //设置响应头信息
    res.setHeader("X-Powered-By", ' 3.2.1')
    //让options请求快速返回
    if (req.method == "OPTIONS") { return res.end(); }
    // 这样写  页面上的中文会乱码
    // res.writeHead(200, { 'Content-Type': 'text/plain' });

    // 后面要加上charset=utf8 否则中文会乱码
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    // res.writeHead(200,{'Content-Type':'text/plain;charset=UTF8'});
    var body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function (chunk) {
        console.log('解析之前:', body);
        // 解析参数
        body = querystring.parse(body);
        console.log('解析之后:', body);

        // 如果此处像下面这个写，会报错
        // res.write(body); // 会报错

        res.write(JSON.stringify(body));// 向客户端返回数据
        res.end();   // 这个代码不能少
    });
}).listen(4000);