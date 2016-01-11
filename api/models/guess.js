'use strict';
const mongoose=require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const ResponseSchema = require('./response');

module.exports = new mongoose.Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: 'users'
  },
  unit: {
    type: ObjectId,
    ref: 'units',
    required: true
  },
  responses: [ResponseSchema]
}, {timestamps: true});
