let http = require('http');
http.createServer((req, res) => {

    // 没有该行代码 中文会乱码
    // res.setHeader('Content-Type', 'text/html;charset=utf-8');

    // 也可以这样写
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

    console.log(req.method); // 输出的是  get
    res.write('给我一首歌的时间');   // 向客户端返回数据
    res.end();  // 结束响应  该代码一定是不能少的
}).listen(2001, function () {
    console.log('端口号:2001');
    console.log('服务启动成功');
});
