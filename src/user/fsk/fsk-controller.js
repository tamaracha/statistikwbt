module.exports=/*@ngInject*/function(identity,$modalInstance){
  var self=this;
  this.fskData={};
  this.ok=function(){
    return identity.data().all("fsk").post(self.fskData)
    .then($modalInstance.close);
  };
  this.cancel=function(){
  return $modalInstance.dismiss();
  };
};