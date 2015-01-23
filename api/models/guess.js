var mongoose,ObjectId,GuessSchema,Guess;
mongoose=require("mongoose");
ObjectId=mongoose.Schema.Types.ObjectId;

GuessSchema=new mongoose.Schema({
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
  item: {
    type: ObjectId,
    required: true
  },
  response: {
    single: ObjectId,
    multiple: [ObjectId],
    input: String
  }
});

Guess=mongoose.model("Guess",GuessSchema);
Promise.promisifyAll(Guess.prototype);
module.exports=Guess;