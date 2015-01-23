module.exports=/*@ngInject*/function(Restangular,$modal){
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
        switch(item.type){
          case "single":
            var choice=_.find(item.choices,{_id: guess.single});
            guesses[key]=choice;
            break;
          case "multiple":
            var tmp=item.choices;;
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
          break;
        case "multiple":
          return points+item.choices.length;
          break;
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
        break;
      case "multiple":
        var choices=item.choices;
        _.forEach(choices,function(choice){
          choice.selected=false;
        });
        return choices;
        break;
      case "input":
        return "";
        break;
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
};