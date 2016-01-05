'use strict';
const models = require('../models');
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
  const test = yield models.Test.findByIdAndUpdate(this.params.test,this.request.body,{
    new: true
  });
  this.assert(test,'test not updated',404);
  this.body=test;
};

$.destroy=function *destroy(){
  yield models.Test.findByIdAndRemove(this.params.test).exec();
  this.status=200;
};
