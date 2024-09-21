const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

// Update user profile
router.put("/update", authMiddleware, async (req, res) => {
  const { profileImage, location, availableDays } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { profileImage, location, availableDays },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
