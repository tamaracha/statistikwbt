export default function userCheckValidator($q,user){
  function link(scope,el,attrs,c){
    c.$parsers.push(function(value){
      return value.toLowerCase();
    });
    c.$asyncValidators.userCheck = function(value){
      const promise = user.check(scope.formState.username, value);
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
userCheckValidator.$inject = ['$q', 'user'];
