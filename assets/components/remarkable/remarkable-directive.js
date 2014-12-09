module.exports=/*@ngInject*/function(md){
  return {
    restrict: "A",
    scope: {
      md: "="
    },
    link: function($scope,$el){
      var render=function(val){
        $el.html(md.render(val));
      };
      render($scope.md);
      var mdWatch=$scope.$watch("md",render);
      $scope.$on("destroy",mdWatch());
    }
  };
};