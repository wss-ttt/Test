const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    const url = ctx.url;
    const request = ctx.request;
    const query = request.query; //或者可以直接用ctx.query
    const querystring = request.querystring; //或者可以直接用ctx.querystring
    ctx.body = {
        query,   // "query":{"name":"qiaofeng","age":"18"}
        querystring   // "querystring":"name=qiaofeng&age=18"
    };
});

app.listen(2000, () => {
    console.log('服务启动成功');
    console.log('端口号:2000');
});