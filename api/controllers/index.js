'use strict';
const _=require('lodash');
const files = [
  'comment',
  'done',
  'download',
  'guess',
  'image',
  'rating',
  'subject',
  'summary',
  'test',
  'token',
  'topic',
  'unit',
  'user'
];
module.exports = _.transform(files,function(ctrl,f){
  ctrl[f] = require('./'+f);
},{});
