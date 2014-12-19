var jwt,User,e;
jwt=require("jsonwebtoken");
User=require("../user/model");
e=require("../../errors");

exports.login=function(req,res,next){
  var email,password,str;
  if(!req.headers.authorization){return next(e.noContent);}
  str=req.headers.authorization.split(":");
  if(str.length!==2){return next(e.badRequest);}
  email=str[0];
  password=str[1];
  if(!email||!password){return next(e.badRequest);}
  User.findOne({email: email})
  .execAsync()
  .then(function(user){
    if(!user){return next(e.notFound);}
    req.user=user;
    return user.validatePasswordAsync(password);
  })
  .then(function(isMatch){
    if(!isMatch){return next(e.unauthorized);}
    return next();
  })
  .catch(function(err){
    return next(err);
  });
};

exports.findOne=function(req,res){
  var token=jwt.sign({_id: req.user._id},config.jwt.secret,config.jwt.options);;
  res.json({
    token: token,
    _id: req.user._id
  });
};