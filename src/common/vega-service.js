angular.module("wbt")
.provider("opencpu",function($http){
  var host="public.opencpu.org";
  this.url=function(url){
    host=url;
  };
  this.$get=function(){
    return {
      host: host,
      library: function(){
      
      },
      github: function(){
      
      }
    };
  };
  return {
    spec: function(name){
      return $http.get("api/vega-specs/"+name)
      .then(function(res){
        return res.data;
      });
    },
    data: function(name,query){
      var dataset="api/datasets/"+name;
      var config={};
      if(query){config.params=query;}
      return $http.get(dataset,config)
      .then(function(res){
        return res.data;
      });
    }
  };
});