'use strict';
const models = require('../models');
const $ = module.exports = {};

$.index = function *index(){
  const views = yield models.View.find()
  .sort({
    user: 1,
    _id: 1
  })
  .select('-__v')
  .exec();
  this.body = views;
};
