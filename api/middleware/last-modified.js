'use strict';
module.exports = function *created(next){
  yield next;
  if(this.status === 200 || this.status === 201){
    if(this.body && this.body.updatedAt && !this.header['last-modified']){
      this.lastModified = this.body.updatedAt;
    }
    if(this.body && this.body.status === 'final' || this.state.status === 'final'){
      this.cacheControl = {
        maxAge: 60*60*24*30
      };
    }
  }
};
