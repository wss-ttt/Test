var fs = require('fs');
// 获取文件信息
fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.log(err);
    }
    console.log(stats);
    console.log('是否是一个文件', stats.isFile()); // true
    console.log('是否是一个文件夹', stats.isDirectory());   // false
});