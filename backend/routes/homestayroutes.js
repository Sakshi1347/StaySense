const { protect } = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const {
  getHomestays,
  getHomestay,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
} = require("../controllers/homestaycontroller");

// Public routes
router.get("/", getHomestays);
router.get("/search", searchHomestays);
router.get("/:id", getHomestay);

// Protected routes
router.post("/", protect, createHomestay);
router.put("/:id", protect, updateHomestay);
router.delete("/:id", protect, deleteHomestay);

module.exports = router;