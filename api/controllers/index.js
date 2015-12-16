'use strict';
const transform=require('lodash.transform');
const files = [
  'comment',
  'done',
  'download',
  'guess',
  'image',
  'meta',
  'password',
  'rating',
  'subject',
  'summary',
  'test',
  'token',
  'topic',
  'unit',
  'user',
  'video'
];
module.exports = transform(files,function(ctrl,f){
  ctrl[f] = require('./'+f);
},{});
