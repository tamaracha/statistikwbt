var Rating,e;
Rating=require("./models/rating");
e=require("./errors");

exports.find=function(req,res){
  return Rating.find(req.query)
  .execAsync()
  .then(function(ratings){
    return ratings ? res.json(ratings) : res.sendStatus(404);
  },function(e){
    console.log(e);
    return res.sendStatus(500);
  });
};

exports.create=function(req,res){
  Rating.createAsync(req.body)
  .then(function(rating){
    return res.sendStatus(200);
  },function(e){
    console.log(e.stack);
    res.sendStatus(500);
  });
};

exports.findOne=function(req,res){
  return Rating.findOne(req.params.id)
  .execAsync()
  .then(function(rating){
    return rating ? res.json(rating) : res.sendStatus(404);
  },function(e){
    console.log(e);
    return res.sendStatus(500);
  });
};

exports.update=function(req,res){
  return res.sendStatus(200);
};

exports.remove=function(req,res){
  return res.sendStatus(200);
};
