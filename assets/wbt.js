/*
@codekit-prepend "components/ui/ui-module-ck.js"
@codekit-prepend "components/rest/rest-module-ck.js"
@codekit-prepend "components/d3/d3-ck.js"
*/

(function(){
"use strict";
angular.module("wbt",[
	"ui.router",
	"ui.bootstrap",
	"ngMessages",
	"ngSanitize",
	"ngAria",
	"rest",
	"ui",
	"d3"
])

.config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider,$urlRouterProvider,$locationProvider){
	$locationProvider.html5Mode(true);
$stateProvider.state("home",{
	url: "/home",
	templateUrl: "home/home.html",
	data: {
		menuText: "Statistik für Jedermann",
		icon: "glyphicon-home"
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
		menuText: "Übersicht"
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
	controller: "unitCtrl as unit"
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
.state("contact",{
	url: "/contact",
	templateUrl: "contact/contact.html",
	data: {
		menuText: "Kontakt und Impressum"
	}
})
.state("user",{
	url: "/user",
	template: "<ui-view/>",
	controller: "userCtrl as user",
	abstract: true
})
.state("user.login",{
	url: "/login",
	templateUrl: "user/login/login.html",
	controller: "loginCtrl as login",
	data: {
		menuText: "Anmelden",
		icon: "glyphicon-log-in"
	}
})
.state("user.register",{
	url: "/register",
	templateUrl: "user/register/register.html",
	controller: "registerCtrl as register",
	data: {
		menuText:"Registrieren",
		icon: "glyphicon-registration-mark"
	}
})
.state("user.profile",{
	url: "/:id?token",
	templateUrl: "user/profile/profile.html",
	data: {
		icon: "glyphicon-user"
	}
});
	$urlRouterProvider.otherwise("/home");
}]);

/*
.run(["$rootScope",function($rootScope){
	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
		console.log(error);
	});
}]);
*/
}());

/*
@codekit-append "wbt-controller.js"
@codekit-append "content/content-controller.js"
@codekit-append "content/unit/unit-controller.js"
@codekit-append "content/unit/topic/topic-controller.js"
@codekit-append "user/user-controller.js"
@codekit-append "user/login/login-controller.js"
@codekit-append "user/register/register-controller.js"
*/
