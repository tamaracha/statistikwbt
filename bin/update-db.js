#! /usr/bin/env node
'use strict';
const userArgs = require('yargs')
.usage('bereitet datenbanken auf neuen Fix vor')
.help('help','Zeigt diesen Hilfetext an')
.version(function(){
  return require('../package').version;
})
.option('db',{
  alias: 'database',
  demand: true,
  type: 'string',
  describe: 'Name der Datenbank'
})
.option('h',{
  alias: 'host',
  type: 'string',
  default: 'localhost',
  describe: 'Hostname der Datenbank'
})
.option('t',{
  alias: 'title',
  default: 'WBT Framework',
  type: 'string',
  describe: 'Der Name des WBT'
})
.argv;

const bluebird = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = bluebird;
const models = require('../api/models');
mongoose.connect(`mongodb://${userArgs.host}:27017/${userArgs.db}`);
mongoose.connection.once('open',function(){
  return setup();
});

function setup(){
  const date = Date.now();
  return models.Unit.find().exec()
  .then(function(units){
    for(var i=0; i<units.length; i++){
      units[i].createdAt = date;
      units[i].updatedAt = date;
      for(var j=0; j<units[i].topics.length; j++){
        units[i].topics[j].createdAt = date;
        units[i].topics[j].updatedAt = date;
      }
    }
    return units;
  })
  .map(function(unit){
    return unit.save();
  })
  .then(function(){
    return models.Test.update({},
    {
      $set: {createdAt: date},
      $set: {updatedAt: date}
    }, {multi: true}).exec();
  })
  .then(function(raw){
    console.log(raw);
    return models.Guess.remove({});
  })
  .catch(function(e){
    console.log(e);
  })
  .finally(function(){
    console.log('Datenbank upgedated');
    mongoose.connection.close();
  });
}
