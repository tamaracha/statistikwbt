export default /*@ngInject*/function userCheckValidator($q,user){
  function link(scope,el,attrs,c){
    c.$parsers.push(function(value){
    
    });
    c.$asyncValidators.userCheck = function(value){
      const promise = user.check('email',value);
      switch(attrs.userCheck){
      case 'available':
        return promise.then(() => {
          return $q.reject('exists');
        },() => {
          return true;
        });
      case 'exists':
        return promise;
      }
    };
  }
  return {
    require: 'ngModel',
    restrict: 'A',
    link
  };
}
