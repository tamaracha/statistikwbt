var mongoose,ObjectId,User,Unit,RatingSchema,Rating;
mongoose=require("mongoose");
Promise.promisifyAll(mongoose.Model);
Promise.promisifyAll(mongoose.Model.prototype);
Promise.promisifyAll(mongoose.Query.prototype);
ObjectId=mongoose.Schema.Types.ObjectId
User=require("../user/model");
Unit=require("../unit/model");

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
RatingSchema.post("save",function(){
  var rating=this;
  return User.findById(rating.user)
  .execAsync()
  .then(function(user){
    user.akzeptanz.ratings.push(rating._id);
    return user.saveAsync();
  });
});
RatingSchema.post("save",function(){
  var rating=this;
  return Unit.findById(rating.unit)
  .execAsync()
  .then(function(unit){
    unit.akzeptanz.ratings.push(rating._id);
    return unit.saveAsync();
  });
});

Rating=mongoose.model("Rating",RatingSchema);
Promise.promisifyAll(Rating.prototype);
module.exports=Rating;