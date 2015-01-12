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
  controller: ["units",function(units){
    this.units=units;
  }],
  controllerAs: "content",
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
  onEnter: ["Restangular","identity","unit",function(Restangular,identity,unit){
    if(!identity.authenticated()){return;}
    var post={};
    post.unit=unit._id;
    post.user=identity.data()._id;
    return Restangular.all("views").post(post);
  }],
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
.state("content.unit.test",{
  url: "/test",
  templateUrl: "content/unit/test/test.html",
  controller: ["unit",function(unit){
    this.test=unit.test;
  }],
  controllerAs: "test"
})
.state("content.unit.topic",{
  url: "/:topic",
  templateUrl: "content/unit/topic/topic.html",
  controller: ["topic",function(topic){
    this.topic=topic;
  }],
  controllerAs: "topic",
  resolve: {
    topic: ["Restangular","$stateParams",function(Restangular,$stateParams){
      return Restangular.one("units",$stateParams.unit).one("topics",$stateParams.topic).get();
    }]
  },
  onEnter: ["unit","topic","Restangular","identity",function(unit,topic,Restangular,identity){
    if(!identity.authenticated()){return;}
    var post={};
    post.unit=unit._id;
    post.topic=topic._id;
    post.user=identity.data()._id;
    return Restangular.all("views").post(post);
  }]
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
      return _.find(topic.examples,{title: $stateParams.example});
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
      return _.find(topic.extras,{title: $stateParams.extra});
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