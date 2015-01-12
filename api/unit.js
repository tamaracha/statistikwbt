var Unit,e;
Unit=require("./models/unit");
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
  .catch(function(e){
    console.log(e.message);
    return res.sendStatus(e.status||500);
  });
};

exports.create=function(req,res){
  return Unit.createAsync(req.body)
  .then(function(unit){
    if(!unit){throw e.notFound("unit not found");}
    return res.json(unit);
  })
  .catch(function(e){
    console.log(e.message);
    return res.sendStatus(e.status||500);
  });
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
  .catch(function(e){
    console.log(e.message);
    return res.sendStatus(e.status||500);
  });
};