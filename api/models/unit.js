'use strict';
const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const TopicSchema = require('./topic');
const UnitSchema = module.exports = new mongoose.Schema({
  position: Number,
  title: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    default: 'draft',
    enum: ['draft', 'final']
  },
  subtitle: String,
  description: {
    type: String,
    required: true
  },
  requires: [{
    type: ObjectId,
    ref: 'unit'
  }],
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
  },
  views: [{
    type: ObjectId,
    ref: 'view'
  }],
  akzeptanz: {
    ratings: [{
      type: ObjectId,
      ref: 'rating'
    }],
    comments: [{
      type: ObjectId,
      ref: 'comment'
    }]
  }
}, {timestamps: true});
