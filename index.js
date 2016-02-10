'use strict';
const debug = require('debug')('app:server');
const config=require('config');
const server=config.get('server');
const db=config.get('db');
const assets=config.get('assets');
const dots = require('dot').process({path: 'templates'});
const indexHtml = dots.index({
  title: assets.title,
  base: assets.base,
  username: config.get('username')
});
const koa=require('koa');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const mongoose=require('mongoose');
mongoose.Promise = require('bluebird');
function *index(){
  this.body = indexHtml;
}
index.unless = require('koa-unless');
const api=require('./api');
const app=koa();
require('koa-qs')(app);
require('koa-onerror')(app);
app
.use(conditional())
.use(etag());
if(assets.serve){
  app.use(require('koa-mount')(assets.root, require('koa-static')(__dirname+'/dist')))
}
app
.use(index.unless({path: [/api/,new RegExp(assets.root), /docs/, /swagger/]}))
.use(api.routes())
.use(api.allowedMethods())
.listen(server.port,server.host,function(){
  debug(`listening on ${server.host}:${server.port}`);
});
mongoose.connect(`mongodb://${db.host}:27017/${db.database}`, function(){
  debug('connected to mongodb');
});
