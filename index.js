'use strict';
const debug = require('debug')('app:server');
const config=require('config');
const server=config.get('server');
const db=config.get('db');
const assets=config.get('assets');
const koa=require('koa');
const mongoose=require('mongoose');
mongoose.Promise = require('bluebird');
const indexPage = require('./dist/index')({
  title: assets.title,
  base: assets.base,
  env: process.env.NODE_ENV,
  username: config.get('username')
});
function *index(){
  this.body = indexPage;
}
index.unless = require('koa-unless');
const api=require('./api');
const app=koa();
require('koa-qs')(app);
require('koa-onerror')(app);
if(assets.serve){
  app.use(require('koa-mount')(assets.root, require('koa-static')(__dirname+'/dist')))
}
app.use(api.routes())
.use(api.allowedMethods())
.use(index.unless({path: [/api/,new RegExp(assets.root), /docs/, /swagger/]}))
.listen(server.port,server.host,function(){
  debug(`listening on ${server.host}:${server.port}`);
});
mongoose.connect(`mongodb://${db.host}:27017/${db.database}`, function(){
  debug('connected to mongodb');
});
