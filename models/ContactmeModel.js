const { Schema, model, mongoose } = require("mongoose");
const { required } = require("nodemon/lib/config");
const ContactmeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "please provide your fullname"],
  },
  email: {
    type: String,
    required: [true, "please provide your Valid Email"],
  },
  subject: {
    type: String,
    required: [true, "please Email subject"],
  },
  message: {
    type: String,
    required: [true, "please provide message"],
  },
});

module.exports = model("contactme", ContactmeSchema);
