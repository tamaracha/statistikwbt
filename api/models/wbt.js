'use strict';
const mongoose = require('mongoose');
const PageSchema = require('./page');
const UnitSchema = require('./unit');
module.exports = new mongoose.Schema({
  path: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  pages: [PageSchema],
  units: [UnitSchema]
}, {timeStamps: true, collection: 'wbt'});
