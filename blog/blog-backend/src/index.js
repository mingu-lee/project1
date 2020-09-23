//require = require('esm')(module);
//module.exports = require('./main.js');

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();

const router = new Router();


router.use('/api', api.routes());
router.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

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
/*router.get('/', ctx =>{
    ctx.body = 'Home';
});
router.get('/about/:name?', ctx =>{
    const {name} = ctx.params;
    ctx.body = name ? `${name}의 소개`: 'intro';
});

router.get('/posts', ctx => {
    const { id } = ctx.query;
    ctx.body = id ? `post #${id}` : 'post id X';
});*/


/*require('dotenv').config();
const Koa  from ('koa');
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';

const {PORT, MONGO_URI} = process.env;

mongoose
.connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(e =>{
    console.error(e);
});

const app=new Koa();
const router= new Router();

router.use('/api', api.routes());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
    console.log('Listening to port %d', port);
});*/