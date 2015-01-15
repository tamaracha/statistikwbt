module.exports=/*@ngInject*/function(unit,summary,Restangular,$modalInstance){
  var self,ratings;
  self=this;
  ratings=Restangular.all("ratings");
  this.summary=summary;
  this.labels=[
    "keine Antwort",
    "stimme nicht zu",
    "stimme weniger zu",
    "stimme teilweise zu",
    "stimme eher zu",
    "stimme zu"
  ];
  this.rate=function(name){
    var post={
      unit: unit._id,
      name: name,
      value: self.summary[name]
    };
    return ratings.post(post);
  };
  this.ok=function(){
    var comment={
      unit: unit._id,
      value: self.summary.comment
    }
    return $modalInstance.close(comment);
  };
  this.cancel=function(){
    return $modalInstance.dismiss("cancel");
  };
};