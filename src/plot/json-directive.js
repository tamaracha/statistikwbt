import angular from 'angular';
export default /*@ngInject*/function jsonDirective(){
  function link(scope,el,attrs,ctrl){
    let lastValid;
    function parse(val){
      if(!val || val.trim() === ''){
        return undefined;
      }
      try{
        lastValid = angular.fromJson(val);
        ctrl.$setValidity('json',true);
      }
      catch(e){
        ctrl.$setValidity('json',false);
      }
      return lastValid;
    }
    function format(val){
      return angular.toJson(val,true);
    }
    ctrl.$parsers.push(parse);
    ctrl.$formatters.unshift(format);
    el.bind('blur',function(){
      el.val(format(ctrl.$modelValue));
      ctrl.$setValidity('json',true);
      scope.$apply();
    });
    const clean = scope.$watch(attrs.ngModel,function(val,oldVal){
      lastValid = lastValid || val;
      if(val !== oldVal){
        ctrl.$setViewValue(format(val));
        ctrl.$render();
      }
    },true);
    scope.$on('$destroy',clean);
  }
  return {
    restrict: 'A',
    require: 'ngModel',
    link
  };
}
