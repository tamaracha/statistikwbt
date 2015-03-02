angular.module("wbt")
.factory("opencpu",function($http){
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