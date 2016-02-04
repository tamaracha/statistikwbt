#! /usr/bin/env node
'use strict';
const find = require('lodash/find');
const map = require('lodash/map');
const bluebird = require('bluebird');
const fs = require('fs');
bluebird.promisifyAll(fs);
const path = require('path');
const yaml = require('js-yaml');
const mongoose = require('mongoose');
mongoose.Promise = bluebird;
const models = require('../api/models');

function setup(yargs, args){
mongoose.connect('mongodb://localhost:27017/wbt', function(){
  return models.Wbt.findOne({path: args.p}).exec()
  .then(function(wbt){
    if(wbt) throw Error('WBT wurde bereits eingerichtet');
    return fs.readFileAsync(path.join(__dirname,'./meta.yml'),'utf8');
  })
  .then(function(file){
    const docs = yaml.load(file);
    const home = find(docs,{path: 'home'});
    if(home){
      home.title = args.title;
      home.menu = args.title;
    }
    return models.Page.create(docs);
  })
  .then(function(data){
    const pages = map(data, '_id');
    return models.Wbt.create({
      path: args.p,
      title: args.t,
      pages
    });
  })
  .catch(function(e){
    console.log(e);
  })
  .finally(function(){
    mongoose.connection.close();
  });
});
}

function remove(yargs, args){
  mongoose.connect('mongodb://localhost:27017/wbt', function(){
    return models.Wbt.findOneAndRemove({path: args.p}).exec()
    .then(function(wbt){
      if(!wbt){throw Error('Dieses wBT existiert nicht.');}
      return models.Page.remove()
      .in('_id', wbt.pages)
      .exec();
    })
    .catch(function(e){
      console.log(e);
    })
    .finally(function(){
      mongoose.connection.close();
    });
  });
}

require('yargs')
.usage('Das Shell-Script zum Bearbeiten der WBT-Datenbank')
.help('help','Zeigt diesen Hilfetext an')
.version(function(){
  return require('../package').version;
})
.command('setup', 'Richtet ein neues WBT ein', setup)
.command('remove', 'Entfernt ein WBT aus der Datenbank', remove)
.completion('completion', 'Generate Bash Completion Script')
.option('p', {
  alias: 'path',
  default: '/statistikwbt/',
  type: 'string',
  describe: 'Die URL zum WBT'
})
.option('t',{
  alias: 'title',
  default: 'WBT Framework',
  type: 'string',
  describe: 'Der Name des WBT'
})
.example('$0 setup -p /test/ -t Test', 'Richtet ein WBT mit dem Titel "Test" und der URL "/test/" ein.')
.example('remove -p /test/', 'Entfernt das WBT mit der URL "/test/" aus der Datenbank.')
.argv;
