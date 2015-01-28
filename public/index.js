/*jshint devel: true */
angular.module("wbt",[
  "ui.router",
  "ui.bootstrap",
  "ngMessages",
  "ngSanitize",
  "ngAria",
  "restangular"
]);
angular.module("wbt")
.run(["Restangular", "$window", "identity", function(Restangular,$window,identity){
  Restangular.addFullRequestInterceptor(function(el,op,what,url,headers){
    if(headers.Authorization){return;}
    var token=$window.localStorage.getItem("authToken");
    if(!token){return;}
    headers.Authorization="Bearer "+token;
    return {headers: headers};
  });
  Restangular.setErrorInterceptor(function(response,deferred,handler){
    if(response.status===401){
      var token=$window.localStorage.getItem("authToken");
      if(token){return;}
      var loginModal=identity.login();
      return loginModal.result.then(function(){
        return true;
      },function(){
        return false;
      });
    }
    return true;
  });
}]);
angular.module("wbt")
.controller("wbtCtrl",["$state", "$stateParams", "identity", function($state,$stateParams,identity){
  this.$state=$state;
  this.$stateParams=$stateParams;
  this.identity=identity;
  identity.init()
  .then(identity.get)
  .catch(identity.inauthenticate);
}]);
angular.module("wbt")
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$compileProvider", "RestangularProvider", function($stateProvider,$urlRouterProvider,$locationProvider,$compileProvider,RestangularProvider){
  $locationProvider.html5Mode(true);
  $compileProvider.debugInfoEnabled(false);
  RestangularProvider.setBaseUrl("/api");
