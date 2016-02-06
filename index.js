'use strict';
const debug = require('debug')('app:server');
const config=require('config');
global.config = config;
const server=config.get('server');
const koa=require('koa');
const mongoose=require('mongoose');
mongoose.Promise = require('bluebird');

function *index(){
  yield this.render('index');
}
index.unless = require('koa-unless');
const api = require('./api');
const app=koa();
require('koa-qs')(app);
require('koa-onerror')(app);
app.use(require('koa-dot')({path: __dirname+'/templates'}))
if(config.get('assets') === true){
  app.use(require('koa-mount')('/dist', require('koa-static')(__dirname+'/dist')));
}
app
.use(index.unless({path: [/\/dist\//, /\/api\//]}))
.use(api.routes())
.use(api.allowedMethods())
.listen(server.port,server.host,function(){
  debug(`listening on ${server.host}:${server.port}`);
});

mongoose.connect('mongodb://localhost:27017/wbt', {poolSize: 20}, function(){
  debug('connected to mongodb');
});
