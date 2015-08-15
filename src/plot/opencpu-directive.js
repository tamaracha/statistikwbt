export default /*@ngInject*/function opencpuDirective(opencpu){
  function link(scope,el,attrs,ctrl){
    let lastValid;
    function parse(val){
      if(!val || val.trim() === ''){
        return undefined;
      }
      try{
        lastValid = opencpu + val;
        ctrl.$setValidity('opencpu',true);
      }
      catch(e){
        ctrl.$setValidity('opencpu',false);
      }
      return lastValid;
    }
    function format(val){
      if(!val){
        return undefined;
      }
      return val.slice(opencpu.length);
    }
    ctrl.$parsers.push(parse);
    ctrl.$formatters.unshift(format);
    el.bind('blur',function(){
      el.val(format(ctrl.$modelValue));
      ctrl.$setValidity('json',true);
      scope.$apply();
    });
    scope.$watch(attrs.ngModel,function(val,oldVal){
      lastValid = lastValid || val;
      if(val !== oldVal){
        ctrl.$setViewValue(format(val));
        ctrl.$render();
      }
    },true);
  }
  return {
    restrict: 'A',
    require: 'ngModel',
    link
  };
}
