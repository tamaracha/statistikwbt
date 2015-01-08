var User,Rating,Comment,e;
User=require("./model");
Rating=require("../rating/model");
Comment=require("../comment/model");
e=require("../../errors");
ObjectId=require("mongoose").Types.ObjectId

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
    console.log(err);
    return res.sendStatus(500);
  });
};

exports.akzeptanz=function(req,res){
  Rating.aggregateAsync([
  {
    $match: {
      "unit": ObjectId(req.params.unit),
      "user": ObjectId(req.params.user)
    }
  },
  {
    $sort: {"_id": -1}
  },{
    $group: {
      _id: "$name",
      value: {$first: "$value"}
    }
  }])
  .then(function(ratings){
    var data={};
    if(ratings){
      _.forEach(ratings,function(rating){
        data[rating._id]=rating.value;
      });
    }
    return Comment.findOne({
      user: req.params.user,
      unit: req.params.unit
    })
    .sort({_id: -1})
    .execAsync()
    .then(function(comment){
      if(comment){data.comment=comment.value;}
      return res.json(data);
    });
  },function(e){
    console.log(e);
    return res.sendStatus(500);
  });
};