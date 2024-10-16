const crypto = require("crypto");
const nodemailer = require("nodemailer");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const { OAuth2Client } = require("google-auth-library");

const router = express.Router();
const User = require("../models/User");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Create transporter for nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app password
  },
});

router.post(
  "/signup",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be 6 or more characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      const verificationToken = crypto.randomBytes(32).toString("hex");

      user = new User({
        username,
        email,
        password,
        verificationToken,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      // Create verification link
      const verifyURL = `${process.env.CLIENT_URL}/verify-email?token=${verificationToken}`;

      // Send verification email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Please verify your email",
        html: `<p>Click the link to verify your email: <a href="${verifyURL}">${verifyURL}</a></p>`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Error sending email: ", err);
          return res.status(500).send("Error sending verification email.");
        }
        console.log("Verification email sent: ", info.response);
        res.status(200).json({
          msg: "Signup successful! Please verify your email.",
        });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   GET /api/auth/verify-email
// @desc    Verify user's email
router.get("/verify-email", async (req, res) => {
  const { token } = req.query;

  try {
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({ msg: "Invalid or expired token" });
    }

    user.verified = true; // Mark the user as verified
    user.verificationToken = null; // Clear the verification token after successful verification
    await user.save();

    res
      .status(200)
      .json({ msg: "Email verified successfully. You can now log in." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      // If the user signed up with Google, bypass email verification
      if (user.password === "") {
        // Allow Google users to bypass the verification check, as they authenticated through Google
        return res.status(400).json({
          msg: "This account was created using Google. Please sign in with Google.",
        });
      }

      // Check if the user's email is verified (only for non-Google users)
      if (!user.verified) {
        return res
          .status(400)
          .json({ msg: "Please verify your email before logging in." });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// Add Google Sign-In route
// @route   POST /api/auth/google-login
// @desc    Login with Google
router.post("/google-login", async (req, res) => {
  const { tokenId } = req.body; // Get the token from frontend

  try {
    // Verify the Google ID token
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name, picture } = ticket.getPayload(); // Extract user info

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // If user doesn't exist, create a new one
      user = new User({
        username: name,
        email,
        avatar: picture, // save the Google profile picture here
        password: "", // Google Sign-In users won't have a password
      });
      await user.save();
    }

    // Create JWT token for the user
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("Google login error: ", err.message);
    res.status(400).json({ msg: "Google login failed" });
  }
});

module.exports = router;

module.exports = router;
