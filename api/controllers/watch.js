'use strict';
const remove = require('lodash/remove');
const bluebird = require('bluebird');
const csv = require('fast-csv');
const writeToString = bluebird.promisify(csv.writeToString);
const models = require('../models');
const $ = module.exports = {};

function transform(row){
  const output = {
    user: row.user.kennung || row.user.email,
    createdAt: row._id.getTimestamp().toISOString(),
    state: row.state,
    time: row.time
  };
  if(row.list){
    output.type = 'list';
    output.id = row.list;
  }
  else{
    output.type = 'video';
    output.id = row.video;
  }
  return output;
}

$.index = function *index(){
  const watches = yield models.Watch.find()
  .sort({
    user: 1,
    _id: 1
  })
  .populate('user','kennung email')
  .exec();
  remove(watches, function(v){
    return !v.user ? true : false;
  });
  if(this.header.accept.indexOf('json') === -1){
    this.attachment('Videos');
  }
  switch(this.query.format){
    default: {
      this.body = watches.map(transform);
      break;
    }
    case 'csv':
      this.type = 'text/csv';
      this.body = yield writeToString(watches, {
        transform,
        quoteColumns: this.query.quoteColumns ? true : false,
        delimiter: this.query.delimiter || ',',
        headers: this.query.headers ? true : false,
        includeEndRowDelimiter: this.query.includeEndRowDelimiter ? true : false 
      });
      break;
  }
};

$.create = function *create(){
  const body = this.request.body;
  body.user = this.state.user._id;
  const watch = models.Watch.create(body);
  this.assert(watch,404,'watch not created');
  this.status = 200;
};
