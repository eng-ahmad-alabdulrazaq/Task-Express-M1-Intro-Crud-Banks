const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.M0NG0DB_LINK);
    console.log("connected to DB");
  } catch (error) {
    console.log("could not connect to DB", error);
  }
};

module.exports = connectDB;
