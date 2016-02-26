'use strict';
const remove = require('lodash/remove');
const bluebird = require('bluebird');
const csv = require('fast-csv');
const writeToString = bluebird.promisify(csv.writeToString);
const models = require('../models');
const $ = module.exports = {};

function transform(row){
  return {
    user: row.user.kennung || row.user.email,
    createdAt: row._id.getTimestamp().toISOString(),
    unit: row.unit.title,
    topic: row.topic ? row.unit.topics.id(row.topic).title : 'description'
  };
}
$.index = function *index(){
  const views = yield models.View.find()
  .sort({
    user: 1,
    _id: 1
  })
  .populate('user','kennung email')
  .populate('unit','title topics._id topics.title')
  .exec();
  remove(views, function(v){
    if(!v.unit || !v.user){return true;}
    return false;
  });
  if(this.header.accept.indexOf('json') === -1){
    this.attachment('Clicks');
  }
  switch(this.query.format){
    default:
      this.body = views.map(transform);
      break;
    case 'csv':
      this.type = 'text/csv';
      this.body = yield writeToString(views, {
        transform,
        quoteColumns: this.query.quoteColumns ? true : false,
        delimiter: this.query.delimiter || ',',
        headers: this.query.headers ? true : false,
        includeEndRowDelimiter: this.query.includeEndRowDelimiter ? true : false 
      });
      break;
  }
};
