const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mabdullahmhaleem_db_user:AnasCoder123@cluster0.ms1rmks.mongodb.net/?appName=Cluster0",
    );
    console.log("Connected to db!");
  } catch (error) {
    console.log("DB Connection", error);
  }
};

module.exports = connectDB;
