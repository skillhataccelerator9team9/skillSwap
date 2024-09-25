const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Please fill in all fields" });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res
      .status(200)
      .json({ msg: "Form data received and stored successfully!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
