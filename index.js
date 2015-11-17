'use strict';
const config=require('config');
const server=config.get('server');
const db=config.get('db');
const assets=config.get('assets');
const koa=require('koa');
const unless = require('koa-unless');
const Jade = require('koa-jade');
const mount = require('koa-mount');
const fs = require('fs');
const yaml = require('js-yaml');
const swaggerSpec = yaml.load(fs.readFileSync('./api/swagger.yml','utf8'));
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
function *swagger(){
  this.body = swaggerSpec;
}
const api=require('./api');
const app=koa();
require('koa-qs')(app);
require('koa-onerror')(app);
if(config.get('logging')){
  app.use(require('koa-morgan').middleware('dev'));
}
if(assets.serve){
  const koaStatic = require('koa-static');
  app.use(mount(assets.root,koaStatic(__dirname+'/dist')))
  .use(mount('/docs',koaStatic(__dirname+'/docs')))
  .use(mount('/swagger',koaStatic(__dirname+'/swagger-ui/dist')));
}
app.use(mount('/api-docs.json',swagger))
.use(api.routes())
.use(api.allowedMethods())
.use(jade.middleware)
.use(render.unless({path: [/api/,new RegExp(assets.root), /docs/, /swagger/]}))
.listen(server.port,server.host,function(){
  console.log(`listening on ${server.host}:${server.port}`);
});
const mongoose=require('mongoose');
mongoose.connect(`mongodb://${db.host}:27017/${db.database}`);
