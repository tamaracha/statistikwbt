'use strict';
const tokenize = require('../services/tokenize');

module.exports.new=function *(){
  const token = tokenize.sign(this.state.user);
  this.body={
    token: token,
    _id: this.state.user._id,
    role: this.state.user.role
  };
  this.cacheControl = {
    nocache: true
  };
};
