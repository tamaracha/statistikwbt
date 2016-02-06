'use strict';
const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const TopicSchema = require('./topic');
module.exports = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  description: {
    type: String,
    required: true
  },
  requires: [ObjectId],
  topics: [TopicSchema],
  test: {
    active: {
      type: Boolean,
      default: false
    },
    shuffle: [{
      type: String,
      enum: ['items','choices']
    }]
  }
}, {timestamps: true});
