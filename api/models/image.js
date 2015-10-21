'use strict';
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    data: Buffer,
    contentType: String
  }
});
