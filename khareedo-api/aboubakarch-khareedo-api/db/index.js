const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI is not defined in .env file");
    
    await mongoose.connect(uri);
    console.log("Connected to db!");
  } catch (error) {
    console.log("DB Connection", error);
  }
};

module.exports = connectDB;
