"use strict";
module.exports=/*@ngInject*/function($stateProvider,$urlRouterProvider,$locationProvider){
  $locationProvider.html5Mode(true);
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
    units: ["Units",function(Units){
      return Units.getList();
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
    unit: ["Units","$stateParams",function(Units,$stateParams){
      return Units.one($stateParams.unit).get();
    }]
  },
  controller: "unitCtrl as unit",
  data: {
    access: "user"
  }
})
.state("content.unit.topic",{
  url: "/:topic",
  templateUrl: "content/unit/topic/topic.html",
  controller: "topicCtrl as topic"
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