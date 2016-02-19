'use strict';
const models = require('../models');
const every = require('lodash/every');
const $ = module.exports = {};
$.index = function *index(){
  this.assert(this.query.search && typeof this.query.search === 'string','no search string',400);
  const subjects = yield models.Subject.find({
    name: new RegExp(this.query.search,'i')
  }).lean().exec();
  this.assert(subjects,'no subjects',404);
  this.body = subjects;
  this.state.status = every(subjects, {status: 'final'}) ? 'final' : 'draft';
};

$.create = function *create(){
  const subject = yield models.Subject.create(this.request.body);
  this.assert(subject,'not created',404);
  this.body = subject;
};

$.show = function *show(){
  const subject = yield models.Subject.findById(this.params.subject).lean().exec();
  this.assert(subject,'not found',404);
  this.body = subject;
};

$.update = function *update(){
  const subject = yield models.Subject.findByIdAndUpdate(this.params.subject,this.request.body,{
    new: true
  }).lean().exec();
  this.assert(subject,'not updated',404);
  this.body = subject;
};

$.destroy = function *destroy(){
  yield models.Subject.findByIdAndRemove(this.params.subject).lean().exec();
  this.status = 204;
};
