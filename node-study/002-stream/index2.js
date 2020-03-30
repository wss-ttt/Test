let fs = require("fs");
let data = '好好学习 天天向上';
// 创建一个写入流
let writerStream = fs.createWriteStream('input.txt');
// 使用utf-8编码写入数据
writerStream.write(data, 'UTF8');
// 结束写入
writerStream.end();
// 监听写入完毕事件
writerStream.on('finish', function () {
    console.log('写入完毕');
});
// 监听写入事变事件
writerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log('程序执行完毕');