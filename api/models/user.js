'use strict';
const mongoose=require('mongoose');
const username = require('config').get('username');
const bluebird = require('bluebird');
const bcrypt = require('bcrypt-nodejs');
bluebird.promisifyAll(bcrypt);
const validate=require('../services/validate');
const ObjectId=mongoose.Schema.Types.ObjectId;
const DoneSchema = require('./done');

const UserSchema = module.exports = new mongoose.Schema({
  password: {
    type: String,
    select: false,
    required: true,
    minLength: 8
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['user','author']
  },
  profile: {
    nickname: String,
    age: Number,
    sex: {
      type: String,
      enum: ['male','female']
    },
    subject: String,
    reasons: [{
      type: String,
      enum: ['interesse','langeweile','klausur', 'author']
    }]
  },
  akzeptanz: {
    ratings: [{
      type: ObjectId,
      ref: 'rating'
    }],
    comments: [{
      type: ObjectId,
      ref: 'comment'
    }]
  },
  done: [DoneSchema],
  views: [{
    type: ObjectId,
    ref: 'views'
  }]
}, {timestamps: true});
if(username === 'email'){
  UserSchema.path('email', {
    type: String,
    required: true,
    maxlength: 50,
    validate: validate.emailValidator,
    unique: true
  });
}
if(username === 'kennung'){
  UserSchema.path('kennung',{
    type: String,
    required: true,
    minlength: 6,
    maxlength: 6,
    unique: true
  });
}
UserSchema.pre('save',function(cb){
  const user = this;
  if(!user.isModified('password')){return cb();}
  bcrypt.hash(user.password,null,null,function(err,hash){
    if(err){return cb(err);}
    user.password = hash;
    return cb();
  });
});
UserSchema.methods.validatePassword=function(password){
  const user = this;
  return bcrypt.compareAsync(password,user.password);
};
