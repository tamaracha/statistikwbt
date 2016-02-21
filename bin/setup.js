/*eslint no-console:0*/
'use strict';
const find = require('lodash/find');
const bluebird = require('bluebird');
const fs = require('fs');
bluebird.promisifyAll(fs);
const yaml = require('js-yaml');
const mongoose = require('mongoose');
mongoose.Promise = bluebird;
const models = require('../api/models');

function handler(argv){
  mongoose.connect(`mongodb://localhost:27017/${argv.d}`, function(){
    return models.Meta.count().exec()
    .then(function(meta){
      if(meta > 0) throw Error('WBT wurde bereits eingerichtet');
      return fs.readFileAsync('./meta.yml', 'utf8');
    })
    .then(function(file){
      const docs = yaml.load(file);
      const home = find(docs,{_id: 'home'});
      if(home){
        home.title = argv.t;
        home.menu = argv.t;
      }
      return models.Meta.create(docs);
    })
    .catch(function(e){
      console.error(e);
    })
    .finally(function(){
      console.log(`WBT mit dem Titel ${argv.t} wurde in der Datenbank ${argv.d} eingerichtet.`);
      mongoose.disconnect();
    });
  });
}

const builder = {
  d: {
    type: 'string',
    demand: true,
    alias: 'database',
    describe: 'Name der Datenbank'
  },
  t: {
    alias: 'title',
    default: 'WBT Framework',
    type: 'string',
    describe: 'Der Name des WBT'
  }
};

module.exports = {builder, handler};
