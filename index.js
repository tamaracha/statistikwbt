'use strict';
const debug = require('debug')('app:server');
const config=require('config');
const server=config.get('server');
const db=config.get('db');
const assets=config.get('assets');
const koa=require('koa');
const unless = require('koa-unless');
const mount = require('koa-mount');
const send = require('koa-send');
const bluebird = require('bluebird');
const mongoose=require('mongoose');
mongoose.Promise = bluebird;
const indexPage = require('./dist/index')({
  title: assets.title,
  base: assets.base,
  prod: process.env.NODE_ENV,
  username: config.get('username')
});
function *index(){
  this.body = indexPage;
}
index.unless = unless;
function *swagger(){
  yield send(this, '/api/swagger.yml',{root: __dirname});
}
const api=require('./api');
const app=koa();
require('koa-qs')(app);
require('koa-onerror')(app);
if(assets.serve){
  const koaStatic = require('koa-static');
  app.use(mount(assets.root,koaStatic(__dirname+'/dist')))
  .use(mount('/docs',koaStatic(__dirname+'/docs')))
  .use(mount('/swagger',koaStatic(__dirname+'/swagger-ui/dist')));
}
app.use(mount('/api-docs.yml',swagger))
.use(api.routes())
.use(api.allowedMethods())
.use(index.unless({path: [/api/,new RegExp(assets.root), /docs/, /swagger/]}))
.listen(server.port,server.host,function(){
  debug(`listening on ${server.host}:${server.port}`);
});
mongoose.connect(`mongodb://${db.host}:27017/${db.database}`, function(){
  debug('connected to mongodb');
});
