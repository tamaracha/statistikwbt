angular.module("wbt")
.directive("md",function(remarkable){
  return {
    restrict: "A",
    scope: {
      md: "="
    },
    link: function($scope,$el){
      var render=function(val){
        $el.html(remarkable.render(val));
      };
      render($scope.md);
      var mdWatch=$scope.$watch("md",render);
      $scope.$on("destroy",mdWatch());
    }
  };
});