/*eslint no-console:0*/
'use strict';
const bluebird = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = bluebird;
const _ = require('lodash');
const fs = require('fs');
const csv = require('fast-csv');
const models = require('../api/models');

function handler(argv){
  const csvStream = csv.createWriteStream({
    quoteHeaders: true,
    quoteColumns: true,
    headers: ['user', 'unit', 'topic', 'timestamp'],
    delimiter: ';'
  });
  const filename = `${argv.d}_${new Date().toISOString()}.${argv.f}`;
  const writableStream = fs.createWriteStream(filename);
  writableStream.on('finish', function(){
    console.log('data written to '+filename);
  });
  csvStream.pipe(writableStream);
  let unitsVar;
  mongoose.connect(`mongodb://localhost:27017/${argv.db}`);
  mongoose.connection.once('open',function(){
    return models.Unit.find()
    .lean().exec()
    .then(function(units){
      unitsVar = units;
      const ids = _.map(units, '_id');
      return models.View.find()
      .in('unit', ids)
      .sort({user: 1, _id: 1})
      .select('-__v')
      .populate('unit', 'title')
      .populate('user', 'kennung email')
      .lean().exec();
    })
    .then(function(views){
      const units = _.keyBy(unitsVar, '_id');
      const data = _.chain(views)
      .filter(function(v){
        if(v.unit && v.user){return true;}
        return false;
      })
      .forEach(function(v){
        v.timestamp = v._id.getTimestamp();
        if(v.topic){
          const topic = _.find(units[v.unit._id].topics, {_id: v.topic});
          v.topic = topic.title;
        }
        v.unit = v.unit.title;
        v.user = v.user.kennung || v.user.email;
        csvStream.write(v);
      })
      .values();
      writableStream.end();
      return data;
    })
    .catch(function(e){
      console.log(e);
    })
    .finally(function(){
      mongoose.connection.close();
    });
  });
}

const builder = {
  d: {
    type: 'string',
    describe: 'Name der Datenbank',
    demand: true,
    alias: 'database'
  },
  f: {
    type: 'string',
    describe: 'Exportformat',
    default: 'json',
    alias: 'format',
    choices: ['csv', 'json']
  }
};

module.exports = {builder, handler};
