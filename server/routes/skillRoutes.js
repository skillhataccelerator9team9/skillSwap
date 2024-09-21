const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Skill = require("../models/Skill");
const User = require("../models/User");

// Create a new skill
router.post("/add", authMiddleware, async (req, res) => {
  const { skillName, description, value, sampleWorkImage } = req.body;

  try {
    // Create a new skill document
    const newSkill = new Skill({
      skillName,
      description,
      value,
      sampleWorkImage,
    });
    await newSkill.save();

    // Add the skill reference to the user's profile
    const user = await User.findById(req.user.id);
    user.skills.push(newSkill._id);
    await user.save();

    res.json(user.skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get all skills for a user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("skills");
    res.json(user.skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update a skill
router.put("/update/:id", authMiddleware, async (req, res) => {
  const { skillName, description, value, sampleWorkImage } = req.body;

  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      { skillName, description, value, sampleWorkImage },
      { new: true }
    );

    res.json(updatedSkill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete a skill
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
