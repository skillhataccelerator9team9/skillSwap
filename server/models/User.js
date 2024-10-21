const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, default: null },
  points: { type: Number, default: 100 },
  profileImage: { type: String },
  location: { type: String },
  availableDays: { type: [String] },

  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }], // Services provided by the user

  requestedServices: [
    {
      skill: { type: mongoose.Schema.Types.ObjectId, ref: "Skill" },
      provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      status: {
        type: String,
        enum: ["WAITING", "IN_PROGRESS", "COMPLETED"],
        default: "WAITING",
      },
      isRequesterComplete: { type: Boolean, default: false },
      isProviderComplete: { type: Boolean, default: false },
      review: {
        rating: { type: Number, min: 1, max: 5 },
        reviewText: { type: String },
      },
    },
  ],

  providedServices: [
    {
      skill: { type: mongoose.Schema.Types.ObjectId, ref: "Skill" },
      requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      status: {
        type: String,
        enum: ["WAITING", "IN_PROGRESS", "COMPLETED"],
        default: "WAITING",
      },
      isRequesterComplete: { type: Boolean, default: false },
      isProviderComplete: { type: Boolean, default: false },
      review: {
        rating: { type: Number, min: 1, max: 5 },
        reviewText: { type: String },
      },
    },
  ],
  verified: { type: Boolean, default: false },
  verificationToken: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
