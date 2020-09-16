//require = require('esm')(module);
//module.exports = require('./main.js');

const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');

const app = new Koa();
const router = new Router();

router.get('/', ctx =>{
    ctx.body = 'Home';
});

router.use('/api', api.routes());

router.get('/about/:name?', ctx =>{
    const {name} = ctx.params;
    ctx.body = name ? `${name}의 소개`: 'intro';
});

router.get('/posts', ctx => {
    const { id } = ctx.query;
    ctx.body = id ? `post #${id}` : 'post id X';
});

app.use(router.routes()).use(router.allowedWethods());

app.listen(4000, () =>{
    console.log('Listening to port 4000');
});
/*
app.use(async (ctx, next) => {
    console.log(ctx.url);
    console.log(1);
    if(ctx.query.authorized !== '1'){
        ctx.status = 401;
        return;
    }
    
    await next();
    console.log('END');
});

app.use((ctx, next)=> {
    console.log(2);
    next();
});
app.use(ctx => {
    ctx.body = 'hello';
});
*/
