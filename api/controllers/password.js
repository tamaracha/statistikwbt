'use strict';
const models = require('../models');
const $ = module.exports = {};

$.change = function *change(){
  const oldPassword = this.request.body.old;
  const newPassword = this.request.body.new;
  this.assert(oldPassword,400,'current password not supplied');
  this.assert(newPassword,400,'new password not supplied');
  const user = yield models.User.findById(this.params.user).select('+password');
  this.assert(user,404,'user not found');
  const valid = yield user.validatePassword(oldPassword);
  this.assert(valid,401,'old password is not valid');
  user.password = newPassword;
  yield user.save();
  this.status = 200;
};
