const express = require("express");

const router = express.Router();

const {
  getHomestays,
  getHomestay,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
} = require("../controllers/homestayController");

router.get("/", getHomestays);

router.get("/search", searchHomestays);

router.get("/:id", getHomestay);

router.post("/", createHomestay);

router.put("/:id", updateHomestay);

router.delete("/:id", deleteHomestay);

module.exports = router;