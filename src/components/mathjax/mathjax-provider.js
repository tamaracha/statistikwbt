module.exports=/*@ngInject*/function mathjaxProvider(){
  var mathjax=require("mathjax");
  var config={
    tex2jax: {
      inlineMath: [
        ['$','$'],
        ['\\(','\\)']
      ]
    }
  };
  this.config=function(config){
    mathjax.Hub.Config(config);
  };
  this.$get=function(){
    mathjax.Hub.Config(config);
    return mathjax;
  };
};