$stateProvider.state("home",{
  url: "/home",
  templateUrl: "home/home.html",
})
.state("content",{
  url: "/content",
  templateUrl: "content/content.html",
  resolve: {
    units: ["content", function(content){
      return content.units();
    }]
  },
  controller: "contentCtrl",
  controllerAs: "content"
})
.state("content.unit",{
  url: "/:unit",
  templateUrl: "content/unit/unit.html",
  resolve: {
    unit: ["content", "$stateParams", function(content,$stateParams){
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
  onEnter: ["content","unit",function(content,unit){
    return content.view(unit._id);
  }],
})
.state("content.unit.test",{
  url: "/test",
  templateUrl: "content/unit/test/test.html",
  resolve: {
    items: ["content", "$stateParams", function(content,$stateParams){
      return content.tests($stateParams.unit);
    }],
    guesses: ["content", "unit", "items", function(content,unit,items){
      return content.guesses(unit._id,items);
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
    topic: ["content", "$stateParams", function(content,$stateParams){
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
    example: ["topic", "$stateParams", function(topic,$stateParams){
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
    extra: ["topic", "$stateParams", function(topic,$stateParams){
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
    units: ["content", function(content){
      return content.units();
    }],
    token: ["identity", function(identity){
      return identity.authenticatedAsync()
      .catch(identity.login);
    }]
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
}])
.run(["$rootScope", function($rootScope){
  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
    console.error(error);
  });
}]);
angular.module("wbt")
.factory("content",["Restangular", "$modal", function(Restangular,$modal){
  var Units=Restangular.all("units");
  var units=function(){
    return Units.withHttpConfig({cache: true}).getList();
  };
  var unit=function(unit){
    return Units.withHttpConfig({cache: true}).get(unit);
  };
  var topic=function(unit,topic){
    return Units.one(unit).one("topics",topic).withHttpConfig({cache: true}).get();
  };
  var akzeptanz=function(unit){
    return $modal.open({
      templateUrl: "content/unit/akzeptanz/akzeptanz.html",
      controller: "akzeptanzCtrl",
      controllerAs: "akzeptanz",
      resolve: {
        unit: function(){return unit;},
        summary: function(){
          return unit.one("akzeptanz","summary").get();
        }
      }
    });
  };
  var rate=function(unit,name,value){
    var rating={
      unit: unit,
      name: name,
      value: value
    };
    return Restangular.all("ratings").post(rating);
  };
  var comment=function(unit,value){
    var comment={
      unit: unit,
      value: value
    };
    return Restangular.all("comments").post(comment);
  };
  var tests=function(unit){
    return Units.one(unit).withHttpConfig({cache: true}).getList("tests");
  };
  var guesses=function(unit,items){
    return Units.one(unit).one("guesses","summary").get()
    .then(function(guesses){
      _.forEach(guesses.plain(),function(guess,key){
        var item=_.find(items,{_id: key});
        if(!item){return;}
        switch(item.type){
          case "single":
            var choice=_.find(item.choices,{_id: guess.single});
            guesses[key]=choice;
            break;
          case "multiple":
            var tmp=item.choices;
            _.forEach(tmp,function(choice,index){
              if(_.contains(guess.multiple,choice._id)){tmp[index].selected=true;}
              else{tmp[index].selected=false;}
            });
            guesses[key]=tmp;
          break;
        }
      });
      return guesses.plain();
    });
  };
  var solve=function(unit,item,choice){
    var guess={
      unit: unit,
      item: item._id,
      response: {}
    };
    switch(item.type){
      case "single":
        guess.response.single=choice._id;
        break;
      case "multiple":
        choice=_.filter(choice,"selected");
        guess.response.multiple=_.map(choice,"_id");
        break;
      case "input":
        guess.response.input=choice;
        break;
    }
    return Restangular.all("guesses").post(guess);
  };
  var maxPoints=function(items){
    return _.reduce(items,function(points,item){
      switch(item.type){
        case "single":
          return points+1;
        case "multiple":
          return points+item.choices.length;
        default:
          return points+1;
      }
    },0);
  };
  var points=function(guesses){
    var points=_.reduce(guesses,function(points,guess){
      if(_.isArray(guess)){
        var pointsMultiple=_.reduce(guess,function(sum,choice){
          return choice.correct===choice.selected ? sum+1 : sum;
        },0);
        return points+pointsMultiple;
      }
      if(_.isObject(guess)){
        return guess.correct ? points+1 : points;
      }
    },0);
    return points;
  };
  var type=function(item){
    switch(item.type){
      case "single":
        return {};
      case "multiple":
        var choices=item.choices;
        _.forEach(choices,function(choice){
          choice.selected=false;
        });
        return choices;
      case "input":
        return "";
      default:
        return {};
    }
  };
  var view=function(unit,topic){
    var view={unit: unit};
    if(topic){view.topic=topic;}
    return Restangular.all("views").post(view);
  };
  return {
    units: units,
    unit: unit,
    topic: topic,
    akzeptanz: akzeptanz,
    rate: rate,
    comment: comment,
    tests: tests,
    guesses: guesses,
    solve: solve,
    maxPoints: maxPoints,
    points: points,
    type: type,
    view: view
  };
}]);
angular.module("wbt")
.factory("identity",["$window", "$q", "Restangular", "$modal", function($window,$q,Restangular,$modal){
  var Users,Tokens,_id,_token,_authenticated,_data;
  Users=Restangular.all("users");
  Tokens=Restangular.all("tokens");
  _id=null;
  _token=null;
  _authenticated=false;

  var init=function(){
    var id,token;
    id=$window.localStorage.getItem("id");
    token=$window.localStorage.getItem("authToken");
    return $q(function(resolve,reject){
      if(id!==null&&token!==null){
        _id=id;
        _token=token;
        _authenticated=true;
        return resolve(_authenticated);
      }
      else{return reject("inauthenticated");}
    });
  };
  var authenticated=function(){return _authenticated;};
  var authenticatedAsync=function(){
    return $q(function(resolve,reject){
      return _authenticated ? resolve(true) : reject(false);
    });
  };
  var token=function(){return _token;};
  var data=function(){return _data;};
  var authenticate=function(form){
    var email,password;
    email=form.email;
    password=form.password;
    return $q(function(resolve,reject){
      if(!email||!password){return reject("form incomplete");}
      return resolve(Tokens.get("login",{},{
        Authorization: email+":"+password
      })
      .then(function(result){
        var id,token;
        id=result._id;
        token=result.token;
        if(id){
          _id=id;
          $window.localStorage.setItem("id",id);
        }
        if(token){
          _token=token;
          $window.localStorage.setItem("authToken",token);
        }
        if(id!==null&&token!==null){_authenticated=true;}
        return id;
      }));
    });
  };
  var inauthenticate=function(){
    _id=null;
    $window.localStorage.removeItem("id");
    _token=null;
    $window.localStorage.removeItem("authToken");
    _authenticated=false;
    _data=null;
  };
  var get=function(){
    return Users.get(_id)
    .then(function(result){
      _data=result;
      return result;
    });
  };
  var update=function(){
    if(!_data){return;}
    return _data.put();
  };
  var remove=function(){
    return _data.remove();
  };
  var create=function(form){
    return Users.post(form)
    .then(function(result){
      _data=result;
      return result;
    });
  };
  var login=function(){
    $modal.open({
      templateUrl: "login/login.html",
      controller: "loginCtrl",
      controllerAs: "login"
    });
  };
  var fsk=function(){
    return $modal.open({
      templateUrl: "user/fsk/fsk.html",
      controller: "fskCtrl",
      controllerAs: "fsk",
      size: "lg"
    });
  };
  var createFsk=function(sessko){
    if(!_data.fsk){_data.fsk=[];}
    _data.fsk.push({sessko: sessko});
    return _data.patch({fsk: _data.fsk});
  };
  var complete=function(unit){
    return _.contains(_data.complete,unit);
  };
  var setComplete=function(unit){
    if(!_data.complete){_data.complete=[];}
    _data.complete.push(unit);
    return _data.patch({complete: _data.complete});
  };
  return {
    init: init,
    authenticate: authenticate,
    inauthenticate: inauthenticate,
    authenticated: authenticated,
    authenticatedAsync: authenticatedAsync,
    data: data,
    token: token,
    get: get,
    update: update,
    remove: remove,
    create: create,
    login: login,
    fsk: fsk,
    createFsk: createFsk,
    complete: complete,
    setComplete: setComplete
  };
}]);
angular.module("wbt")
.directive("mathJax",function(){
  return {
    restrict: "A",
    scope: false,
    link: function($scope,$element){
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,$element[0]]);
    }
  };
});
angular.module("wbt")
.directive("md",["remarkable", function(remarkable){
  return {
    restrict: "A",
    scope: {
      md: "="
    },
    link: function($scope,$el){
      var render=function(val){
        $el.html(remarkable.render(val));
      };
      render($scope.md);
      var mdWatch=$scope.$watch("md",render);
      $scope.$on("destroy",mdWatch());
    }
  };
}]);
angular.module("wbt")
.provider("remarkable",function(){
  var preset,options;
  preset="full";
  options={
  	html: true,
  quotes: "„“",
  breaks: true
  };
  this.preset=function(value){
    preset=value;
  };
  this.options=function(value){
    options=value;
  };
  this.$get=function(){
    return new Remarkable(preset,options);
  };
});
angular.module("wbt")
.directive("userAvailable",["$q", "Restangular", function($q,Restangular){return{
  require: "ngModel",
  restrict: "A",
  link: function(scope,el,attrs,c){
    c.$asyncValidators.userAvailable=function(value){
      var query={};
      query[attrs.name]=value;
      return Restangular.all("users").head(query)
      .then(function(){
        return $q.reject("exists");
      },function(){
        return true;
      });
    };
  }
};}]);
angular.module("wbt")
.directive("userExists",["$q", "Restangular", function($q,Restangular){return{
  require: "ngModel",
  restrict: "A",
  link: function(scope,el,attrs,c){
    c.$asyncValidators.userExists=function(value){
      var query={};
      query[attrs.name]=value;
      return Restangular.all("users").head(query).then(function(){
        return true;
      },function(){
        return $q.reject("not exists");
      });
    };
  }
};}]);
angular.module("wbt")
.controller("contentCtrl",["units", function(units){
  this.units=units;
}]);
angular.module("wbt")
.controller("downloadCtrl",["units", function(units){
  this.format="rtf";
  this.units=units;
}]);
angular.module("wbt")
.controller("loginCtrl",["identity", "$modalInstance", function(identity,$modalInstance){
  var self=this;
  this.loginData={};
  this.login=function(){
    return identity.authenticate(self.loginData)
    .then(identity.get)
    .then(function(id){
      $modalInstance.close(id);
    },identity.inauthenticate);
  };
  this.cancel=function(){
    $modalInstance.dismiss("cancel");
  };
}]);
angular.module("wbt")
.controller("registerCtrl",["$state", "identity", function($state,identity){
  this.registerData={};
  this.subjects=[{
    name: "psychology",
    label: "Psychologie",
    group: "Sozial- und Wirtschaftswissenschaften"
  },{
    name: "education",
    label: "Lehramt",
    group: "Erziehungswissenschaften"
  },{
    name: "physics",
    label: "Physik",
    group: "Naturwissenschaften"
  },{
    name: "philosophy",
    label: "Philosophie",
    group: "Geisteswissenschaften"
  }];
  this.register=function(form){
    return identity.create(form)
    .then(function(){
      return {
        email: form.email,
        password: form.password
      };
    })
    .then(identity.authenticate)
    .then(function(){
      return $state.go("content");
    })
    .catch(identity.inauthenticate);
  };
}]);
angular.module("wbt")
.controller("userCtrl",function(){
});
angular.module("wbt")
.controller("unitCtrl",["unit", "content", "identity", function(unit,content,identity){
  this.unit=unit;
  this.content=content;
}]);
angular.module("wbt")
.controller("fskCtrl",["identity", "$modalInstance", function(identity,$modalInstance){
  var self=this;
  this.identity=identity;
  this.sessko=[];
  this.ok=function(){
    return identity.createFsk(self.sessko)
    .then($modalInstance.close);
  };
  this.cancel=function(){
  return $modalInstance.dismiss();
  };
}]);
angular.module("wbt")
.controller("akzeptanzCtrl",["content", "$modalInstance", "unit", "summary", function(content,$modalInstance,unit,summary){
  var self=this;
  this.unit=unit;
  this.summary=summary;
  this.labels=[
    "keine Antwort",
    "stimme nicht zu",
    "stimme weniger zu",
    "stimme teilweise zu",
    "stimme eher zu",
    "stimme zu"
  ];
  this.content=content;
  this.ok=function(){
    return content.comment(unit._id,self.summary.comment)
    .then($modalInstance.close);
  };
  this.cancel=function(){
    return $modalInstance.dismiss("cancel");
  };
}]);
angular.module("wbt")
.controller("testCtrl",["identity", "content", "unit", "items", "guesses", function(identity,content,unit,items,guesses){
  var self=this;
  this.guesses=guesses;
  this.state="intro";
  this.progress={
    max: items.length,
    maxPoints: content.maxPoints(items),
    done: _.size(guesses),
    points: content.points(guesses)
  };
  this.group=function(){
    this.items=_.groupBy(items,function(item){
      return this.guesses[item._id] ? "done" : "todo";
    },this);
  };
  this.solve=function(){
    return content.solve(unit._id,this.item,this.choice)
    .then(function(){
      self.guesses[self.item._id]=angular.copy(self.choice);
      self.group();
      self.progress.done=_.size(self.guesses);
      self.progress.points=content.points(self.guesses);
      if(self.progress.done===self.progress.max){
        return identity.setComplete(unit._id);
      }
    });
  };
  this.next=function(){
    if(!this.items.todo){
      this.state="finished";
    }
    else{
      this.item=this.items.todo[0];
      this.state="item";
      this.choice=content.type(this.item);
    }
  };
  this.group();
  if(!this.items.todo){this.state="finished";}
}]);
angular.module("wbt")
.controller("topicCtrl",["topic", function(topic){
  this.topic=topic;
}]);