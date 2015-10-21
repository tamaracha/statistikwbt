'use strict';
const models = require('../models');
const fs = require('fs');
const $ = module.exports={};

$.index = function *(){
  const images = yield models.Image.find({},'name');
  this.body = images;
}

$.create = function *(){
  const file = this.request.body.files.file;
  const image = new models.Image();
  image.name = file.name;
  image.img.data = fs.readFileSync(file.path);
  image.img.contentType = file.type;
  yield image.save();
  delete image.img;
  this.body = image;
};

$.show = function *(){
  const image = yield models.Image.findOne({name: this.params.image});
  this.assert(image,404);
  this.response.type = image.img.contentType;
  this.body = image.img.data;
};
