const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Skill = require("../models/Skill");
const User = require("../models/User");

// @route   POST /api/dashboard/request/:skillId
// @desc    Request a service (skill) from another user
// @access  Private (Requires Authentication)
router.post("/request/:skillId", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Requester
    const skill = await Skill.findById(req.params.skillId); // Skill being requested

    if (!skill) {
      return res.status(404).json({ msg: "Skill not found" });
    }

    const provider = await User.findOne({ skills: skill._id }); // Find the provider

    if (!provider) {
      return res.status(404).json({ msg: "Provider not found" });
    }

    // Check if the user has already requested this service
    const alreadyRequested = user.requestedServices.some(
      (service) => service.skill.toString() === skill._id.toString()
    );

    if (alreadyRequested) {
      return res
        .status(400)
        .json({ msg: "You have already requested this service" });
    }

    // Add to the user's requested services
    user.requestedServices.push({
      skill: skill._id,
      provider: provider._id,
      status: "WAITING",
    });

    // Add to the provider's provided services
    provider.providedServices.push({
      skill: skill._id,
      requester: user._id,
      status: "WAITING",
    });

    await user.save();
    await provider.save();

    res.status(201).json({ msg: "Service requested successfully", skill });

    console.log(`Service ${skill._id} requested by user ${req.user.id}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
