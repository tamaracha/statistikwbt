var mongoose,SubjectSchema,Subject;

mongoose=require("mongoose");
SubjectSchema=mongoose.Schema({
  group: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  }
});
SubjectSchema.index({name: "text"});

Subject=mongoose.model("Subject",SubjectSchema);
Promise.promisifyAll(Subject.prototype);
module.exports=Subject;