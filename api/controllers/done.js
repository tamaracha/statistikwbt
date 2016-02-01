'use strict';
const models = require('../models');
const find = require('lodash/find');
const ObjectId = require('mongoose').Types.ObjectId;
const $ = module.exports = {};
$.index = function *index(){
  const user = yield models.User.findById(this.params.user).lean().exec();
  this.assert(user,'unit not found',404);
  this.body = user.done;
};

$.create = function *create(){
  const user = yield models.User.findById(this.params.user).exec();
  this.assert(user,'user not found',404);
  const isDone = find(user.done,{unit: new ObjectId(this.request.body.unit)});
  if(isDone){
    this.body = isDone;
  }
  else{
    const done = user.done.create(this.request.body);
    user.done.push(done);
    yield user.save();
    this.body = done;
  }
};

$.show = function *show(){
};

$.update = function *update(){
};

$.destroy = function *(){
};
