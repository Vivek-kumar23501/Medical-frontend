const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Blog = require("../models/Blog");

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) {
      return cb(new Error("Only images are allowed"));
    }
    cb(null, true);
  },
  limits: { fileSize: 2 * 1024 * 1024 },
});

// ✅ Create Blog
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.body.name || !req.body.title || !req.body.description || !req.file) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newBlog = new Blog({
      name: req.body.name,
      title: req.body.title,
      description: req.body.description,
      image: `/uploads/${req.file.filename}`,
    });

    await newBlog.save();
    res.json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get All Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Delete Blog
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    const imagePath = path.join(__dirname, "..", blog.image);
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
