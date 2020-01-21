const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
    let html = `
      <ul>
        <li><a href="/photo">photo</a></li>
        <li><a href="/blog">blog</a></li>
      </ul>
    `
    ctx.body = html
});
router.get('/photo',async(ctx)=>{
  ctx.body = '<h1>photo页面<h1>'
});
router.get('/blog',async(ctx)=>{
  ctx.body = '<h1>blog页面</h1>'
});

// 挂载路由
app.use(router.routes(), router.allowedMethods())

app.listen(2000, function () {
    console.log('服务启动成功');
    console.log('端口号:2000');
});