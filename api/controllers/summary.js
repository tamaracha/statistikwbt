'use strict';
const models = require('../models');
const ObjectId=require('mongoose').Types.ObjectId;
const transform = require('lodash.transform');
const $=module.exports={};

$.guesses=function *(){
  const guesses = yield models.Guess.aggregate([
    {
      $match: {
        user: new ObjectId(this.state.user._id),
        unit: new ObjectId(this.params.unit)
      }
    },
    {
      $sort: {
        _id: -1
      }
    },
    {
      $group: {
        _id: '$item',
        response: {$first: '$response'}
      }
    }
  ]).exec();
  const data = transform(guesses,function(result,value){
    result[value._id] = value.response;
  },{});
  /*
  let data=_.chain(guesses)
  .indexBy('_id')
  .transform(function(result,value,key){
    result[key]=value.response;
  })
  .value();
  */
  this.body=data;
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
