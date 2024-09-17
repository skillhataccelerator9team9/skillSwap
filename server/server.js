const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
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
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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

// Routes
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is Listening on port ${PORT}`);
});
