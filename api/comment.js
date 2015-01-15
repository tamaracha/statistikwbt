var Comment,e;
Comment=require("./models/comment");
e=require("./errors");

exports.create=function(req,res){
  comment=req.body;
  comment.user=req.user._id;
  return Comment.createAsync(comment)
  .then(function(comment){
    return res.json(comment);
  })
  .catch(function(e){
    console.log(e.stack);
    return res.sendStatus(500);
  });
};