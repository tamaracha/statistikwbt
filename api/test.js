var Unit,e;
Unit=require("./models/unit");
e=require("./errors");

exports.find=function(req,res){
  Unit.findOne({title: req.params.unit})
  .select("tests")
  .lean()
  .execAsync()
  .then(function(unit){
    if(!unit.tests){throw e.notFound("no tests found");}
    var tests=[];
    if(unit.tests.singleChoices&&unit.tests.singleChoices.length>0){
      tests=tests.concat(unit.tests.singleChoices);
    }
    if(unit.tests.multipleChoices&&unit.tests.multipleChoices.length>0){
      tests=tests.concat(unit.tests.multipleChoices);
    }
    _.forEach(tests,function(test){
      if(!test.choices){return;}
      test.choices=_.shuffle(test.choices);
    });
    if(unit.tests.inputs&&unit.tests.inputs.length>0){
      tests=tests.concat(unit.tests.inputs);
    }
    if(tests.length===0){throw e.notFound("no tests found");}
    tests=_.shuffle(tests);
    return res.json(tests);
  })
  .catch(e.onError(res));
};
exports.findOne=function(req,res){
  Unit.findOne({title: req.params.unit})
  .execAsync()
  .then(function(unit){
    var test=unit.tests.id(req.params.test);
    if(!test){throw e.notFound("test not found");}
    return res.json(test);
  })
  .catch(e.onError(res));
};