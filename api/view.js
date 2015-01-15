var View,e,ObjectId;
View=require("./models/view");
e=require("./errors");

exports.create=function(req,res){
  var view=req.body;
  if(req.user){
    view.user=req.user._id;
    view.authenticated=true;
  }
  View.createAsync(view)
  .then(function(view){
    return res.sendStatus(200);
  },function(e){
    console.log(e.stack);
    res.sendStatus(500);
  });
};
