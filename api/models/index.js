'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
const files = [
  'comment',
  'guess',
  'meta',
  'rating',
  'subject',
  'test',
  'unit',
  'user',
  'view'
];
const models = module.exports = _.transform(files,function(models,value){
  const name = _.capitalize(value);
  const schema = require('./'+value);
  const model = mongoose.model(name,schema);
  models[name] = model;
},{});
