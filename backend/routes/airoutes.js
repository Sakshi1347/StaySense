const express = require("express");

const {
  generateAIDescription,
} = require("../controllers/aicontroller");

const router = express.Router();

router.post(
  "/description",
  generateAIDescription
);

module.exports = router;