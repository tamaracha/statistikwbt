'use strict';
const transform=require('lodash/transform');
const files = [
  'comment',
  'done',
  'download',
  'guess',
  'image',
  'meta',
  'password',
  'rating',
  'response',
  'subject',
  //'summary',
  'test',
  'token',
  'topic',
  'unit',
  'user',
  'watch'
];
module.exports = transform(files,function(ctrl,f){
  ctrl[f] = require('./'+f);
},{});
