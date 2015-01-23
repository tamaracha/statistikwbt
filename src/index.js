/*jshint browserify: true, devel: true */
var angular=require("angular");
module.exports=angular.module("wbt",[
  require("angular-ui-router"),
  require("angular-bootstrap"),
  require("./components/remarkable"),
  require("./components/mathjax"),
  "ngMessages",
  "ngSanitize",
  "ngAria",
  require("./components/rest"),
  require("./components/d3"),
  require("./components/checklist-model/checklist-model")
])
.config(require("./wbt-config"))
.controller("wbtCtrl",require("./wbt-controller"))
.controller("unitCtrl",require("./content/unit/unit-controller"))
.controller("descriptionCtrl",require("./content/unit/description/description-controller"))
.controller("topicCtrl",require("./content/unit/topic/topic-controller"))
.controller("testCtrl",require("./content/unit/test/test-controller"))
.controller("itemCtrl",require("./content/unit/test/item/item-controller"))
.controller("akzeptanzCtrl",require("./content/unit/akzeptanz/akzeptanz-controller"))
.controller("downloadCtrl",require("./download/download-controller"))
.controller("userCtrl",require("./user/user-controller"))
.controller("loginCtrl",require("./login/login-controller"))
.controller("registerCtrl",require("./register/register-controller"))
.controller("fskCtrl",require("./user/fsk/fsk-controller"))
.run(["$rootScope",function($rootScope){
  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
    console.error(error);
  });
}])
.name;