angular.module("wbt")
.config(function($stateProvider,$urlRouterProvider,$locationProvider,$compileProvider,RestangularProvider,$httpProvider){
  $locationProvider.html5Mode(true);
  $compileProvider.debugInfoEnabled(false);
  $httpProvider.interceptors.push("authInterceptor");
  RestangularProvider.setBaseUrl("/statistikwbt/api");
  RestangularProvider.setRestangularFields({
    id: "_id"
  });
$stateProvider.state("home",{
  url: "/home",
  templateUrl: "home/home.html",
})
.state("content",{
  url: "/content",
  templateUrl: "content/content.html",
  resolve: {
    units: function(content,identity){
      return content.units();
    }
  },
  controller: "contentCtrl",
  controllerAs: "content"
})
.state("content.unit",{
  url: "/:unit",
  templateUrl: "content/unit/unit.html",
  resolve: {
    unit: function(content,$stateParams){
      return content.unit($stateParams.unit);
    }
  },
  controller: "unitCtrl",
  controllerAs: "unit",
  abstract: true
})
.state("content.unit.description",{
  url: "/description",
  templateUrl: "content/unit/description/description.html",
  onEnter: ["content","unit",function(content,unit){
    return content.view(unit._id);
  }],
})
.state("content.unit.test",{
  url: "/test",
  templateUrl: "content/unit/test/test.html",
  resolve: {
    items: function(content,$stateParams){
      return content.tests($stateParams.unit);
    },
    guesses: function(content,unit,items){
      return content.guesses(unit._id,items);
    }
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
    topic: function(content,$stateParams){
      return content.topic($stateParams.unit,$stateParams.topic);
    }
  },
  onEnter: ["content","unit","topic",function(content,unit,topic){
    return content.view(unit._id,topic._id);
  }]
})
.state("content.unit.topic.example",{
  url: "/example/:example",
  template:
    '<h3 ng-bind="example.title"></h3><div math-jax md="example.example.body"></div>',
  controller: ["example",function(example){
    this.example=example;
    this.title=example.subtitle ? example.title+": "+example.subtitle : example.title;
  }],
  controllerAs: "example",
  resolve: {
    example: function(topic,$stateParams){
      return _.find(topic.examples,{title: $stateParams.example});
    }
  }
})
.state("content.unit.topic.extra",{
  url: "/extra/:extra",
  template:
    '<h3 ng-bind="extra.title"></h3><div math-jax md="extra.extra.body"></div>',
  controller: ["extra",function(extra){
    this.extra=extra;
    this.title=extra.subtitle ? extra.title+": "+extra.subtitle : extra.title;
  }],
  controllerAs: "extra",
  resolve: {
    extra: function(topic,$stateParams){
      return _.find(topic.extras,{title: $stateParams.extra});
    }
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
    units: function(content){
      return content.units();
    },
    token: function(identity){
      return identity.authenticatedAsync()
      .catch(identity.login);
    }
  },
  controller: "downloadCtrl",
  controllerAs: "download"
})
.state("contact",{
  url: "/contact",
  templateUrl: "contact/contact.html"
})
.state("register",{
  url: "/register",
  templateUrl: "register/register.html",
  controller: "registerCtrl",
  controllerAs: "register"
})
.state("user",{
  url: "/user/:id",
  templateUrl: "user/user.html",
  controller: "userCtrl",
  controllerAs: "user"
});
  $urlRouterProvider.otherwise("/home");
})
.run(function($rootScope){
  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
    console.error(error);
  });
});