var angular=require("angular");
module.exports=angular.module("remarkable",[])
.constant("Remarkable",require("remarkable"))
.provider("md",require("./remarkable-provider"))
.filter("md",function(md){
  return md.render;
})
.directive("md",require("./remarkable-directive"))
.name;