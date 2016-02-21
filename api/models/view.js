'use strict';
const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const ViewSchema = module.exports = new mongoose.Schema({
  unit: {
    type: ObjectId,
    required: true,
    ref: 'Unit'
  },
  topic: {
    type: ObjectId,
    ref: 'Topic'
  },
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
});
ViewSchema.virtual('createdAt')
.get(function(){
  return this._id.getTimestamp();
});
ViewSchema.set('toJSON', {virtuals: true});
