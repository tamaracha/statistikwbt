angular.module("wbt")
.provider("remarkable",function(){
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
  this.$get=function(){
    return new Remarkable(preset,options);
  };
});