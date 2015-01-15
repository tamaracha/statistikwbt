var angular=require("angular");
module.exports=angular.module("rest",["restangular"])
.config(function(RestangularProvider){
  RestangularProvider.setBaseUrl("/api");
  RestangularProvider.setRestangularFields({id: "_id"});
  RestangularProvider.extendCollection("tests",function(collection){
    collection.aggregate=function(){
      var posts=[];
      _.forEach(collection,function(model){
        var post={};
        post.item=model._id;
        post.response={};
        switch(model.type){
          case "single":
            post.response.single=model.selected._id;
            break;
          case "multiple":
            post.response.multiple=[];
            _.forEach(model.choices,function(choice){
              if(choice.selected){post.response.multiple.push(choice._id);}
            });
            break;
        }
        posts.push(post);
      });
      return posts;
    };
    return collection;
  });
})
.run(require("./auth-interceptor"))
.factory("identity",require("./identity-service"))
.directive("userAvailable",require("./user-available-validator"))
.directive("userExists",require("./user-exists-validator"))
.directive("testItem",require("./test-item-directive"))
.name;