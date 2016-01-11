'use strict';
const mongoose = require('mongoose');
const $ = require('../services/validate');
const ChoiceSchema = require('./choice');
const TestSchema = module.exports = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['multiple','single','input']
  },
  choices: [ChoiceSchema],
  feedback_right: String,
  feedback_wrong: String,
  unit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'units',
    index: true
  }
}, {timestamps: true});
TestSchema.path('choices').validate($.notEmpty);
