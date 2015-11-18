'use strict';
const models = require('../models');
const jsonpatch=require('fast-json-patch');
const $ = module.exports = {};

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
    this.throw('patch not successful',400);
  }
};

$.destroy = function *destroy(){
  const meta = yield models.Meta.findByIdAndRemove(this.params.meta);
  this.assert(meta,404);
  this.status = 200;
};
