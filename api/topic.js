var Unit,e;
Unit=require("./models/unit");
e=require("./errors");

exports.findOne=function(req,res){
  return Unit.findOne({title: req.params.unit})
  .lean()
  .execAsync()
  .then(function(unit){
    if(!unit||!unit.topics){return res.sendStatus(404);}
    var topic=_.find(unit.topics,{title: req.params.topic});
    if(!topic){throw e.notFound("topic not found");}
    return res.json(topic);
  })
  .catch(function(e){
    console.error(e.message);
    return res.sendStatus(e.status);
  });
};