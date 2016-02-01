#! /usr/bin/env node
'use strict';
const userArgs = require('yargs')
.usage('Richtet ein neues WBT ein')
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

const findIndex = require('lodash/findindex');
const bluebird = require('bluebird');
const fs = require('fs');
bluebird.promisifyAll(fs);
const path = require('path');
const yaml = require('js-yaml');
const mongoose = require('mongoose');
mongoose.Promise = bluebird;
const models = require('../api/models');
mongoose.connect(`mongodb://${userArgs.host}:27017/${userArgs.db}`);
mongoose.connection.once('open',function(){
  return setup(userArgs.title);
});

function setup(title){
  return models.Meta.find().exec()
  .then(function(meta){
    if(meta.length > 0) throw Error('WBT wurde bereits eingerichtet');
    return fs.readFileAsync(path.join(__dirname,'../api/meta.yml'),'utf8');
  })
  .then(function(file){
    const docs = yaml.load(file);
    const home = findIndex(docs,{_id: 'home'});
    if(home >= -1){
      docs[home].title = title;
      docs[home].menu = title;
    }
    return models.Meta.create(docs);
  })
  .then(
    function(data){
      console.log(`WBT mit dem Titel ${userArgs.title} wurde in der Datenbank ${userArgs.db} eingerichtet.`);
      mongoose.connection.close();
    },
    function(e){
      console.log(e);
      mongoose.connection.close();
    }
  );
}
