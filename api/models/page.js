'use strict';
const mongoose=require('mongoose');

module.exports = new mongoose.Schema({
  path: {
    type: String,
    required: true,
    enum: ['home', 'content', 'download', 'author', 'contact', 'impressum']
  },
  menu: String,
  icon: String,
  title: String,
  active: Boolean,
  body: String
}, {timestamps: true});
