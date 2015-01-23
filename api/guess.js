var Guess,e;
Guess=require("./models/guess");
e=require("./errors");

exports.create=function(req,res){
  if(!req.user){throw e.unauthorized("not logged in");}
  var guess=req.body;
  guess.user=req.user._id;
  Guess.createAsync(guess)
  .then(function(guess){
    if(!guess){throw e.notFound("no exam created");}
    return res.sendStatus(200);
  })
  .catch(e.onError(res));
};