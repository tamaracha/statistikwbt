'use strict';
const transform=require('lodash/transform');
const files = [
  'comment',
  'done',
  'download',
  'guess',
  'image',
  'page',
  'password',
  'rating',
  'response',
  'subject',
  'summary',
  'test',
  'token',
  'topic',
  'unit',
  'user',
  'watch',
  'wbt'
];
module.exports = transform(files,function(ctrl,f){
  ctrl[f] = require('./'+f);
},{});
