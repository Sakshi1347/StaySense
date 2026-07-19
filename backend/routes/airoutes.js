const express = require("express");

const {
  generateAIDescription,
} = require("../controllers/aiController");

const router = express.Router();

router.post(
  "/description",
  generateAIDescription
);

module.exports = router;