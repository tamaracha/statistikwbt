'use strict';
const models = require('../models');
const ObjectId=require('mongoose').Types.ObjectId;
const transform = require('lodash.transform');
const $=module.exports={};

$.test = function *test(){
  const tests = yield models.Test.find({
    unit: this.params.unit
  }).lean().exec();
  this.assert(tests.length > 0, 404, 'no tests found for this unit');
  this.body = {tests};
  const guessQuery = {
    user: this.state.user._id,
    unit: this.params.unit
  };
  let guess = yield models.Guess.findOne(guessQuery)
  .sort({_id: -1})
  .lean().exec();
  if(!guess || guess.responses.length === tests.length){
    guess = yield models.Guess.create(guessQuery);
  }
  const run = yield models.Guess.count(guessQuery);
  this.body.guess = guess;
  this.body.run = run;
};

$.akzeptanz = function *(){
  let ratings = yield models.Rating.aggregate([
    {
      $match: {
        'unit': new ObjectId(this.params.unit),
        'user': new ObjectId(this.state.user._id)
      }
    },
    {
      $sort: {
        '_id': -1
      }
    },{
      $group: {
        _id: '$name',
        value: {$first: '$value'}
      }
    }
  ]).exec();
  ratings = transform(ratings,function(result,value){
    result[value._id] = value.value;
  },{});
  /*
  ratings = _.chain(ratings)
  .indexBy('_id')
  .transform(function(result,value,key){
    result[key]=value.value;
  })
  .value();
  */
  const comment = yield models.Comment.findOne({
    user: this.state.user._id,
    unit: this.params.unit
  })
  .sort({_id: -1})
  .lean().exec();
  if(comment){ratings.comment=comment.value;}
  this.body=ratings;
};
