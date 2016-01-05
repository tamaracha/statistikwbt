'use strict';
const models = require('../models');
const ObjectId=require('mongoose').Types.ObjectId;
const find = require('lodash.find');
const map = require('lodash.map');
const transform = require('lodash.transform');
const $=module.exports={};

$.test = function *test(){
  const tests = yield models.Test.find({
    unit: this.params.unit
  }).lean().exec();
  this.assert(tests.length > 0, 404, 'no tests found for this unit');
  const ids = map(tests,'_id');
  const guesses = yield models.Guess.find({
    user: this.state.user._id
  })
  .in('test',ids)
  .lean().exec();
  if(tests.length === 0){this.body = tests;}
  else{
    this.body = transform(tests,function(result,t,i){
      const g = find(guesses,{test: t._id});
      result[i] = {
        item: t,
        guess: g || null
      };
    },[],this);
  }
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
