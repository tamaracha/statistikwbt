var mongoose,TestSchema,Test;
mongoose=require("mongoose");

TestSchema=new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: [require("./test-option").schema]
});

Test=mongoose.model("Test",TestSchema);
module.exports=Test;