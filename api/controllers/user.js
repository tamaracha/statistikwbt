'use strict';
const models = require('../models');
const jsonpatch = require('fast-json-patch');
const $=module.exports={};

$.check=function *(){
  const users = yield models.User.count(this.query).exec();
  this.assert(users>0,'no users found',404);
  this.status=200;
};

$.create=function *(){
  const user = yield models.User.create(this.request.body);
  this.assert(user, 404, 'user not created');
  this.body=user;
};

$.show=function *(){
  const user = yield models.User.findById(this.params.user).lean().exec();
  this.assert(user,'user not found',404);
  this.body=user;
};

$.update=function *(){
  const user = yield models.User.findById(this.params.user).exec();
  this.assert(user,'user not found',404);
  const patch = jsonpatch.apply(user,this.request.body);
  if(patch===true){
    yield user.save();
    this.status=200;
  }
  else{
    this.throw('patch not successful');
  }
};

$.destroy=function *(){
  const user = yield models.User.findByIdAndRemove(this.params.user).exec();
  this.assert(user,'user not found',404);
  this.status=200;
};
