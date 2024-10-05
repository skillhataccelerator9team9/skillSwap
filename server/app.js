const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/databaseConfig"); // Your new database connection file
const dotenv = require("dotenv");
dotenv.config();

const app = express();

var whitelist = [
  "http://localhost:3000",
  "https://skilltopia.ca",
  "https://www.skilltopia.ca",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("CORS error: This origin is not allowed"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

connectDB();

app.use(express.static(path.join(__dirname, "../client/skillswap-ui/build")));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/protected", require("./routes/protectedRoute"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/", require("./routes/home"));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/skillswap-ui/build", "index.html")
  );
});

module.exports = app;
