const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Successfuly connected to MongoDB host : ${conn.connection.host}`
    );
  } catch (errorConnectionDB) {
    console.error(`Failed to connect to MongoDB : ${errorConnectionDB}`);
    process.exit(1);
  }
};

module.exports = connectDB;
