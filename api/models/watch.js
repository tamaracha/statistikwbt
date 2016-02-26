'use strict';
const mongoose=require('mongoose');
module.exports = mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  videoid: String,
  listType: {
    type: String,
    enum: ['playlist', 'search', 'user']
  },
  list: String,
  user: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});
