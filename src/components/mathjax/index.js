var angular=require("angular");
module.exports=angular.module("mathjax",[])
.provider("mathjax",require("./mathjax-provider"))
.directive("mathjax",require("./mathjax-directive"))
.name;