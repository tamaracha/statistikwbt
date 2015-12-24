'use strict';
const capitalize = require('lodash.capitalize');
const transform = require('lodash.transform');
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
  'view',
  'watch'
];
const models = module.exports = transform(files,function(models,value){
  const name = capitalize(value);
  const schema = require('./'+value);
  const model = mongoose.model(name,schema);
  models[name] = model;
},{});
