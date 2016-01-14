'use strict';
const models = require('../models');
const basicAuth = require('basic-auth');
const username = require('config').get('username');

module.exports = function *auth(next){
  const login = basicAuth(this.request);
  this.assert(login,'no authorization found',401);
  this.assert(typeof login.name === 'string','name is not a string',500);
  this.assert(typeof login.pass === 'string','pass is not a string',500);
  const user = yield models.User.findOne(null, '+password')
  .where(username, login.name)
  .exec();
  this.assert(user, 404, username+' not found');
  const isMatch = yield user.validatePassword(login.pass);
  this.assert(isMatch,'incorrect password',401);
  this.state.user = user;
  yield next;
};
