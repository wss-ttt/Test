const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
    const url = ctx.url;
    const type = ctx.method;

    if (url === '/' && type === 'GET') {
        let html = `
            <h2>Hello Hoa</h2>
            <form method="POST" action="/">
                <p>姓名:</p>
                <input name="username">
                <p>年龄:</p>
                <input name="age">
                <p>个人网址</p>
                <input name="website">
                <button type="submit">submit</button>                   
            </form>
        `;
        ctx.body = html;
    } else if (url === '/' && type === 'POST') {
        let postData = ctx.request.body;
        console.log(ctx.request.body);
        ctx.body = postData;
    } else {
        ctx.body = '<h2>404</h2>';
    }
});

app.listen(2000, () => {
    console.log('服务启动成功');
    console.log('端口号:2000');
});
