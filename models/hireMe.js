const { Schema, model, mongoose } = require("mongoose");
const { required } = require("nodemon/lib/config");
const hireMeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide your name"],
  },
  email: {
    type: String,
    required: [true, "please provide your Valid Email"],
  },
  description: {
    type: String,
    required: [true, "please add messages for us"],
  },
  project: {
    type: String,
    required: [true, "please select the project type"],
  },
});

module.exports = model("hireme", hireMeSchema);
