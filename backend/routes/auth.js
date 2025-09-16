const express = require("express");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const User = require("../models/User");

const router = express.Router();

// In-memory OTP store (for demo purposes)
// In production, consider storing in Redis or DB with expiry
const otpStore = {};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: process.env.MAIL_USER, // your email
    pass: process.env.MAIL_PASS, // your email app password
  },
});

// Step 1: Request OTP
router.post("/request-otp", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email?.trim()) return res.status(400).json({ success: false, message: "Email is required." });

    const otp = Math.floor(1000 + Math.random() * 9000);
    otpStore[email.trim()] = { otp, expires: Date.now() + 5 * 60 * 1000 };

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email.trim(),
      subject: "Your Signup OTP",
      text: `Your OTP for signup is ${otp}. It will expire in 5 minutes.`,
    });

    res.status(200).json({ success: true, message: "OTP sent to email." });
  } catch (err) {
    console.error("OTP Error:", err.message); // <-- log error message
    res.status(500).json({ success: false, message: "Server error. Try again later.", error: err.message });
  }
});

// Step 2: Verify OTP and Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, otp } = req.body;

    if (!name?.trim() || !email?.trim() || !password?.trim() || !otp) {
      return res.status(400).json({ success: false, message: "All fields and OTP are required." });
    }

    // Check if OTP is valid
    const record = otpStore[email.trim()];
    if (!record) return res.status(400).json({ success: false, message: "OTP not requested." });
    if (record.expires < Date.now()) return res.status(400).json({ success: false, message: "OTP expired." });
    if (record.otp.toString() !== otp.toString()) return res.status(400).json({ success: false, message: "Invalid OTP." });

    // Check if email already exists
    const existingUser = await User.findOne({ email: email.trim() });
    if (existingUser) return res.status(400).json({ success: false, message: "Email already registered." });

    // Hash password
    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    // Create user
    const newUser = new User({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
      role: "user",
    });

    await newUser.save();

    // Remove OTP from store
    delete otpStore[email.trim()];

    res.status(201).json({ success: true, message: "User registered successfully." });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// POST /api/auth/login (unchanged)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password?.trim()) {
      return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    const user = await User.findOne({ email: email.trim() });
    if (!user) return res.status(400).json({ success: false, message: "Invalid email or password." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid email or password." });

    const { _id, name, email: userEmail, role } = user;
    res.status(200).json({ success: true, user: { _id, name, email: userEmail, role } });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

module.exports = router;
