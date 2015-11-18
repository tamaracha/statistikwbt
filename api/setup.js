'use strict';
const _ = require('lodash');
const bluebird = require('bluebird');
const fs = require('fs');
bluebird.promisifyAll(fs);
const path = require('path');
const yaml = require('js-yaml');
const assets = require('config').get('assets');
const models = require('./models');
setup();

function setup(){
  return models.Meta.find().exec()
  .then(function(meta){
    if(meta.length > 0) throw Error('already set up');
    return fs.readFileAsync(path.join(__dirname,'./meta.yml'),'utf8');
  })
  .then(function(file){
    const docs = yaml.load(file);
    const home = _.findIndex(docs,{_id: 'home'});
    if(home >= -1){
      docs[home].title = assets.title;
      docs[home].menu = assets.title;
    }
    return models.Meta.create(docs);
  })
  .then(
    function(data){
      console.log('all right');
    },
    function(e){
      console.log(e);
    }
  );
}
