const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    // ctx.body = 'Hello World';
    console.log('url:', ctx.url);
    ctx.body = '<h1>好好学习</h1>';
});

// 路由-> 对应不同的页面
app.use(async ctx => {
    console.log(ctx.url);
    let _html = '404 NotFound'
    switch (ctx.url) {
        case '/':
            _html = '<h1>Index</h1>';
            break;
        case '/about':
            _html = '<h1>About</h1>';
            break;
        case '/photo':
            _html = '<h1>photo</h1>';
            break;
        case '/blog':
            _html = '<h1>blog</h1>'
        default:
            break;
    }
    ctx.body = _html;
});
app.listen(2000, function () {
    console.log('服务启动成功');
    console.log('端口号:2000');
});