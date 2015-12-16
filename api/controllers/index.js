'use strict';
const transform=require('lodash.transform');
const files = [
  'comment',
  'done',
  'download',
  'guess',
  'image',
  'meta',
  'rating',
  'subject',
  'summary',
  'test',
  'token',
  'topic',
  'unit',
  'user'
];
module.exports = transform(files,function(ctrl,f){
  ctrl[f] = require('./'+f);
},{});
