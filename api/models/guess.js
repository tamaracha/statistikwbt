var mongoose,ObjectId,GuessSchema,Guess;
mongoose=require("mongoose");
ObjectId=mongoose.Schema.types.ObjectId;

GuessSchema=new mongoose.Schema({
  unit: {
    type: ObjectId,
    required: true,
    ref: "unit"
  },
  test: {
    type: ObjectId,
    required: true
  },
  choice: {
    type: ObjectId,
    required: true
  },
  user: {
    type: ObjectId,
    required: true,
    ref: "user"
  }
});

Guess=mongoose.model("Guess",GuessSchema);
module.exports=Guess;