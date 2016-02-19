'use strict';
const mongoose = require('mongoose');
const ChoiceSchema = require('./choice');
module.exports = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'draft',
    enum: ['draft', 'final']
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
