angular.module("wbt")
.directive("mathJax",function(){
  return {
    restrict: "A",
    scope: false,
    link: function($scope,$element){
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,$element[0]]);
    }
  };
});