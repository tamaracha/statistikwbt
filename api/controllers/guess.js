'use strict';
const models = require('../models');
const $ = module.exports={};

$.index = function *index(){
  const guesses = yield models.Guess.find(
    this.query.conditions || null,
    this.query.projections || null,
    this.query.options || null
  )
  .where('user', this.state.user._id)
  .sort('createdAt')
  .lean().exec();
  this.body = guesses;
};

$.create = function *create(){
  this.request.body.user = this.state.user._id;
  const guess = yield models.Guess.create(this.request.body);
  this.assert(guess,'guess not createt',404);
  this.body = guess;
  this.status = 201;
};

$.new = function *(){
  const guessQuery = {
    user: this.state.user._id,
    unit: this.query.conditions.unit
  };
  let guess = yield models.Guess.findOne(guessQuery)
  .sort({_id: -1})
  .lean().exec();
  if(!guess || guess.responses.length >= parseInt(this.query.length)){
    guess = yield models.Guess.create(guessQuery);
  }
  const run = yield models.Guess.count(guessQuery);
  this.body = guess;
  this.set('x-run', run);
  this.lastModified = guess.updatedAt;
};

$.show = function *show(){
  const guess = yield models.Guess.findById(this.params.guess)
  .where('user', this.state.user._id)
  .lean().exec();
  this.assert(guess, 404, 'guess not found');
  this.body = guess;
};

$.update = function *update(){
  const guess = yield models.Guess.findAndUpdate({
    _id: this.params.guess,
    user: this.state.user._id,
    updatedAt: this.header['if-unmodified-since']
  }, this.request.body)
  .lean().exec();
  this.assert(guess,404,'guess not found');
  this.body=guess;
};

$.destroy = function *destroy(){
  yield models.Guess.findByIdAndRemove(this.params.guess)
  .where('user', this.state.user._id)
  .lean().exec();
  this.status=204;
};
