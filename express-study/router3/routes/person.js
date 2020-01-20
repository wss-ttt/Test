var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.post('/test', urlencodedParser, function (req, res) {
    let uname = req.body.uname;
    let age = req.body.age;
    res.json({
        msg: 'success',
        uname:uname,
        age:age
    });
});
// 导出路由对象
module.exports = router;