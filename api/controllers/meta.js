'use strict';
const _ = require('lodash');
const bluebird = require('bluebird');
const fs = require('fs');
bluebird.promisifyAll(fs);
const path = require('path');
const yaml = require('js-yaml');
const assets = require('config').get('assets');
const models = require('../models');
const jsonpatch=require('fast-json-patch');
const $ = module.exports = {};
setup();

$.index = function *index(){
  const meta = yield models.Meta.find({},'-body').sort('position').lean().exec();
  this.assert(meta,404);
  this.body = meta;
};

$.create = function *create(){
  const meta = yield models.Meta.create(this.request.body);
  this.assert(meta,404);
  this.body = meta;
};

$.show = function *show(){
  const meta = yield models.Meta.findById(this.params.meta);
  this.assert(meta,404);
  this.body = meta;
};

$.update = function *update(){
  const meta = yield models.Meta.findById(this.params.meta);
  this.assert(meta,404);
  const patch = jsonpatch.apply(meta,this.request.body);
  if(patch===true){
    yield meta.save();
    this.status=200;
  }
  else{
    this.throw('patch not successful');
  }
};

$.destroy = function *destroy(){
  const meta = yield models.Meta.findByIdAndRemove(this.params.meta);
  this.assert(meta,404);
  this.status = 200;
};

function setup(){
  return models.Meta.find().exec()
  .then((meta) => {
    if(meta.length > 0) throw Error('already set up');
    return fs.readFileAsync(path.join(__dirname,'../meta.yml'),'utf8');
  })
  .then((file) => {
    const docs = yaml.load(file);
    const home = _.findIndex(docs,{_id: 'home'});
    if(home >= -1){
      docs[home].title = assets.title;
      docs[home].menu = assets.title;
    }
    return models.Meta.create(docs);
  })
  .then(
    (data) => {
      console.log('all right');
    },
    (e) => {
      console.log(e);
    }
  );
}
