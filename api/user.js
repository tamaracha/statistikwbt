var User,Rating,Comment,e,ObjectId;
User=require("./models/user");
Rating=require("./models/rating");
Comment=require("./models/comment");
e=require("./errors");
ObjectId=require("mongoose").Types.ObjectId

exports.check=function(req,res){
  return User.find(req.query)
  .lean()
  .execAsync()
  .then(function(users){
    if(users.length===0){throw e.notFound("user not exists");}
    else{return res.sendStatus(200);}
  })
  .catch(function(e){
    console.log(e.message);
    return res.sendStatus(e.status||500);
  });
};

exports.create=function(req,res){
  return User.createAsync(req.body)
  .then(function(user){
    return res.json(user);
  })
  .catch(function(e){
    console.log(e.message);
    return res.sendStatus(e.status||500);
  });
};

exports.findOne=function(req,res){
  return User.findById(req.params.user)
  .lean()
  .execAsync()
  .then(function(user){
    if(!user){throw e.notFound("user not found");}
    return res.json(user);
  })
  .catch(function(e){
    console.log(e.message);
    return res.sendStatus(e.status||500);
  });
};

exports.update=function(req,res){
  return User.findByIdAndUpdate(req.params.user,req.body)
  .execAsync()
  .then(function(user){
    if(!user){throw e.notFound("user not updated");}
    return res.json(user);
  })
  .catch(function(e){
    console.log(e.message);
    return res.sendStatus(e.status||500);
  });
};

exports.remove=function(req,res){
  return User.findByIdAndRemove(req.params.user)
  .execAsync()
  .then(function(user){
    if(!user){throw e.notFound("user not removed");}
    return res.sendStatus(200);
  })
  .catch(function(e){
    console.error(e.message);
    return res.sendStatus(e.status||500);
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
    $sort: {
      "_id": -1
    }
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
  })
  .catch(function(e){
    console.error(e.message);
    return res.sendStatus(e.status||500);
  });
};