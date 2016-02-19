'use strict';
const mongoose=require('mongoose');
const ExampleSchema = require('./example');
const ExtraSchema = require('./extra');
module.exports = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'draft',
    enum: ['draft', 'final']
  },
  subtitle: String,
  body: {
    type: String,
    required: true
  },
  examples: [ExampleSchema],
  extras: [ExtraSchema]
}, {timestamps: true});
