let http = require('http');
http.createServer((req, res) => {
    // 没有该行代码 中文会乱码
    // res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // 也可以这样写
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    console.log(req.method); // 输出的是  get
    // 向客户端返回数据
    res.write('好好学习');
    // 结束响应  该代码是不能少的
    res.end();
}).listen(2000, function () {
    console.log('端口号:2000');
    console.log('服务启动成功');
});