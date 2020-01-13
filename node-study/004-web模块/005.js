let https = require('https');
var options = {
    host: 'www.baidu.com',
    port: '443',
    path: '/',
    method:'get',  // 可以
};
// 向服务器端发送请求
var req = https.request(options, (res) => {
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
