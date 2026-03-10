const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getBlogById,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.route("/").get(getBlogs).post(protect, createBlog);

router.route("/id/:id").get(getBlogById);

router.route("/:slug").get(getBlogBySlug);

router.route("/:id").put(protect, updateBlog).delete(protect, deleteBlog);

// Image Upload Route (Cloudinary)
router.post("/upload", protect, upload.single("image"), (req, res) => {
  if (req.file) {
    res.json({
      imageUrl: req.file.path, // Cloudinary returns full URL in path
    });
  } else {
    res.status(400).json({ message: "No file uploaded" });
  }
});

module.exports = router;
