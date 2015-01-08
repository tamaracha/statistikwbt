var mongoose,ObjectId,CommentSchema,Comment;
mongoose=require("mongoose");
Promise.promisifyAll(mongoose.Model);
Promise.promisifyAll(mongoose.Model.prototype);
Promise.promisifyAll(mongoose.Query.prototype);
ObjectId=mongoose.Schema.Types.ObjectId
User=require("../user/model");
Unit=require("../unit/model");
var pushUser=function(comment){
  return User.findById(comment.user)
  .execAsync()
  .then(function(user){
    user.akzeptanz.comments.push(comment._id);
    return user.saveAsync();
  })
  .spread(function(user){
    return user;
  });
};
pushUnit=function(comment){
  return Unit.findById(comment.unit)
  .execAsync()
  .then(function(unit){
    unit.akzeptanz.comments.push(comment._id);
    return unit.saveAsync();
  })
  .spread(function(unit){
    return unit
  });
};

CommentSchema=new mongoose.Schema({
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
  value: {
    type: String,
    required: true
  }
});
CommentSchema.pre("save",function(next){
  var comment=this;
  return Promise.join(pushUser(comment),pushUnit(comment),function(user,unit){
    return next();
  })
  .catch(function(e){
    return next(e);
  });
});

Comment=mongoose.model("Comment",CommentSchema);
Promise.promisifyAll(Comment.prototype);
module.exports=Comment;