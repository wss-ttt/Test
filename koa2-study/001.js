const koa = require('koa2')
const app = new koa()

app.use(async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = '好好学习 天天向上'
    await next()
})

app.listen(2000,function(){
    console.log('服务启动成功');
    console.log('端口号:2000');
});