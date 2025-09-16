const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim() || !email?.trim() || !password?.trim()) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email: email.trim() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already registered." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    // Create user with default role "user"
    const newUser = new User({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
      role: "user",
    });

    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully." });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password?.trim()) {
      return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    const user = await User.findOne({ email: email.trim() });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }

    // ✅ Return user data without password
    const { _id, name, email: userEmail, role } = user;
    res.status(200).json({ success: true, user: { _id, name, email: userEmail, role } });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

module.exports = router;
