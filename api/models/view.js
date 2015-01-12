var mongoose,ObjectId,User,Unit,ViewSchema,View;
mongoose=require("mongoose");
ObjectId=mongoose.Schema.Types.ObjectId
User=require("./user");
Unit=require("./unit");

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
  })
  .catch(function(e){
    return console.error(e.message);
  });
});

ViewSchema.post("save",function(){
  var view=this;
  return Unit.findById(view.unit)
  .execAsync()
  .then(function(unit){
    unit.views.push(view._id);
    return unit.saveAsync();
  })
  .catch(function(e){
    return console.error(e.message);
  });
});

View=mongoose.model("View",ViewSchema);
Promise.promisifyAll(View.prototype);
module.exports=View;