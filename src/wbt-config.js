"use strict";
module.exports=/*@ngInject*/function($stateProvider,$urlRouterProvider,$locationProvider,$compileProvider){
  $locationProvider.html5Mode(true);
  $compileProvider.debugInfoEnabled(false);
$stateProvider.state("home",{
  url: "/home",
  templateUrl: "home/home.html",
  data: {
    access: "public"
  }
})
.state("content",{
  url: "/content",
  templateUrl: "content/content.html",
  resolve: {
    units: ["Restangular",function(Restangular){
      return Restangular.all("units").getList();
    }]
  },
  controller: "contentCtrl as content",
  data: {
    access: "public"
  }
})
.state("content.unit",{
  url: "/:unit",
  templateUrl: "content/unit/unit.html",
  resolve: {
    unit: ["Restangular","$stateParams",function(Restangular,$stateParams){
      return Restangular.one("units",$stateParams.unit).get();
    }]
  },
  controller: "unitCtrl as unit",
  abstract: true,
  data: {
    access: "user"
  }
})
.state("content.unit.description",{
  url: "/description",
  templateUrl: "content/unit/description/description.html",
  controller: "descriptionCtrl"
})
.state("content.unit.topic",{
  url: "/:topic",
  templateUrl: "content/unit/topic/topic.html",
  controller: ["topic",function(topic){
    this.topic=topic;
  }],
  controllerAs: "topic",
  resolve: {
    topic: ["unit","$stateParams",function(unit,$stateParams){
      return _.find(unit.topics,{_id: $stateParams.topic});
    }]
  }
})
.state("content.unit.topic.example",{
  url: "/example/:example",
  template: '<h3 ng-bind="example.example|title"></h3><div md="example.example.body"></div>',
  controller: ["example",function(example){
    this.example=example;
  }],
  controllerAs: "example",
  resolve: {
    example: ["topic","$stateParams",function(topic,$stateParams){
      console.log($stateParams.example,topic.title);
      return _.find(topic.examples,{_id: $stateParams.example});
    }]
  }
})
.state("content.unit.topic.extra",{
  url: "/extra/:extra",
  template: '<h3 ng-bind="extra.extra|title"></h3><div md="extra.extra.body"></div>',
  controller: ["extra",function(extra){
    this.extra=extra;
  }],
  controllerAs: "extra",
  resolve: {
    extra: ["topic","$stateParams",function(topic,$stateParams){
      return _.find(topic.extras,{_id: $stateParams.extra});
    }]
  }
})
.state("content.unit.topic.test",{
  url: "/test/:test",
  template: '<h3 ng-bind="test.test.title"></h3>',
  controller: ["test",function(test){
    this.test=test;
  }],
  controllerAs: "test",
  resolve: {
    test: ["topic","$stateParams",function(topic,$stateParams){
      return _.find(topic.tests,{_id: $stateParams.test});
    }]
  }
})
.state("software",{
  url: "/software",
  templateUrl: "software/software.html",
  data: {
    menuText: "Statistiksoftware"
  }
})
.state("download",{
  url: "/download",
  templateUrl: "download/download.html",
  controller: "downloadCtrl as download",
  data: {
    roles: ["user"]
  }
})
.state("contact",{
  url: "/contact",
  templateUrl: "contact/contact.html",
  data: {
    access: "public"
  }
})
.state("login",{
  url: "/login",
  templateUrl: "login/login.html",
  controller: "loginCtrl as login",
  data: {
    access: "public"
  }
})
.state("register",{
  url: "/register",
  templateUrl: "register/register.html",
  controller: "registerCtrl as register",
  data: {
    access: "public"
  }
})
.state("user",{
  url: "/user/:id",
  templateUrl: "user/user.html",
  controller: "userCtrl as user",
  data: {
    access: "user"
  }
});
  $urlRouterProvider.otherwise("/home");
};