const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  goalText: {
    type: String,
    required: [true, "Please add goal"],
  },
});

module.exports = new mongoose.model("Goal", goalSchema);
