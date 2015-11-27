'use strict';
const models = require('../models');
const _=require('lodash');
const fs=require('fs');
const os = require('os');
const path=require('path');
const spawn=require('child_process').spawn;
const crypto = require('crypto');
const template=fs.readFileSync(__dirname+'/download.md','utf8');
const compiled=_.template(template,null,{variable: 'data', imports: {_: _}});
const send=require('koa-send');
const mime = require('mime');
const binary=['docx','epub'];
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const Grid = require('gridfs');
Grid.mongo = mongoose.mongo;
const conn = mongoose.connection;
let gfs;
conn.once('open',function(){
  gfs = new Grid(conn.db);
  bluebird.promisifyAll(gfs);
});
const $=module.exports={};
function hash(val){
  return crypto.createHash('sha1')
  .update(val)
  .digest('hex');
}

function getFilename(){
  return new Promise(function(resolve,reject){
    return crypto.randomBytes(16,function(e,buf){
      if(e){return reject(e);}
      if(buf){
        let name = 'download_';
        for (let i = 0; i < buf.length; ++i) {
          name += ('0' + buf[i].toString(16)).slice(-2);
        }
        return resolve(name);
      }
    });
  });
}

$.getToken=function *getToken(next){
  if(!this.query.token){
    this.throw('no token found',401);
  }
  else{
    this.request.headers.authorization='bearer '+this.query.token;
    yield next;
  }
};

$.getUnits=function *getUnits(next){
  if(_.isString(this.query.units)){
    this.query.units=[this.query.units];
  }
  if(_.isString(this.query.contents)){
    this.query.contents=[this.query.contents];
  }
  const query = models.Unit.find()
  .sort({position: 1});
  if(this.query.units){query.in('_id',this.query.units);}
  const units=yield query.exec();
  this.assert(units,'no units found',404);
  this.state.units=units;
  yield next;
};

$.getMarkdown=function *getMarkdown(next){
  const md=compiled({units: this.state.units,contents: this.query.contents});
  this.assert(md,'markdown not compiled');
  const mimeType = mime.lookup(this.query.format);
  this.response.type=mimeType;
  this.attachment('WBT.'+this.query.format);
  if(this.query.format==='markdown'||this.query.format==='md'){
    this.body=md;
  }
  else{
    this.state.md=md;
    this.state.mimeType = mimeType;
    this.state.filename = yield getFilename();
    yield next;
  }
};

$.getFile=function *getFile(next){
  const mdHash = hash(this.state.md);
  const props = {
    'metadata.mdHash': mdHash,
    contentType: this.state.mimeType,
    root: 'download'
  };
  const exists = yield gfs.findOneAsync(props);
  if(exists){
    const data = yield gfs.readFileAsync({
      _id: exists._id,
      root: 'download'
    });
    this.body = data;
    yield next;
  }
  else{
    const filename = this.state.filename+'.'+this.query.format;
    const pathname = path.join(os.tmpDir(),filename);
    const child = spawn('pandoc',['-f','markdown','-t',this.query.format,'-s','-o',filename],{cwd: os.tmpDir()});
    child.stdin.end(this.state.md,'utf8');
    yield child.on.bind(child,'exit');
    yield send(this,filename,{root: os.tmpDir()});
    yield next;
    yield gfs.fromFileAsync({
      metadata: {
        mdHash,
        author: this.state.user._id
      },
      filename,
      content_type: this.state.mimeType,
      mode: 'w',
      root: 'download'
    },pathname);
  }
};
