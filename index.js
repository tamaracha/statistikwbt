'use strict';
const config=require('config');
const server=config.get('server');
const db=config.get('db');
const assets=config.get('assets');
const koa=require('koa');
const unless = require('koa-unless');
const Jade = require('koa-jade');
const jade = new Jade({
  viewPath: 'src/',
  locals: {
    title: assets.title,
    base: assets.base,
    prod: process.env.NODE_ENV,
    versions: assets.versions
  }
});
function *render(){
  this.render('index');
}
render.unless = unless;
const api=require('./api');
const app=koa();
require('koa-qs')(app);
require('koa-onerror')(app);
if(config.get('logging')){
  app.use(require('koa-morgan').middleware('dev'));
}
if(assets.serve){
  app.use(require('koa-mount')(assets.root,require('koa-static')(__dirname+'/dist')));
}
app.use(api.routes())
.use(api.allowedMethods())
.use(jade.middleware)
.use(render.unless({path: [/api/,new RegExp(assets.root)]}))
.listen(server.port,server.host,function(){
  console.log(`listening on ${server.host}:${server.port}`);
});
const mongoose=require('mongoose');
mongoose.connect(`mongodb://${db.host}:27017/${db.database}`);
