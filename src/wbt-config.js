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
    units: ["content",function(content){
      return content.units();
    }]
  },
  controller: ["units",function(units){
    this.units=units;
  }],
  controllerAs: "content"
})
.state("content.unit",{
  url: "/:unit",
  templateUrl: "content/unit/unit.html",
  resolve: {
    unit: ["content","$stateParams",function(content,$stateParams){
      return content.unit($stateParams.unit);
    }]
  },
  controller: "unitCtrl",
  controllerAs: "unit",
  abstract: true
})
.state("content.unit.description",{
  url: "/description",
  templateUrl: "content/unit/description/description.html",
  controller: "descriptionCtrl",
  onEnter: ["content","unit",function(content,unit){
    return content.view(unit._id);
  }],
})
.state("content.unit.test",{
  url: "/test",
  templateUrl: "content/unit/test/test.html",
  resolve: {
    items: ["content","$stateParams",function(content,$stateParams){
      return content.tests($stateParams.unit);
    }],
    guesses: ["content","unit","items",function(content,unit,items){
      return content.guesses(unit._id,items)
    }]
  },
  controller: "testCtrl",
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
    topic: ["content","$stateParams",function(content,$stateParams){
      return content.topic($stateParams.unit,$stateParams.topic);
    }]
  },
  onEnter: ["content","unit","topic",function(content,unit,topic){
    return content.view(unit._id,topic._id);
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
  resolve: {
    units: /*@ngInject*/function(content){
      return content.units();
    },
    token: /*@ngInject*/function(identity){
      return identity.authenticatedAsync()
      .catch(identity.login);
    }
  },
  controller: "downloadCtrl",
  controllerAs: "download"
})
.state("contact",{
  url: "/contact",
  templateUrl: "contact/contact.html",
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