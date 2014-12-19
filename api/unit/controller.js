var Unit=require("./model");

exports.find=function(req,res){
  return Unit.find(req.query)
  .select("_id position title subtitle description requires")
  .sort("position")
  .lean()
  .execAsync()
  .then(function(units){
    return res.json(units);
  },function(err){
    return res.sendStatus(500);
  });
};

exports.create=function(req,res){
  return Unit.createAsync(req.body)
  .then(function(unit){
    return unit ? res.json(unit) : res.sendStatus(400);
  },function(err){
    console.log(err.stack);
    return res.sendStatus(500);
  });
};

exports.findOne=function(req,res){
  return Unit.findById(req.params.id)
  .lean()
  .execAsync()
  .then(function(unit){
    return unit ? res.json(unit) : res.status(404);
  },function(err){
    return res.status(500).end();
  });
};

exports.update=function(req,res){
  return Unit.findByIdAndUpdate(req.params.id,req.body)
  .execAsync()
  .then(function(unit){
    return res.json(unit);
  },function(err){
    return res.sendStatus(500);
  });
};

exports.remove=function(req,res){
  return Unit.findByIdAndRemove(req.params.id)
  .exec()
  .then(function(unit){
    return unit ? res.sendStatus(200) : res.sendStatus(404);
  },function(err){
    console.log(err.stack);
    return res.status(500).end();
  });
};