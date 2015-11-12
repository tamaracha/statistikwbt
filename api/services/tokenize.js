'use strict';
const bluebird = require('bluebird');
const jwt=require('jsonwebtoken');
const config=require('config').get('jwt');
const verify = bluebird.promisify(jwt.verify);

module.exports.sign = function(user){
  return jwt.sign(
    {
      _id: user._id,
      role: user.role
    },
    config.secret,
    config.options
  );
};

module.exports.verify = function(token){
  return verify(token,config.secret,config.options);
};

module.exports.decode = function(token){
  return jwt.decode(token);
};

