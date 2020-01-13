let http = require('http');
http.createServer((req, res) => {

    // 没有该行代码 中文会乱码
    // res.setHeader('Content-Type', 'text/html;charset=utf-8');

    // 也可以这样写
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    let str = '';
    http.get('http://localhost:2001', res => {
        res.on('data', function (chunk) {
            str += chunk;
        });
        res.on('end', function () {
            console.log(str);
        });
    });
    res.end();  // 结束响应  该代码一定是不能少的
}).listen(2000, function () {
    console.log('端口号:2000');
    console.log('服务启动成功');
});
