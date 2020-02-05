const koa = require('koa2');
const app = new koa();
const path = require('path');
const static_ = require('koa-static');

// 托管静态资源
app.use(static_(
    path.join(__dirname, './public')
));
app.listen(2000, function () {
    console.log('服务启动成功');
    console.log('端口号:2000');
});