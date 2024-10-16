const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  skillName: { type: String, required: true },
  description: { type: String },
  category: { type: String }, //dropdown
  //Trading preferance: inPerson/virtual
  value: { type: Number, required: true },
  sampleWorkImage: { type: String },
});

module.exports = mongoose.model("Skill", SkillSchema);
