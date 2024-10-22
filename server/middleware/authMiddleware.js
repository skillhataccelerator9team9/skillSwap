const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  // Bypass authentication if running in test environment
  if (process.env.NODE_ENV === "test") {
    req.user = { id: requesterId || "someTestUserId" };
    return next();
  }

  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}

module.exports = authMiddleware;
