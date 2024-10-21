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
    const alreadyRequested = requester.requestedServices.some(
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

// @route   PUT /api/dashboard/service/:serviceId/accept
// @desc    Accept or reject a requested service
// @access  Private (Provider Only)
router.put("/service/:serviceId/accept", authMiddleware, async (req, res) => {
  try {
    const { action } = req.body; // action should be either "accept" or "reject"
    const provider = await User.findById(req.user.id);

    // Find the requested service from the provider's providedServices array
    const service = provider.providedServices.find(
      (s) => s._id.toString() === req.params.serviceId && s.status === "WAITING"
    );

    if (!service) {
      return res
        .status(404)
        .json({ msg: "Service not found or not in waiting state" });
    }

    const requester = await User.findById(service.requester);

    if (!requester) {
      return res.status(404).json({ msg: "Requester not found" });
    }

    if (action === "accept") {
      // Update status to "IN_PROGRESS" for both users
      service.status = "IN_PROGRESS";
      const requestedService = requester.requestedServices.find(
        (s) => s.skill.toString() === service.skill.toString()
      );
      if (requestedService) {
        requestedService.status = "IN_PROGRESS";
      }
    } else if (action === "reject") {
      // Remove the service from both users' lists
      provider.providedServices = provider.providedServices.filter(
        (s) => s._id.toString() !== req.params.serviceId
      );
      requester.requestedServices = requester.requestedServices.filter(
        (s) => s.skill.toString() !== service.skill.toString()
      );
    } else {
      return res
        .status(400)
        .json({ msg: "Invalid action. Use 'accept' or 'reject'" });
    }

    await provider.save();
    await requester.save();

    res.json({ msg: `Service ${action}ed successfully` });
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

// @route   POST /api/dashboard/review/:serviceId
// @desc    Add a review for a completed service
// @access  Private (Requires Authentication)
router.post("/review/:serviceId", authMiddleware, async (req, res) => {
  try {
    const { rating, reviewText } = req.body;

    // Find the service from the requester's or provider's completed services
    const user = await User.findById(req.user.id);
    let service;
    if (
      user.requestedServices.some(
        (s) => s._id.toString() === req.params.serviceId
      )
    ) {
      service = user.requestedServices.find(
        (s) =>
          s._id.toString() === req.params.serviceId && s.status === "COMPLETED"
      );
    } else {
      service = user.providedServices.find(
        (s) =>
          s._id.toString() === req.params.serviceId && s.status === "COMPLETED"
      );
    }

    if (!service) {
      return res
        .status(404)
        .json({ msg: "Service not found or not completed" });
    }

    // Save the review (ensure to add validation for rating values)
    service.review = {
      rating: Math.min(Math.max(rating, 1), 5), // Ensure rating is between 1 and 5
      reviewText: reviewText || "",
    };

    await user.save();

    res.json({ msg: "Review added successfully", service });
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

// @route   DELETE /api/dashboard/request/:serviceId/cancel
// @desc    Cancel a requested service that is in the "WAITING" state
// @access  Private (Requires Authentication)
router.delete(
  "/request/:serviceId/cancel",
  authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id);

      // Find the requested service to cancel
      const serviceIndex = user.requestedServices.findIndex(
        (service) =>
          service._id.toString() === req.params.serviceId &&
          service.status === "WAITING"
      );

      if (serviceIndex === -1) {
        return res
          .status(404)
          .json({ msg: "Service not found or not in waiting state" });
      }

      // Remove the service from the requestedServices array
      user.requestedServices.splice(serviceIndex, 1);
      await user.save();

      res.json({ msg: "Service request canceled successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
