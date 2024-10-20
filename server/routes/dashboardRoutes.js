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
    const requester = await User.findById(req.user.id); // Requester
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

    // Add to the requester's requested services
    requester.requestedServices.push({
      skill: skill._id,
      provider: provider._id,
      status: "WAITING",
    });

    // Add to the provider's provided services
    provider.providedServices.push({
      skill: skill._id,
      requester: requester._id,
      status: "WAITING",
    });

    await requester.save();
    await provider.save();

    res.status(201).json({ msg: "Service requested successfully", skill });

    console.log(`Service ${skill._id} requested by user ${req.user.id}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   PUT /api/dashboard/complete/:serviceId
// @desc    Mark service as complete for requester or provider
// @access  Private (Requires Authentication)
router.put("/complete/:serviceId", authMiddleware, async (req, res) => {
  try {
    const { role } = req.body; // role should be either "requester" or "provider"
    const user = await User.findById(req.user.id);

    // Determine which service needs to be updated
    let service;
    if (role === "requester") {
      // Look in the requestedServices array if the user is the requester
      service = user.requestedServices.find(
        (s) => s._id.toString() === req.params.serviceId
      );
      if (service) service.isRequesterComplete = true;
    } else if (role === "provider") {
      // Look in the providedServices array if the user is the provider
      service = user.providedServices.find(
        (s) => s._id.toString() === req.params.serviceId
      );
      if (service) service.isProviderComplete = true;
    }

    if (!service) {
      return res.status(404).json({ msg: "Service not found" });
    }

    // Check if both parties have marked it as complete
    if (service.isRequesterComplete && service.isProviderComplete) {
      service.status = "COMPLETED";

      // Transfer points from requester to provider
      const requester = await User.findById(service.requester);
      const provider = await User.findById(service.provider);
      const skill = await Skill.findById(service.skill);

      if (requester && provider && skill) {
        requester.points -= skill.value;
        provider.points += skill.value;
        await requester.save();
        await provider.save();
      }
    }

    await user.save();
    res.json({ msg: "Service status updated", service });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET /api/dashboard/requests
// @desc    Get all requested services categorized by status for the authenticated user
// @access  Private (Requires Authentication)
router.get("/requests", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate({
      path: "requestedServices.skill provider",
      model: "Skill User",
    });

    const waiting = user.requestedServices.filter(
      (service) => service.status === "WAITING"
    );
    const inProgress = user.requestedServices.filter(
      (service) => service.status === "IN_PROGRESS"
    );
    const completed = user.requestedServices.filter(
      (service) => service.status === "COMPLETED"
    );

    res.json({ waiting, inProgress, completed });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
