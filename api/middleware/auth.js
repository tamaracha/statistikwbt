'use strict';
const models = require('../models');
const basicAuth = require('basic-auth');

module.exports = function *auth(next){
  const login = basicAuth(this.request);
  this.assert(login,'no authorization found',401);
  this.assert(typeof login.name === 'string','name is not a string',500);
  this.assert(typeof login.pass === 'string','pass is not a string',500);
  const user = yield models.User.findOne({email: login.name},'+password').exec();
  this.assert(user,'email not found',404);
  const isMatch = yield user.validatePassword(login.pass);
  this.assert(isMatch,'incorrect password',401);
  this.state.user = user;
  yield next;
};
