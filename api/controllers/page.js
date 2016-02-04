'use strict';
const models = require('../models');
const jsonpatch=require('fast-json-patch');
const $ = module.exports = {};

$.index = function *index(){
  const pages = yield models.Page.find(null,'-body')
  .sort('position')
  .lean().exec();
  this.assert(pages,404);
  this.body = pages;
};

$.create = function *create(){
  const page = yield models.Page.create(this.request.body);
  this.assert(page,404);
  this.body = page;
};

$.show = function *show(){
  const page = yield models.Page.findById(this.params.page);
  this.assert(page,404);
  this.body = page;
};

$.update = function *update(){
  const page = yield models.Page.findById(this.params.page);
  this.assert(page,404);
  const patch = jsonpatch.apply(page,this.request.body);
  this.assert(patch === true, 'patch not successful');
  yield page.save();
  this.status=200;
};

$.destroy = function *destroy(){
  const page = yield models.Page.findByIdAndRemove(this.params.page);
  this.assert(page,404);
  this.status = 200;
};
