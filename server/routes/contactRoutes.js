const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); //mongodb model
//@route /api/contact
//@desc store contact data in contact collection in Mongodb
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  //validate name, emai and message
  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Please fill in all fields" });
  }
  //create new contact using mongoose model
  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });
    //await saving the new contact because it returns a promise
    await newContact.save();
    //.json because we're returns a json obj and automatically sets header: Content-Type: application/json
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
