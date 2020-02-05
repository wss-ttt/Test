var express = require('express');
var router = express.Router();
router.get('/test', function (req, res) {
    res.json({
        msg: 'success'
    });
});
router.get('/test2/:name/:age', function (req, res) {
    // 获取name
    let name = req.params.name;
    // 获取age
    let age = req.params.age;
    res.send('姓名:' + name + ',年龄:' + age);
});
// 导出路由对象
module.exports = router;