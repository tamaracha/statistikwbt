module.exports=function(){
  return {
    restrict: "A",
    scope: false,
    link: function($scope,$element){
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,$element[0]]);
    }
  };
};