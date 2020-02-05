let http = require('http');
var options = {
    host: 'localhost',
    port: '2000',
    path: '',
    method:'get',  // 可以
};
// 向服务器端发送请求
var req = http.request(options, (res) => {
    let arr = [];
    let str = '';
    // 接收响应回来的数据
    res.on('data', (chunk) => {
        arr.push(chunk);
        str += chunk;
    })
    // 数据接收完毕
    res.on('end', function () {
        console.log(arr);
        console.log(str);
    });
});
req.end();
