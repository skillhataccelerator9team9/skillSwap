const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  points: { type: Number, default: 100 },
  profileImage: { type: String },
  location: { type: String },
  availableDays: { type: [String] },
  skills: [
    {
      skillName: String,
      levelOfExperience: String,
      skillValue: Number,
      skillImage: String,
    },
  ],
  reviews: [{ reviewText: String, rating: Number }],
});

module.exports = mongoose.model("User", UserSchema);
