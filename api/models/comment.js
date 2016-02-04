'use strict';
const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;

const CommentSchema = module.exports = new mongoose.Schema({
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
  value: {
    type: String,
    required: true
  }
});
CommentSchema.index(
  {
    unit: 1,
    user: 1
  }
);
