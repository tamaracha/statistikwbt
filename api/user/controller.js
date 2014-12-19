var User=require("./model");
var e=require("../../errors");

User.collection.drop();

exports.check=function(req,res,next){
  return User.find(req.query)
  .lean()
  .execAsync()
  .then(function(users){
    if(users.length===0){return next(e.notFound);}
    return next();
  },function(err){
    return next(err);
  });
};

exports.head=function(req,res){
  return res.sendStatus(200);
};

exports.findOne=function(req,res){
  return User.findById(req.params.id)
  .lean()
  .execAsync()
  .then(function(user){
    return user ? res.json(user): res.sendStatus(404);
  })
  .catch(function(err){
    return res.status(500).end();
  });
};

exports.update=function(req,res){
  return User.findByIdAndUpdate(req.params.id,req.body)
  .execAsync()
  .then(function(user){
    return user ? res.json(user) : res.status(404).end();
  },function(err){
    return res.status(500).end();
  });
};

exports.remove=function(req,res){
  return User.findByIdAndRemove(req.params.id)
  .execAsync()
  .then(function(user){
    return user ? res.status(200).end() : res.status(404).end();
  },function(err){
    return res.status(500).end();
  });
};

exports.create=function(req,res){
  return User.createAsync(req.body)
  .then(function(user){
    return res.json(user);
  },function(err){
    return res.sendStatus(500);
  });
};
