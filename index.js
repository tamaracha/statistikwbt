var express,app,helmet,morgan,mongoose,router;
global._=require("lodash");
global.Promise=require("bluebird");
global.config=require("./config/config");
express=require("express");
helmet=require("helmet");
morgan=require("morgan")("dev");
mongoose=require("mongoose");
Promise.promisifyAll(mongoose.Model);
Promise.promisifyAll(mongoose.Model.prototype);
Promise.promisifyAll(mongoose.Query.prototype);
app=express();
app.disable("x-powered-by");
app.enable("strict routing");
app.set("view engine","jade");
app.use(morgan);
app.use(helmet.frameguard("deny"));
app.use(helmet.nosniff());

app.use("/api",require("./api"));
app.use(
  function(req,res,next){
    var n=req.url.indexOf(".");
    if(n===-1){res.sendFile(__dirname+"/public/index.html");}
    else{next();}
  },
  express.static("./public")
);
app.use(function(err,req,res,next){
  console.error(err.stack);
  return res.sendStatus(err.status||500);
});
mongoose.connect("mongodb://"+config.db.host+":27017/"+config.db.database);
app.listen(config.port,config.host);
<<<<<<< HEAD
console.log("listening on %s:%s",config.host,config.port);
=======
console.log("listening on port %s",config.port);
>>>>>>> user-service
