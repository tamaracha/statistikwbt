var angular=require("angular");
module.exports=angular.module("mathjax",[])
.directive("mathjax",require("./mathjax-directive"))
.name;