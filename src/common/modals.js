angular.module('wbt')
.factory('modal',function($modal){
  return {
    login: function(){
      return $modal.open({
        templateUrl: "login/login.html",
        controller: "loginCtrl",
        controllerAs: "login"
      });
    },
    fsk: function(){
      return $modal.open({
        templateUrl: "user/fsk/fsk.html",
        controller: "fskCtrl",
        controllerAs: "fsk",
        size: "lg"
      });
    },
    akzeptanz: function(unit){
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
    }
  };
});