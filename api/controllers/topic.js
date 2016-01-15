'use strict';
const models = require('../models');
const jsonpatch=require('fast-json-patch');
const $=module.exports={};

$.index=function *(){
  const unit = yield models.Unit.findById(
    this.params.unit,
    this.query.projections||null,
    this.query.options||null
  ).lean().exec();
  this.assert(unit,'unit not found',400);
  this.body=unit.topics;
};

$.create=function *(){
  const unit = yield models.Unit.findById(this.params.unit).exec();
  this.assert(unit,'unit not found',404);
  const topic = unit.topics.create(this.request.body);
  unit.topics.push(topic);
  yield unit.save();
  this.set('x-updated-unit', unit.updatedAt);
  this.body=topic;
};

$.show=function *(){
  const unit = yield models.Unit.findById(this.params.unit,'topics').exec();
  this.assert(unit,'unit not found',404);
  const topic=unit.topics.id(this.params.topic);
  this.assert(topic,'topic not found',404);
  this.body=topic;
};

$.update=function *(){
  const unit = yield models.Unit.findById(this.params.unit).exec();
  this.assert(unit,'unit not found',404);
  const topic = unit.topics.id(this.params.topic);
  this.assert(topic,'topic not found',404);
  this.assert(topic.updatedAt.toISOString() === this.header['if-unmodified-since'], 'topic has been changed after last fetch',412);
  const index = unit.topics.indexOf(topic);
  const patch=jsonpatch.apply(unit.topics[index],this.request.body,true);
  this.assert(patch === true, 'patch not successful');
  yield unit.save();
  this.set('last-modified', unit.topics[index].updatedAt.toISOString());
  this.set('x-updated-unit', unit.updatedAt.toISOString());
  this.status=200;
};

$.destroy=function *(){
  const unit = yield models.Unit.findById(this.params.unit).exec();
  this.assert(unit,'unit not found',404);
  unit.topics.pull(this.params.topic);
  yield unit.save();
  this.status=200;
};

$.edit=function *(){
  this.assert(typeof this.request.body.action === 'string', 'action is no string', 400);
  this.assert(typeof this.request.body.dir === 'string', 'dir is no string', 400);
  const unit = yield models.Unit.findById(this.params.unit).exec();
  this.assert(unit,'unit not found',404);
  switch(this.request.body.action){
  case 'move':
    yield unit.move('topics',this.request.body.topic,this.request.body.dir);
    const topic = unit.topics.id(this.request.body.topic);
    if(topic){this.set('last-modified', topic.updatedAt.toISOString());}
    this.set('x-updated-unit', unit.updatedAt.toISOString());
  }
  this.body = unit.topics;
};
