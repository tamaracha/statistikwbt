angular.module("wbt")
.controller("akzeptanzCtrl",function(content,$modalInstance,unit,summary){
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
});