module.exports=/*@ngInject*/function(items,unit,Restangular,identity){
  this.items=items;
  this.submit=function(items){
    var posts=items.aggregate();
    return Restangular.all("exams").post({
      unit: unit._id,
      items: posts
    });
  };
};