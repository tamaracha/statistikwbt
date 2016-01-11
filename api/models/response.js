'use strict';
const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
  test: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'tests'
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
}, {timestamps: true});
