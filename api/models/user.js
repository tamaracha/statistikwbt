'use strict';
const mongoose=require('mongoose');
const bluebird = require('bluebird');
const bcrypt = require('bcrypt-nodejs');
bluebird.promisifyAll(bcrypt);
const validate=require('../services/validate');
const ObjectId=mongoose.Schema.Types.ObjectId;
const DoneSchema = require('./done');

const UserSchema = module.exports = new mongoose.Schema({
  email: {
    type: String,
    maxlength: 50,
    validate: validate.emailValidator
  },
  kennung: {
    type: String,
    maxlength: 6
  },
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
UserSchema.index(
  {email: 1},
  {unique: true, partialFilterExpression: {email: {$exists: true}}}
);
UserSchema.index(
  {kennung: 1},
  {unique: true, partialFilterExpression: {kennung: {$exists: true}}}
);
UserSchema.pre('validate', function(cb){
  if(this.email || this.kennung){return cb();}
  return cb(Error('Neither email nor kennung is supplied'));
});
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
  return bcrypt.compareAsync(password,this.password);
};
