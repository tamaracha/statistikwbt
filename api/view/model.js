var mongoose,ObjectId,User,Unit,ViewSchema,View;
mongoose=require("mongoose");
Promise.promisifyAll(mongoose.Model);
Promise.promisifyAll(mongoose.Model.prototype);
Promise.promisifyAll(mongoose.Query.prototype);
ObjectId=mongoose.Schema.Types.ObjectId
User=require("../user/model");
Unit=require("../unit/model");

ViewSchema=new mongoose.Schema({
  unit: {
    type: ObjectId,
    required: true,
    ref: "unit"
  },
  topic: {
    type: ObjectId,
    ref: "unit.topic"
  },
  user: {
    type: ObjectId,
    required: true,
    ref: "user"
  }
});
ViewSchema.post("save",function(){
  var view=this;
  return User.findById(view.user)
  .execAsync()
  .then(function(user){
    user.views.push(view._id);
    return user.saveAsync();
  });
});
ViewSchema.post("save",function(){
  var view=this;
  return Unit.findById(view.unit)
  .execAsync()
  .then(function(unit){
    unit.views.push(view._id);
    return unit.saveAsync();
  });
});
View=mongoose.model("View",ViewSchema);
Promise.promisifyAll(View.prototype);
module.exports=View;