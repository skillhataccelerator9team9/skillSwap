const https = require("https");
const http = require("http"); // Also serve HTTP for redirection
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

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

// General middleware
app.use(cors(corsOptions));
app.use(express.json());

// Redirect HTTP to HTTPS middleware
app.use((req, res, next) => {
  if (req.header("x-forwarded-proto") !== "https") {
    res.redirect(`https://${req.header("host")}${req.url}`);
  } else {
    next();
  }
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error: ", err.message));
//serve static build files from React app
app.use(express.static(path.join(__dirname, "../client/skillswap-ui/build")));

//API Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/protected", require("./routes/protectedRoute"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/", require("./routes/home"));

//serve React app for any other route
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/skillswap-ui/build", "index.html")
  );
});

// SSL options
const sslOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/skillswap.life/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/skillswap.life/fullchain.pem"),
};

// Start HTTPS server
const HTTPS_PORT = 443;
https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
  console.log(`App is listening on HTTPS port ${HTTPS_PORT}`);
});

// Optional: Also listen on HTTP and redirect to HTTPS
const HTTP_PORT = 80;
http.createServer(app).listen(HTTP_PORT, () => {
  console.log(
    `App is listening on HTTP port ${HTTP_PORT}, redirecting to HTTPS`
  );
});
