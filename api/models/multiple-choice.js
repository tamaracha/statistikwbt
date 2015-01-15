var mongoose,MultipleChoiceSchema,MultipleChoice;
mongoose=require("mongoose");

MultipleChoiceSchema=new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "single"
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
      correct: {
        type: String,
        required: true
      },
      incorrect: {
        type: String,
        required: true
      }
    }
  }]
});

MultipleChoice=mongoose.model("MultipleChoice",MultipleChoiceSchema);
module.exports=MultipleChoice;