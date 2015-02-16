var rio,e;
rio=require("rio");
e=require("./errors");
rio.evaluateAsync=function(command,options){
  return new Promise(function(resolve,reject){
    if(!options){var options={};}
    options.callback=function(err,result){
      if(err){return reject(err);}
      return resolve(result);
    };
    return rio.evaluate(command,options);
  });
};

exports.evaluate=function(req,res){
  return rio.evaluateAsync(req.params.rio)
  .then(function(data){
    return res.send(data.toString());
  })
  .catch(e.onError(res));
};

exports.corgen=function(req,res){
  return rio.evaluateAsync('library("jsonlite")\nlibrary("ecodist")\ncapture.output(toJSON(data.frame(corgen(x=rnorm(30),epsilon=0.01,r='+req.params.cor+'))))')
  .then(function(data){
    return res.send(data);
  })
  .catch(e.onError(res));
};