var https,express,app,compression,helmet,morgan,mongoose,router;
global._=require("lodash");
global.Promise=require("bluebird");
global.config=require("./config/config");
https=require("https");
express=require("express");
compression=require("compression");
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
app.use(helmet.csp({
  defaultSrc: [
    "'self'"
  ],
  scriptSrc: [
    "'self'",
    "https://ajax.googleapis.com",
    "https://cdnjs.cloudflare.com",
    "https://cdn.mathjax.org",
    "'unsafe-inline'"
  ],
  styleSrc: [
    "'self'",
    "https://maxcdn.bootstrapcdn.com",
    "'unsafe-inline'"
  ],
  fontSrc: [
    "'self'",
    "https://maxcdn.bootstrapcdn.com",
    "https://cdn.mathjax.org"
  ]
}));
app.use(helmet.frameguard("deny"));
app.use(helmet.nosniff());

app.use("/api",require("./api"));
app.use(compression());
app.use(
  function(req,res,next){
    var n=req.url.indexOf(".");
    if(n===-1){res.sendFile(__dirname+"/public/index.html");}
    else{next();}
  },
  express.static("./public")
);
app.use(function(err,req,res,next){
  console.error(err);
  return err.status ? res.sendStatus(err.status) : res.sendStatus(500);
});
mongoose.connect("mongodb://"+config.db.host+":27017/"+config.db.database);
https.createServer(config.ssl,app).listen(config.port);
console.log("listening on port %s",config.port);