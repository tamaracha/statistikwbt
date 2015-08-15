'use strict';
const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
module.exports = new mongoose.Schema({
  unit: {
    type: ObjectId,
    required: true,
    ref: 'units'
  },
  topic: {
    type: ObjectId,
    ref: 'unit.topic'
  },
  user: {
    type: ObjectId,
    ref: 'user',
    required: true
  }
});
