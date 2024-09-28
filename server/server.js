const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

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
      callback(new Error("CORS error: This origin is not allowed"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error: ", err.message));
//serve static build files from React app
app.use(express.static(path.join(__dirname, "client/skillswap-ui/build")));

//API Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/protected", require("./routes/protectedRoute"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/", require("./routes/home"));

//serve React app for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/skillswap-ui/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is Listening on port ${PORT}`);
});
