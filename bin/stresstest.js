#! /usr/bin/env node
'use strict';
const _ = require('lodash');
const bluebird = require('bluebird');
const fs = require('fs');
bluebird.promisifyAll(fs);
const mongoose = require('mongoose');
mongoose.Promise = bluebird;
const models = require('../api/models');
const userArgs = require('yargs')
.option('db',{
  alias: 'database',
  demand: true,
  type: 'string',
  describe: 'Name der Datenbank'
})
.option('user', {
  type: 'string',
  required: true
})
.argv;
mongoose.connect(`mongodb://localhost:27017/${userArgs.db}`);
mongoose.connection.once('open',function(){
  return models.User.findOne({email: userArgs.user})
  .lean().exec()
  .then(function(user){
    return models.View.find({user: user._id})
    .sort({_id: 1})
    .populate('unit', 'title')
    .lean().exec()
    .then(function(views){
      _.remove(views, function(v){
        if(v.unit === null){return true;}
        return false;
      });
      _.each(views, function(v){
        v.timeStamp = v._id.getTimestamp();
      });
      console.log(views);
    });
  })
  .finally(function(){
    mongoose.connection.close();
  })
});

