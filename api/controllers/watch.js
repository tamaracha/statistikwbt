'use strict';
const models = require('../models');
const $ = module.exports = {};

$.create = function *create(){
  const body = this.request.body;
  body.user = this.state.user._id;
  const watch = models.Watch.create(body);
  this.assert(watch,404,'watch not created');
  this.status = 200;
};
