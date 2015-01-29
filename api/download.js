var jwt,pdc,mime,Unit,User,e,fs,compiled;
jwt=require("jsonwebtoken");
Promise.promisifyAll(jwt);
pdcAsync=Promise.promisify(require("pdc"));
mime=require("mime");
Unit=require("./models/unit");
User=require("./models/user");
e=require("./errors");
fs=require("fs");
Promise.promisifyAll(fs);
fs.readFileAsync(__dirname+"/download.md","utf8")
.then(function(template){
  compiled=_.template(template,null,{variable: "data"});
});

exports.checkUser=function(req,res,next){
  if(!req.query.token){return next(e.unauthorized("no token found"));}
  jwt.verifyAsync(req.query.token,config.jwt.secret)
  .then(function(token){
    return User.findById(token._id)
    .lean()
    .execAsync();
  })
  .then(function(user){
    if(!user){return e.notFound("user not found");}
    req.user=user;
    return next();
  })
  .catch(function(e){
    return next(e);
  });
};

exports.find=function(req,res){
  var query=Unit.find()
  .sort({position: 1});
  if(req.query.units){
    if(_.isArray(req.query.units)){query.in("_id",req.query.units);}
    if(_.isString(req.query.units)){query.in("_id",[req.query.units]);}
  }
  query.execAsync()
  .then(function(units){
    var contents={};
    if(_.isArray(req.query.contents)){
      _.forEach(req.query.contents,function(value){
        contents[value]=true;
      });
    }
    if(_.isString(req.query.contents)){
      contents[req.query.contents]=true;
    }
    var md=compiled({units: units,contents: contents});
    return md;
  })
  .then(function(md){
    var format=req.query.format||"md";
    var cachePath=process.cwd()+"/.filecache/"+req.user._id;
    res.setHeader("content-disposition", "attachment; filename=Statistik-WBT."+format);
    res.setHeader("content-type", mime.lookup(format));
    switch(format){
      case "md": return res.send(md);
      case "rtf":
        return pdcAsync(md,"markdown","rtf")
        .then(function(doc){
          res.send(doc);
        });
      case "tex":
        return pdcAsync(md,"markdown","latex")
        .then(function(doc){
          res.send(doc);
        });
      case "docx":
        return pdcAsync(md,"markdown","docx",["-o",cachePath+".docx"])
        .then(function(doc){
          return res.sendFile(cachePath+".docx");
        });
      case "epub":
        return pdcAsync(md,"markdown","epub",["-o",cachePath+".rtf"])
        .then(function(doc){
          return res.sendFile(cachePath+".rtf");
        });
      default: return res.send(md);
    }
  })
  .catch(e.onError(res));
};