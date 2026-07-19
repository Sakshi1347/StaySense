const { generateDescription } = require("../services/aiService");

const generateAIDescription = async (req, res) => {
  try {
    const { name, location, amenities } = req.body;

    if (!name || !location || !amenities) {
      return res.status(400).json({
        message: "Please provide all fields",
      });
    }

    const description = await generateDescription(
      name,
      location,
      amenities
    );

    res.status(200).json({
      description,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  generateAIDescription,
};