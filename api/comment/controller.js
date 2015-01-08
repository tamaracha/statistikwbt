var Comment,e;
Comment=require("./model");
e=require("../../errors");

exports.create=function(req,res){
  return Comment.createAsync(req.body)
  .then(function(comment){
    return res.json(comment);
  })
  .catch(function(e){
    console.log(e.stack);
    return res.sendStatus(500);
  });
};