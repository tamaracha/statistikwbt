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
const models = require('../models');
const parseRange = require('range-parser');
const $ = module.exports = {};

$.index = function *index(){
  const query = {};
  if(this.query.search){
    query.filename = new RegExp(this.query.search,'i');
  }
  if(this.query.me){
    query['metadata.author'] = this.state.user._id;
  }
  const videos = yield gfs.collection('videos').find(query,{filename: true}).toArray();
  this.body = videos;
}

$.create = function *create(){
  const file = this.request.body.files.file;
  this.assert(file,400);
  const saved = yield gfs.findOneAsync({
    md5: file.hash,
    root: 'videos'
  });
  if(saved){
    this.body = saved;
  }
  else{
    const upload = yield gfs.fromFileAsync({
      filename: file.name,
      content_type: file.type,
      root: 'videos',
      metadata: {
        author: this.state.user._id
      }
    },file.path);
    this.assert(upload,404);
    this.body = upload;
  }
}

$.show = function *show(){
  const video = yield gfs.findOneAsync({
    _id: this.params.video,
    root: 'videos'
  });
  this.assert(video,404);
  if(this.query.metadata){
    this.body = video;
  }
  else{
    const range = parseRange(video.length,this.header.range);
    const chunkSize = (range[0].end - range[0].start) + 1;
    this.response.type = video.contentType;
    this.set({
      'Content-Length': chunkSize,
      'Accept-Ranges': 'bytes',
      'Content-Range': 'bytes ' + range[0].start + '-' + range[0].end + '/' + video.length
    });
    const readStream = gfs.createReadStream({
      _id: video._id,
      root: 'videos',
      range: {
        startPos: range[0].start,
        endPos: range[0].end
      }
    });
    this.status = 206;
    this.body = readStream;
  }
}

$.update = function *update(){
  const file = this.request.body.files.file;
  this.assert(file,400);
  const saved = yield gfs.findOneAsync({
    _id: this.params.video,
    root: 'videos'
  });
  this.assert(saved,404);
  if(file.hash === saved.md5){
    this.body = saved;
  }
  else{
    yield gfs.removeAsync({_id: this.params.video});
    const upload = yield gfs.fromFileAsync({
      _id: this.params.video,
      filename: file.name,
      content_type: file.type,
      root: 'videos',
      metadata: {
        author: this.state.user._id
      }
    },file.path);
    this.assert(upload,404);
    this.body = upload;
  }
}

$.destroy = function *destroy(){
  yield gfs.remove({
    _id: this.params.video,
    root: 'videos'
  });
  this.status = 200;
}
