'use strict';
//const debug = require('debug')('app:test controller');
const models = require('../models');
const jsonPatch = require('fast-json-patch');
const $ = module.exports={};

$.index=function *index(){
  const tests = yield models.Test.find(
    this.query.conditions||null,
    this.query.projections||null,
    this.query.options||null
  ).lean().exec();
  this.body = tests;
};

$.create=function *create(){
  const test = yield models.Test.create(this.request.body);
  this.assert(test,'test not created',404);
  this.body=test;
};

$.show=function *show(){
  const test = yield models.Test.findById(this.params.test);
  this.assert(test,'test not found',404);
  this.body=test;
};

$.update=function *update(){
  const test = yield models.Test.findById(this.params.test);
  this.assert(test,'test not found',404);
  this.assert(test.updatedAt.toISOString() === this.header['if-unmodified-since'], 412, 'test has been modified after last fetch');
  const patch = jsonPatch.apply(test, this.request.body);
  this.assert(patch === true, 'patch not successful');
  yield test.save();
  this.set('last-modified',test.updatedAt.toISOString());
  this.status = 200;
};

$.destroy=function *destroy(){
  const test = yield models.Test.findByIdAndRemove(this.params.test)
  .lean().exec();
  this.assert(test, 404, 'test not removed');
  this.status=200;
};
