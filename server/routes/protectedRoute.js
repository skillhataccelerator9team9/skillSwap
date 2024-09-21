const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/protected", authMiddleware, (req, res) => {
  res.json({
    msg: `Welcome, ${req.user.username}. You have access to this protected route!`,
  });
});

module.exports = router;
