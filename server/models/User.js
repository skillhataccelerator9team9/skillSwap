const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, default: null },
  points: { type: Number, default: 100 },
  profileImage: { type: String },
  location: { type: String },
  availableDays: { type: [String] },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  reviews: [{ reviewText: String, rating: Number }],
  verified: { type: Boolean, default: false },
  verificationToken: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
