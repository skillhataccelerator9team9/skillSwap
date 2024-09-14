const express = require("express");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { json } = require("body-parser");

dotenv.config();
const app = express();

var whitelist = [
  "http://localhost:3000",
  "http://159.223.106.163",
  "http://skillswap.life",
];

const corsOptions = {
  origin: whitelist,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ message: "Skill Swap" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is Listening on port ${PORT}`);
});
