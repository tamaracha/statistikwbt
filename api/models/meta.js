'use strict';
const mongoose=require('mongoose');

module.exports = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
    enum: ['home','content','download','author','contact','impressum']
  },
  menu: String,
  icon: String,
  title: String,
  position: Number,
  active: Boolean,
  body: String
});
