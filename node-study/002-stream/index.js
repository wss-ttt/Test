let fs = require('fs');
let data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 设置编码
readerStream.setEncoding('UTF8');
// 读取数据
readerStream.on('data', function (chunk) {
    data += chunk;
});
// 监听数据读取完毕
readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error',function(err){
    console.log(err.stack);
});
console.log('程序执行完毕');