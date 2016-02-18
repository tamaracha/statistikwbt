'use strict';
const models = require('../models');
const $ = module.exports={};

$.create = function *create(){
  const guess = yield models.Guess.findById(this.params.guess);
  this.assert(guess,'no guess found',404);
  this.assert(guess.updatedAt.toUTCString() === this.header['if-unmodified-since'], 412, 'guess has been changed after last fetch');
  const response = guess.responses.create(this.request.body);
  guess.responses.push(response);
  yield guess.save();
  this.lastModified = guess.updatedAt;
  this.body = response;
  this.status = 201;
};
