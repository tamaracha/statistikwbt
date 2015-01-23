var User,e;
User=require("./models/user");
e=require("./errors");

exports.check=function(req,res){
  return User.find(req.query)
  .lean()
  .execAsync()
  .then(function(users){
    if(users.length===0){throw e.notFound("user not exists");}
    else{return res.sendStatus(200);}
  })
  .catch(e.onError(res));
};

exports.create=function(req,res){
  return User.createAsync(req.body)
  .then(function(user){
    return res.json(user);
  })
  .catch(e.onError(res));
};

exports.findOne=function(req,res){
  return User.findById(req.user._id)
  .select("email profile fsk akzeptanz views complete")
  .lean()
  .execAsync()
  .then(function(user){
    if(!user){throw e.notFound("user not found");}
    return res.json(user);
  })
  .catch(e.onError(res));
};

exports.update=function(req,res){
  return User.findByIdAndUpdate(req.user._id,req.body)
  .execAsync()
  .then(function(user){
    if(!user){throw e.notFound("user not updated");}
    return res.json(user);
  })
  .catch(e.onError(res));
};

exports.remove=function(req,res){
  return User.findByIdAndRemove(req.params.user)
  .execAsync()
  .then(function(user){
    if(!user){throw e.notFound("user not removed");}
    return res.sendStatus(200);
  })
  .catch(e.onError(res));
};