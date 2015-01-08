module.exports=/*@ngInject*/function(Restangular,$stateParams,identity){
  var Views=Restangular.all("views");
  return {
    create: function(){
      return Views.post({
        user: identity.data()._id,
        unit: $stateParams.unit
      });
    }
  };
};