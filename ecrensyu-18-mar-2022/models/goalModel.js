const mongoose = require("mongoose");

// Create schema
const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add goal"],
      minlength: 2,
    },
  },
  {
    timestamps: true,
  }
);

// Make and export model, based on the schema created above
module.exports = mongoose.model("Goal", goalSchema);
