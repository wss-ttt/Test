var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'test'
});
connection.connect(function (err) {
    if (err) {
        console.log('数据库链接失败');
        console.log(err);
        return;
    }
    console.log('链接成功');
});
connection.end(function(){
    console.log('数据库关闭链接');
});