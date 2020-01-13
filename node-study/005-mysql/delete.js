var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'test'
});
var sql = 'delete from user where id = ?';

var sqlParams = [1];
//增
connection.query(sql, sqlParams, function (err, result) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    console.log('DELETE INFO:', result);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();