const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

http.createServer(app).listen(PORT, () => {
  console.log(`App is listening on HTTP port ${PORT}`);
});
