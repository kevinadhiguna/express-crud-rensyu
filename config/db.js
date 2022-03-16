const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";

  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(
      `Successfuly connected to MongoDB host : ${conn.connection.host}`
    );
  } catch (errorConnectionDB) {
    console.error(`Failed to connect to MongoDB : ${errorConnectionDB}`);
    process.exit(1);
  }
};

module.exports = connectDB;
