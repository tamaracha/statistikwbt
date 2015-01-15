var mongoose,SingleChoiceSchema,SingleChoice;
mongoose=require("mongoose");

SingleChoiceSchema=new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "multiple"
  },
  choices: [{
    text: {
      type: String,
      required: true
    },
    correct: {
      type: Boolean,
      default: false
    },
    feedback: {
      type: String,
      required: true
    }
  }]
});

SingleChoice=mongoose.model("SingleChoice",SingleChoiceSchema);
module.exports=SingleChoice;