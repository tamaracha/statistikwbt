'use strict';
const mongoose = require('mongoose');
const WbtSchema = module.exports = new mongoose.Schema({
  path: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  pages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Page'
  }],
  units: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit'
  }]
}, {timeStamps: true, collection: 'wbt'});
