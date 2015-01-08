module.exports=/*@ngInject*/function(Restangular,$stateParams,identity){
  var Ratings,Comments,Summary,summary;
  Ratings=Restangular.all("ratings");
  Comments=Restangular.all("comments");
  Summary=function(data){
    this.motivation=0;
    this.success=0;
    this.usability=0;
    this.comment="";
    if(data){angular.extend(this,data);}
  };
  summary=new Summary();

  return {
    summary: summary,
    get: function(unit){
      unit=unit||$stateParams.unit;
      return identity.data().one("akzeptanz",unit).get()
      .then(function(data){
        angular.extend(summary,new Summary(data));
        return data;
      });
    },
    rate: function(name,user,unit){
      unit=unit||$stateParams.unit;
      user=user||identity.data()._id;
      if(!unit||!user){return;}
      return Ratings.post({
        user: user,
        unit: unit,
        name: name,
        value: summary[name]
      });
    },
    comment: function(user,unit){
      unit=unit||$stateParams.unit;
      user=user||identity.data()._id;
      if(!user||!unit||!summary.comment){return;}
      return Comments.post({
        unit: unit,
        user: user,
        value: summary.comment
      });
    }
  };
};