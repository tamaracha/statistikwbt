var mongoose,uniqueValidator,bcrypt,validate,ObjectId,fskSchema,RatingSchema,ViewSchema,UserSchema,User;
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
RatingSchema=new mongoose.Schema({
  unit: {
    type: ObjectId,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});
ViewSchema=new mongoose.Schema({
  unit: {
    type: ObjectId,
    required: true
  }
});


UserSchema=new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: validate.emailValidator
  },
  password: {
    type: String,
    required: true,
    validate: validate.passwordValidator
  },
  contact: Boolean,
  profile: {
    age: Number,
    subject: String
  },
  fsk: [fskSchema],
  ratings: [RatingSchema],
  views: [ViewSchema]
},{
  collection: "userInfo",
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
UserSchema.plugin(uniqueValidator);

var User=mongoose.model("User",UserSchema);
Promise.promisifyAll(User.prototype);
module.exports=User;