'use strict';
const models = require('../models');
const jsonpatch=require('fast-json-patch');
const $=module.exports={};

$.index=function *(){
  const unit = yield models.Unit.findById(
    this.params.unit,
    this.query.projections||null,
    this.query.options||null
  )
  .select('updatedAt')
  .lean().exec();
  this.assert(unit,'unit not found',400);
  this.body=unit.topics;
  this.lastModified = unit.updatedAt;
};

$.create=function *(){
  const unit = yield models.Unit.findById(this.params.unit).exec();
  this.assert(unit,'unit not found',404);
  const topic = unit.topics.create(this.request.body);
  unit.topics.push(topic);
  yield unit.save();
  this.set('x-updated-unit', unit.updatedAt.toUTCString());
  this.body=topic;
  this.status = 201;
};

$.show=function *(){
  const unit = yield models.Unit.findById(this.params.unit,'topics').exec();
  this.assert(unit,'unit not found',404);
  const topic=unit.topics.id(this.params.topic);
  this.assert(topic,'topic not found',404);
  this.body=topic;
};

$.update=function *(){
  this.assert(this.header['if-unmodified-since'], 403, 'no validation header supplied');
  const unit = yield models.Unit.findById(this.params.unit).exec();
  this.assert(unit,'unit not found',404);
  const topic = unit.topics.id(this.params.topic);
  this.assert(topic,'topic not found',404);
  this.assert(topic.updatedAt.toUTCString() === this.header['if-unmodified-since'], 'topic has been changed after last fetch',412);
  const index = unit.topics.indexOf(topic);
  const patch=jsonpatch.apply(unit.topics[index],this.request.body,true);
  this.assert(patch === true, 'patch not successful');
  yield unit.save();
  this.lastModified = unit.topics[index].updatedAt.toUTCString();
  this.set('x-updated-unit', unit.updatedAt.toUTCString());
  this.status=204;
};

$.destroy=function *(){
  const unit = yield models.Unit.findById(this.params.unit).exec();
  this.assert(unit,'unit not found',404);
  unit.topics.pull(this.params.topic);
  yield unit.save();
  this.set('x-updated-unit', unit.updatedAt.toUTCString());
  this.status=204;
};
