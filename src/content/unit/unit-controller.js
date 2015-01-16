module.exports=/*@ngInject*/function(unit,$modal,identity){
  this.unit=unit;
  this.getAkzeptanz=function(){
    var akzeptanzModal=$modal.open({
      templateUrl: "content/unit/akzeptanz/akzeptanz.html",
      controller: "akzeptanzCtrl",
      controllerAs: "akzeptanz",
      resolve: {
        unit: function(){return unit;},
        summary: function(){return identity.data().one("akzeptanz",unit._id).get();}
      }
    });
  };
};