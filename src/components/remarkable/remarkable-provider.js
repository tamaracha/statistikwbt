"use strict";
module.exports=function remarkableProvider(){
  var preset,options;
  preset="full";
  options={
  	html: true,
  quotes: "„“",
  breaks: true
  };
  this.preset=function(value){
    preset=value;
  };
  this.options=function(value){
    options=value;
  };
  this.$get=["Remarkable",function(Remarkable){
    return new Remarkable(preset,options);
  }];
};