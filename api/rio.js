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

rio.sourceAndEvalAsync=function(filename,entryPoint,data,config){
  return new Promise(function(resolve,reject){
    if(!filename){return reject("no filename specified");}
    if(!entryPoint){return reject("no entryPoint specified");}
    var options={};
    options.entryPoint=entryPoint;
    options.data={
      r: 0,
      len: 30
    };
    if(data){_.extend(options.data,data);}
    if(config){_.extend(options,config);}
    options.callback=function(err,result){
      if(err){return reject("eval error");}
      return resolve(result);
    };
    return rio.sourceAndEval(__dirname+"/R/"+filename,options);
  });
};

exports.evaluate=function(req,res){
  return rio.evaluateAsync(req.params.command)
  .then(function(data){
    return res.send(data.toString());
  })
  .catch(e.onError(res));
};

exports.correlation=function(req,res){
  return rio.sourceAndEvalAsync("correlation.R","correlation",req.query)
  .then(function(data){
    return res.send(data);
  })
  .catch(e.onError(res));
};