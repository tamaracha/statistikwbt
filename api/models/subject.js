'use strict';
const mongoose=require('mongoose');
module.exports = mongoose.Schema({
  status: {
    type: String,
    default: 'draft',
    enum: ['draft', 'final']
  },
  group: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  }
});
