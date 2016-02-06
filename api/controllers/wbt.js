'use strict';
const models = require('../models');
const jsonpatch=require('fast-json-patch');
const $ = module.exports = {};

$.index = function *index(){
  const wbts = yield models.Wbt.find(
    this.query.conditions,
    this.query.projections,
    this.query.options
  )
  .lean().exec();
  this.body = wbts;
};

$.create = function *create(){
  const wbt = yield models.Wbt.create(this.request.body);
  this.assert(wbt, 404, 'WBT not created');
  this.body = wbt;
};

$.show = function *show(){
  const wbt = yield models.Wbt.findOne({path: this.params.wbt})
  .lean().exec();
  this.assert(wbt, 404, 'WBT not found');
  this.body = wbt;
}

$.update = function *update(){
  const wbt = yield models.Wbt.findById(this.params.wbt).exec();
  this.assert(wbt, 404, 'WBT not found');
  this.assert(wbt.updatedAt.toISOString() === this.header['if-unmodified-since'], 412, 'WBT has been updated since last fetch');
  const patch = jsonPatch.apply(wbt, this.request.body);
  this.assert(patch === true, 500, 'patch not valid');
  yield wbt.save();
  this.set('last-modified',wbt.updatedAt.toISOString());
  this.status = 200;
};

$.destroy = function *destroy(){
  yield models.Wbt.findByIdAndRemove(this.params.wbt);
  this.status=200;
};
