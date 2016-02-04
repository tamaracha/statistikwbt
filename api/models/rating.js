'use strict';
const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const RatingSchema = module.exports = new mongoose.Schema({
  unit: {
    type: ObjectId,
    required: true,
    ref: 'units'
  },
  user: {
    type: ObjectId,
    required: true,
    ref: 'users'
  },
  name: {
    type: String,
    required: true,
    enum: [
      'motivation',
      'success',
      'usability'
    ]
  },
  value: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
});
RatingSchema.index(
  {
    unit: 1,
    user: 1
  }
);
