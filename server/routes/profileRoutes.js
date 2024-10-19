const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../config/uploadConfig");
const User = require("../models/User");

// @route   PUT /api/profile/update
// @desc    Update profile of the authenticated user

router.put(
  "/update",
  authMiddleware,
  upload.single("profileImage"),
  async (req, res) => {
    const { location, availableDays } = req.body;
    const profileImage = req.file ? req.file.path : null;
    try {
      const updatedData = { location, availableDays };
      if (profileImage) {
        updatedData.profileImage = profileImage;
      }

      const user = await User.findByIdAndUpdate(req.user.id, updatedData, {
        new: true,
      });

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   GET /api/profile/userByEmail/:email
// @desc    Get user information by email
router.get("/userByEmail/:email", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
