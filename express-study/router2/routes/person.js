var express = require('express');
var router = express.Router();

router.get('/test/:name/:age', function (req, res) {
    // 获取name
    let name = req.params.name;
    // 获取age
    let age = req.params.age;
    res.send('姓名:' + name + ',年龄:' + age);
});
router.get('/test2',function(req,res){
    let name = req.query.name;
    let age = req.query.age;
    res.send('姓名:' + name + ',年龄:' + age);
});
// 导出路由对象
module.exports = router;