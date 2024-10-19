const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../config/uploadConfig");
const Skill = require("../models/Skill");
const User = require("../models/User");

// @route   POST /api/skills/add
// @desc    Create a new skill for the authenticated user
router.post(
  "/add",
  authMiddleware,
  upload.single("sampleWorkImage"),
  async (req, res) => {
    const { skillName, description, value, tradingPreference, category } =
      req.body;
    const sampleWorkImage = req.file ? req.file.path : null;

    if (
      !skillName ||
      !description ||
      !value ||
      !tradingPreference ||
      !category
    ) {
      return res
        .status(400)
        .json({ msg: "Validation error: Missing required fields" });
    }

    try {
      // Create a new skill document
      const newSkill = new Skill({
        skillName,
        description,
        value,
        tradingPreference, // Include trading preference
        category,
        sampleWorkImage,
      });
      await newSkill.save();

      console.log("New skill created:", newSkill);

      // Add the skill reference to the user's profile
      const user = await User.findById(req.user.id);
      user.skills.push(newSkill._id);
      await user.save();

      console.log(`Skill ${newSkill._id} added to user ${req.user.id}`);

      res.status(201).json(newSkill);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   GET /api/skills
// @desc    Get all skills for the authenticated user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate({
      path: "skills",
      model: "Skill",
    });
    //challenge: .populate("skills") didn't populate the 'skills' array
    res.json(user.skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET /api/skills/user/:userId
// @desc    Get all skills for a specific user by user ID
router.get("/user/:userId", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate({
      path: "skills",
      model: "Skill",
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user.skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   PUT /api/skills/update/:id
// @desc    Update a skill by skill ID

router.put(
  "/update/:id",
  authMiddleware,
  upload.single("sampleWorkImage"),
  async (req, res) => {
    const { skillName, description, value, tradingPreference, category } =
      req.body;
    const sampleWorkImage = req.file ? req.file.path : null;

    try {
      // Prepare data to update
      const updateData = {
        skillName,
        description,
        value,
        tradingPreference,
        category,
      };
      if (sampleWorkImage) {
        updateData.sampleWorkImage = sampleWorkImage;
      }

      const updatedSkill = await Skill.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

      console.log(`Skill ${req.params.id} updated`, updatedSkill);

      res.json(updatedSkill);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   DELETE /api/skills/delete/:id
// @desc    Delete a skill by skill ID

router.delete("/delete/:id", authMiddleware, async (req, res) => {
  try {
    await Skill.findByIdAndRemove(req.params.id);

    // Remove the skill reference from the user
    const user = await User.findById(req.user.id);
    user.skills = user.skills.filter(
      (skillId) => skillId.toString() !== req.params.id
    );
    await user.save();

    res.json({ msg: "Skill removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
