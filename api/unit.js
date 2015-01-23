var Unit,Rating,Comment,Guess,e,ObjectId;
Unit=require("./models/unit");
Rating=require("./models/rating");
Comment=require("./models/comment");
Guess=require("./models/guess");
ObjectId=require("mongoose").Types.ObjectId
e=require("./errors");

exports.find=function(req,res){
  return Unit.find(req.query)
  .select("-_id position title requires")
  .sort("position")
  .lean()
  .execAsync()
  .then(function(units){
    if(units.length===0){throw e.notFound("no units found");}
    return res.json(units);
  })
  .catch(e.onError(res));
};

exports.create=function(req,res){
  return Unit.createAsync(req.body)
  .then(function(unit){
    if(!unit){throw e.notFound("unit not found");}
    return res.json(unit);
  })
  .catch(e.onError(res));
};

exports.findOne=function(req,res){
  return Unit.findOne({title: req.params.unit})
  .select("title subtitle description topics.title")
  .lean()
  .execAsync()
  .then(function(unit){
    if(!unit){throw e.notFound("unit not found");}
    return res.json(unit);
  })
  .catch(e.onError(res));
};

exports.guesses=function(req,res){
  Guess.aggregateAsync([{
    $match: {
      user: ObjectId(req.user._id),
      unit: ObjectId(req.params.unit)
    }
  },{
    $sort: {
      _id: -1
    }
  },{
    $group: {
      _id: "$item",
      response: {$first: "$response"}
    }
  }])
  .then(function(guesses){
    var data={};
    if(guesses){
      _.forEach(guesses,function(guess){
      data[guess._id]=guess.response;
      });
    }
    return res.json(data);
  })
  .catch(e.onError(res));
};

exports.akzeptanz=function(req,res){
  Rating.aggregateAsync([
  {
    $match: {
      "unit": ObjectId(req.params.unit),
      "user": ObjectId(req.user._id)
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
    var data={
      motivation: 0,
      success: 0,
      usability: 0,
      comment: ""
    };
    if(ratings){
      _.forEach(ratings,function(rating){
        data[rating._id]=rating.value;
      });
    }
    return Comment.findOne({
      user: req.user._id,
      unit: req.params.unit
    })
    .sort({_id: -1})
    .execAsync()
    .then(function(comment){
      if(comment){data.comment=comment.value;}
      return res.json(data);
    });
  })
  .catch(e.onError(res));
};