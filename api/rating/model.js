var mongoose,ObjectId,User,Unit,pushUser,pushUnit,RatingSchema,Rating;
mongoose=require("mongoose");
Promise.promisifyAll(mongoose.Model);
Promise.promisifyAll(mongoose.Model.prototype);
Promise.promisifyAll(mongoose.Query.prototype);
ObjectId=mongoose.Schema.Types.ObjectId
User=require("../user/model");
Unit=require("../unit/model");
var pushUser=function(rating){
  return User.findById(rating.user)
  .execAsync()
  .then(function(user){
    user.akzeptanz.ratings.push(rating._id);
    return user.saveAsync();
  })
  .spread(function(user){
    return user;
  });
};
pushUnit=function(rating){
  return Unit.findById(rating.unit)
  .execAsync()
  .then(function(unit){
    unit.akzeptanz.ratings.push(rating._id);
    return unit.saveAsync();
  })
  .spread(function(unit){
    return unit
  });
};

RatingSchema=new mongoose.Schema({
  unit: {
    type: ObjectId,
    required: true,
    ref: "unit"
  },
  user: {
    type: ObjectId,
    required: true,
    ref: "user"
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
});
RatingSchema.pre("save",function(next){
  var rating=this;
  return Promise.join(pushUser(rating),pushUnit(rating),function(user,unit){
    return next();
  })
  .catch(function(e){
    return next(e);
  });;
});
Rating=mongoose.model("Rating",RatingSchema);
Promise.promisifyAll(Rating.prototype);
module.exports=Rating;