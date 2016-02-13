'use strict';
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
const $ = module.exports={};

$.index = function *(){
  const query = {};
  if(this.query.search){
    query.filename = new RegExp(this.query.search,'i');
  }
  if(this.query.me){
    query['metadata.author'] = this.state.user._id;
  }
  const images = yield gfs.collection('images').find(query,{filename: true}).toArray();
  this.body = images;
};

$.create = function *(){
  const file = this.request.body.files.file;
  this.assert(file,400);
  const saved = yield gfs.findOneAsync({
    md5: file.hash,
    root: 'images'
  });
  if(saved){
    this.body = saved;
  }
  else{
    const upload = yield gfs.fromFileAsync({
      filename: file.name,
      content_type: file.type,
      root: 'images',
      metadata: {
        author: this.state.user._id
      }
    },file.path);
    this.assert(upload,404);
    this.body = upload;
  }
};

$.show = function *(){
  const image = yield gfs.findOneAsync({
    _id: this.params.image,
    root: 'images'
  });
  this.assert(image,404);
  if(this.query.metadata){
    this.body = image;
  }
  else{
    this.type = image.contentType;
    this.length = image.length;
    this.etag = image.md5;
    const data = yield gfs.readFileAsync({
      _id: image._id,
      root: 'images'
    });
    this.body = data;
  }
};

$.update = function *(){
  const file = this.request.body.files.file;
  this.assert(file,400);
  const saved = yield gfs.findOneAsync({
    _id: this.params.image,
    root: 'images'
  });
  this.assert(saved,404);
  if(file.hash === saved.md5){
    this.body = saved;
  }
  else{
    yield gfs.removeAsync({_id: this.params.image});
    const upload = yield gfs.fromFileAsync({
      _id: this.params.image,
      filename: file.name,
      content_type: file.type,
      root: 'images',
      metadata: {
        author: this.state.user._id
      }
    },file.path);
    this.assert(upload,404);
    this.body = upload;
  }
};

$.destroy = function *(){
  yield gfs.remove({
    _id: this.params.image,
    root: 'images'
  });
  this.status = 200;
};
