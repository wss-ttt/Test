var express = require('express');
var router = express.Router();
router.get('/test', function (req, res) {
    res.json({
        msg: 'success'
    });
});
router.get('/test2/:name', function (req, res) {
    console.log(req.params);
    res.send('好好学习'+req.params.name);
});
// 导出路由对象
module.exports = router;