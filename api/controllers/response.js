'use strict';
const models = require('../models');
const $ = module.exports={};

$.create = function *create(){
  const guess = yield models.Guess.findById(this.params.guess);
  this.assert(guess,'no guess found',404);
  const response = guess.responses.create(this.request.body);
  guess.responses.push(response);
  yield guess.save();
  this.body = response;
};
