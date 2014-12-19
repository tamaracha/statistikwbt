"use strict";
var angular=require("angular");
module.exports=angular.module("wbt",[
  require("angular-ui-router"),
  require("angular-bootstrap"),
  require("./components/remarkable"),
  "ngMessages",
  "ngSanitize",
  "ngAria",
  require("./components/rest"),
  require("./components/ui")
  //require("./components/d3")
])
.config(require("./wbt-config"))
.controller("contentCtrl",require("./content/content-controller"))
.controller("unitCtrl",require("./content/unit/unit-controller"))
.controller("topicCtrl",require("./content/unit/topic/topic-controller"))
.controller("downloadCtrl",require("./download/download-controller"))
.controller("userCtrl",require("./user/user-controller"))
.controller("loginCtrl",require("./login/login-controller"))
.controller("registerCtrl",require("./register/register-controller"))
.run(function($rootScope,$state,$stateParams,authService){
  $rootScope.$state=$state;
  $rootScope.$stateParams=$stateParams;
  $rootScope.authService=authService;
  var handleStateError=function(event, toState, toParams, fromState, fromParams, error){
    console.log(error);
  };
  $rootScope.$on('$stateChangeError',handleStateError);
  authService.identity()
  .then(function(data){
    $rootScope.identity=data;
  });
})
.name;