const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://engahmadalabdulrazaq:BeBPn7rc0vbdC2bI@cluster0.mdcgusc.mongodb.net/"
    );
    console.log("connected to DB");
  } catch (error) {
    console.log("could not connect to DB", error);
  }
};
module.exports = connectDB;
//mongodb+srv://engahmadalabdulrazaq:BeBPn7rc0vbdC2bI@cluster0.mdcgusc.mongodb.net/
