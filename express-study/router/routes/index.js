var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.json({
        msg: 'success'
    });
});
router.get('/data', function (req, res) {
    res.json({
        msg: 'success',
        data: [1, 2, 3]
    });
});
// 导出路由对象
module.exports = router;