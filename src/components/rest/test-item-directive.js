module.exports=/*@ngInject*/function(){
  return {
    scope: {
      item: "=",
      form: "="
    },
    template: '<ng-include src="template"/>',
    link: function(scope){
      var type="";
      switch(scope.item.type){
        case "single":
          type="single-choice";
          break;
        case "multiple":
          type="multiple-choice";
          break;
        case "fill":
          type="fill";
          break;
        case "reflect":
          type="reflect";
          break;
        default:
          type="single-choice";
          break;
      }
      scope.template="components/rest/"+type+".html"
    }
  };
};