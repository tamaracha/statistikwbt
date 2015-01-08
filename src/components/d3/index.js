var angular=require("angular");
module.exports=angular.module('d3',[])
.config(require("./boxplot/boxplot-decorator"))
.factory("d3",require("./d3-service"))
.directive("boxplot",require("./boxplot/boxplot-directive"))
.name;