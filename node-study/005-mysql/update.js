var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'test'
});
var sql = 'update user set name = ?,age=? where id = ?';

var sqlParams = ['周杰伦', 48, 1];
//增
connection.query(sql, sqlParams, function (err, result) {
    if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    console.log('UPDATE INFO:', result);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();