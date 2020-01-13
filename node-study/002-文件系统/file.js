var fs = require("fs");

// 异步读取
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.log(err);
    };
    console.log('异步读取文件:',data.toString());
});


var data = fs.readFileSync('input.txt');
console.log('同步读取',data.toString());