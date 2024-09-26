const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Skill Swap!",
    description: "Find the skills you need or offer your skills to others!",
  });
});

module.exports = router;
