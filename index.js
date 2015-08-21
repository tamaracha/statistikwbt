'use strict';
const koa=require('koa');
const path = require('path');
const jade = require('koa-jade');
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
.use(api.allowedMethods());
if(assets.serve){
  const mount = require('koa-mount');
  const statics = require('koa-static');
  app.use(mount('/dist',statics(assets.root)));
}
app.use(jade.middleware({
  viewPath: __dirname+'/src',
  debug: false,
  locals: {
    versions: {
      angular: '1.4.3',
      bootstrap: '3.3.5',
      d3: '3.5.6',
      fontAwesome: '4.4.0',
      lodash: '3.10.1',
      restangular: '1.5.1',
      vega: '2.0.6'
    },
    env: process.env.NODE_ENV || 'development',
    basename: path.basename(__dirname)
  }
}))
.use(function *(){
  if(!this.url.startsWith('/dist/')){
    this.render(assets.index);
  }
})
.listen(server.port,server.host,function(){
  console.log(`listening on ${server.host}:${server.port}`);
});
mongoose.connect(`mongodb://${db.host}:27017/${db.database}`);
