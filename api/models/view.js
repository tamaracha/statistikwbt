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
  authenticated: {
    type: Boolean,
    default: false
  },
  user: {
    type: ObjectId,
    ref: "user"
  }
});

View=mongoose.model("View",ViewSchema);
Promise.promisifyAll(View.prototype);
module.exports=View;