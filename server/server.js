const https = require("https");
const http = require("http"); // Also serve HTTP for redirection
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

if (process.env.NODE_ENV === "production") {
  // SSL options
  const sslOptions = {
    key: fs.readFileSync("/etc/letsencrypt/live/skillswap.life/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/skillswap.life/fullchain.pem"),
  };

  const HTTPS_PORT = 443;
  https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
    console.log(`App is listening on HTTPS port ${HTTPS_PORT}`);
  });

  const HTTP_PORT = 80;
  http.createServer(app).listen(HTTP_PORT, () => {
    console.log(
      `App is listening on HTTP port ${HTTP_PORT}, redirecting to HTTPS`
    );
  });
} else {
  const PORT = process.env.PORT || 5000;
  http.createServer(app).listen(PORT, () => {
    console.log(`App is listening on HTTP port ${PORT}`);
  });
}
