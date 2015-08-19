'use strict';
const jwt=require('jsonwebtoken');
const config=require('config').get('jwt');

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
  return function(cb){
    return jwt.verify(token,config.secret,config.options,cb);
  };
};

module.exports.decode = function(token){
  return jwt.decode(token);
};

