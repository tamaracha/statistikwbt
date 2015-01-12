var mongoose,TestOptionSchema,TestOption;
mongoose=require("mongoose");

TestOptionSchema=new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  correct: {
    type: Boolean,
    defaults: false
  },
  feedback: String
});

TestOption=mongoose.model("TestOption",TestOptionSchema);
module.exports=TestOption;