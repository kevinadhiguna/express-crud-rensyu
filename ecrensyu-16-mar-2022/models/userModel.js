const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
    minlength: 2,
  },
  email: {
    type: String,
    required: [true, "Please add email"],
    minlength: 6,
  },
  password: {
    type: String,
    required: [true, "Please add password"],
    minlength: 8,
  },
});

module.exports = new mongoose.model("User", userSchema);
