const mongoose = require("mongoose");

// Create schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
      minlength: 1,
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please add password"],
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export model, based on the schema created above
module.exports = mongoose.model("User", userSchema);
