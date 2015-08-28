'use strict';
const koa=require('koa');
const send = require('koa-send');
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
app.use(api.routes())
.use(api.allowedMethods())
.use(function *(){
  if(!this.url.startsWith('/dist/')){
    yield send(this,assets.index,{root: assets.root});
  }
})
.listen(server.port,server.host,function(){
  console.log(`listening on ${server.host}:${server.port}`);
});
mongoose.connect(`mongodb://${db.host}:27017/${db.database}`);
