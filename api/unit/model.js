var mongoose,ObjectId;
mongoose=require("mongoose");
Promise.promisifyAll(mongoose.Model);
Promise.promisifyAll(mongoose.Model.prototype);
Promise.promisifyAll(mongoose.Query.prototype);
ObjectId=mongoose.Schema.Types.ObjectId

ExampleSchema=new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  body: {
    type: String,
    required: true
  }
});
ExtraSchema=new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  body: {
    type: String,
    required: true
  }
});
TopicSchema=new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  body: {
    type: String,
    required: true
  },
  examples: [ExampleSchema],
  extras: [ExtraSchema],
  tests: [{
    type: ObjectId,
    ref: "test"
  }]
});
UnitSchema=new mongoose.Schema({
  position: Number,
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  description: {
    type: String,
    required: true
  },
  requires: [{
    type: ObjectId,
    ref: "Unit",
  }],
  topics: [TopicSchema]
});

module.exports=mongoose.model("Unit",UnitSchema);