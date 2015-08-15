'use strict';
const koa=require('koa');
const send=require('koa-send');
const helmet=require('koa-helmet');
const mount = require('koa-mount');
const statics = require('koa-static');
const mongoose=require('mongoose');
const api=require('./api');
const config=require('config');
const server=config.get('server');
const db=config.get('db');
const assets=config.get('assets');
const app=koa();
require('koa-qs')(app);
require('koa-onerror')(app);
if(config.get('logging')){
  app.use(require('koa-morgan').middleware('dev'));
}
app.use(helmet())
.use(api.routes())
.use(api.allowedMethods());
if(assets.serve){
  app.use(mount('/dist',statics(assets.root)));
}
app.use(function *(){
  yield send(this, assets.index,{root: assets.root});
})
.listen(server.port,server.host,function(){
  console.log(`listening on ${server.host}:${server.port}`);
});
mongoose.connect(`mongodb://${db.host}:27017/${db.database}`);
