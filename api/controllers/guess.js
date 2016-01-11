'use strict';
const models = require('../models');
const debug = require('debug')('app:guess controller');
const $ = module.exports={};

$.index = function *index(){
  const guesses = yield models.Guess.find(
    this.query.conditions || null,
    this.query.projections || null,
    this.query.options || null
  ).lean().exec();
  this.body = guesses;
};

$.create = function *create(){
  this.request.body.user = this.state.user._id;
  const guess = yield models.Guess.create(this.request.body);
  this.assert(guess,'guess not createt',404);
  this.body = guess;
};

$.show = function *show(){
  const guess = yield models.Guess.findById(this.params.guess).lean().exec();
  this.assert(guess, 404, 'guess not found');
  this.body = guess;
};

$.update = function *update(){
  const guess = yield models.Guess.findByIdAndUpdate(this.params.test,this.request.body,{
    upsert: true
  });
  this.assert(guess,404,'guess not updated');
  this.body=guess;
};

$.destroy = function *destroy(){
  yield models.Guess.findByIdAndRemove(this.params.guess).exec();
  this.status=200;
};
