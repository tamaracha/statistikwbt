var mongoose,bcrypt,validate,ObjectId,fskSchema,UserSchema,User;
mongoose=require("mongoose");
bcrypt=require("bcrypt-nodejs");
Promise.promisifyAll(bcrypt);
validate=require("../services/validate");
ObjectId=mongoose.Schema.Types.ObjectId

UserSchema=new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: validate.emailValidator,
    unique: true
  },
  password: {
    type: String,
    required: true,
    validate: validate.passwordValidator
  },
  profile: {
    nickname: String,
    age: {
      type: Number,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    reasons: [Boolean]
  },
  fsk: [{
    sessko: {
      type: [Number],
      required: true
    }
  }],
  akzeptanz: {
    ratings: [{
      type: ObjectId,
      ref: "rating"
    }],
    comments: [{
      type: ObjectId,
      ref: "comment"
    }]
  },
  complete: [{
    type: ObjectId,
    ref: "unit"
  }],
  views: [{
    type: ObjectId,
    ref: "view"
  }]
});
UserSchema.pre("save",function(next){
  var user=this;
  if(!user.isModified("password")){return next();}
  return bcrypt.hashAsync(user.password,null,null)
  .then(function(hash){
    user.password=hash;
    return next();
  },function(err){
    return next(err);
  });
});
UserSchema.methods.validatePassword=function(password,next){
  return bcrypt.compareAsync(password, this.password)
  .then(function(isMatch){
    return next(null,isMatch);
  },function(err){
    return next(err);
  });
};

var User=mongoose.model("User",UserSchema);
Promise.promisifyAll(User.prototype);
module.exports=User;