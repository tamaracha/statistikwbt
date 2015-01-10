var mongoose,uniqueValidator,bcrypt,validate,ObjectId,fskSchema,UserSchema,User;
mongoose=require("mongoose");
Promise.promisifyAll(mongoose.Model);
Promise.promisifyAll(mongoose.Model.prototype);
Promise.promisifyAll(mongoose.Query.prototype);
uniqueValidator=require("mongoose-unique-validator");
bcrypt=require("bcrypt-nodejs");
Promise.promisifyAll(bcrypt);
validate=require("./validate");
ObjectId=mongoose.Schema.Types.ObjectId

fskSchema=new mongoose.Schema({
  
});

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
    contact: Boolean,
    age: Number,
    subject: String
  },
  fsk: [fskSchema],
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
  views: [{
    type: ObjectId,
    ref: "view"
  }]
},{
  toJSON: {
    transform: function(doc,ret,options){
      if(ret.password){delete ret.password;}
    }
  }
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
UserSchema

var User=mongoose.model("User",UserSchema);
Promise.promisifyAll(User.prototype);
module.exports=User;