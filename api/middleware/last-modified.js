'use strict';
module.exports = function *created(next){
  yield next;
  if(this.status === 200 || this.status === 201){
    if(this.body && this.body.updatedAt && !this.header['last-modified']){
      this.lastModified = this.body.updatedAt;
    }
  }
};
