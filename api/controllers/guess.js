'use strict';
const models = require('../models');
const $ = module.exports={};

$.create = function *create(){
  this.request.body.user = this.state.user._id;
  const guess = yield models.Guess.create(this.request.body);
  this.assert(guess,'guess not createt',404);
  this.body = guess;
};
