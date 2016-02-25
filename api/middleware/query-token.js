'use strict';
module.exports = function *queryToken(next){
  if(!this.header['Authorization']){
    this.assert(this.query.token, 401, 'no token found');
    this.header.authorization = 'bearer '+this.query.token;
  }
  yield next;
};
