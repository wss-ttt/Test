var fs = require('fs');
console.log('准备写入文件');
// writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。
fs.writeFile('input.txt', '好好学习', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('数据写入成功');
    console.log('读取数据');
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log('input.txt信息:', data.toString());
    });
});