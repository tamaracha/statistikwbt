var Exam,e;
Exam=require("./models/exam");
e=require("./errors");

exports.create=function(req,res){
  var exam=req.body;
  exam.user=req.user._id;
  Exam.createAsync(exam)
  .then(function(exam){
    if(!exam){throw e.notFound("no exam created");}
    return res.sendStatus(200);
  })
  .catch(function(e){
    console.error(e);
    res.sendStatus(e.status||500);
  });
};