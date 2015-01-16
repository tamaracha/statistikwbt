module.exports=/*@ngInject*/function(items,unit,Restangular,identity){
  this.current=0;
  this.items=items;
  this.submit=function(items){
    return;
    var posts=items.aggregate();
    return Restangular.all("exams").post({
      unit: unit._id,
      items: posts
    });
  };
};