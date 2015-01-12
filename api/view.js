var View,e,ObjectId;
View=require("./models/view");
e=require("./errors");

exports.create=function(req,res){
  View.createAsync(req.body)
  .then(function(view){
    return res.sendStatus(200);
  },function(e){
    console.log(e.stack);
    res.sendStatus(500);
  });
};
