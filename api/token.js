var jwt,User,e;
jwt=require("jsonwebtoken");
User=require("./models/user");
e=require("./errors");

exports.login=function(req,res){
  var email,password;
  return new Promise(function(resolve,reject){
    if(!req.headers.authorization){return reject(e.noContent("no authorization header"));}
    var str=req.headers.authorization.split(":");
    if(str.length!==2){return reject(e.badRequest("bad authorization header"));}
    email=str[0];
    password=str[1];
    if(!email||!password){return reject(e.badRequest("email or password undefined"));}
    return resolve({
      email: email,
      password: password
    });
  })
  .then(function(credentials){
    return User.findOne({email: credentials.email})
    .execAsync();
  })
  .then(function(user){
    if(!user){throw e.unauthorized("incorrect username");}
    return user.validatePasswordAsync(password)
    .then(function(isMatch){
      if(!isMatch){throw e.unauthorized("incorrect password");}
      return user;
    });
  })
  .then(function(user){
    var token=jwt.sign({_id: user._id},config.jwt.secret,config.jwt.options);;
    res.json({
      token: token,
      _id: user._id
    });
  })
  .catch(e.onError(res));
};