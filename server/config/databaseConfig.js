const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI =
      process.env.NODE_ENV === "test"
        ? process.env.MONGO_URI_TEST
        : process.env.MONGO_URI;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName:
        process.env.NODE_ENV === "test" ? "skillSwapDB_test" : "skillSwapDB",
    });

    console.log(
      `MongoDB connected to ${
        process.env.NODE_ENV === "test" ? "Test DB" : "Production DB"
      }`
    );
  } catch (err) {
    console.error("MongoDB connection error: ", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
