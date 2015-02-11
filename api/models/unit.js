var mongoose,ObjectId,UniqueValidator,UnitSchema,Unit;
mongoose=require("mongoose");
ObjectId=mongoose.Schema.Types.ObjectId;

UnitSchema=new mongoose.Schema({
  position: Number,
  title: {
    type: String,
    required: true,
    unique: true
  },
  subtitle: String,
  description: {
    type: String,
    required: true
  },
  requires: [ObjectId],
  topics: [require("./topic").schema],
  tests: {
    inputs: [require("./input").schema],
    singleChoices: [require("./single-choice").schema],
    multipleChoices: [require("./multiple-choice").schema]
  },
  views: [{
    type: ObjectId,
    ref: "view"
  }],
  akzeptanz: {
    ratings: [{
      type: ObjectId,
      ref: "rating"
    }],
    comments: [{
      type: ObjectId,
      ref: "comment"
    }]
  }
});

Unit=mongoose.model("Unit",UnitSchema);
Promise.promisifyAll(Unit.prototype);
module.exports=Unit;