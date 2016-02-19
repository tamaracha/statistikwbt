'use strict';
const models = require('../models');
const jsonpatch=require('fast-json-patch');
const every = require('lodash/every');
const $ = module.exports = {};

$.index = function *index(){
  const meta = yield models.Meta.find(null,'-body')
  .sort('position')
  .lean().exec();
  this.assert(meta,404);
  this.state.status = every(meta, {status: 'final'}) ? 'final' : 'draft';
  this.body = meta;
};

$.create = function *create(){
  const meta = yield models.Meta.create(this.request.body);
  this.assert(meta,404);
  this.body = meta;
  this.lastModified = meta.updatedAt;
  this.status = 201;
};

$.show = function *show(){
  const meta = yield models.Meta.findById(this.params.meta);
  this.assert(meta,404);
  this.body = meta;
  this.lastModified = meta.updatedAt;
};

$.update = function *update(){
  //this.assert(this.header['if-unmodified-since'], 403, 'no validation header supplied');
  const meta = yield models.Meta.findById(this.params.meta).exec();
  this.assert(meta,404);
  if(this.header['if-unmodified-since']){this.assert(this.header['if-unmodified-since'] === meta.updatedAt.toUTCString(), 412);}
  const patch = jsonpatch.apply(meta,this.request.body);
  this.assert(patch === true, 'patch not successful');
  yield meta.save();
  this.lastModified = meta.updatedAt;
  this.status=204;
};

$.destroy = function *destroy(){
  const meta = yield models.Meta.findByIdAndRemove(this.params.meta);
  this.assert(meta,404);
  this.status = 204;
};
