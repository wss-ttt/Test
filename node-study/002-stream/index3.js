let fs = require('fs');
// 创建一个可读流
let readerStream = fs.createReadStream('input.txt');
// 创建一个可写流
let wreiterStream = fs.createWriteStream('output.txt');
// 管道读写操作
// 将input.txt中的内容写入到output.txt文件中去
// 此时 output.txt原先的内容会被替换掉
readerStream.pipe(wreiterStream);
console.log('程序执行完毕');
