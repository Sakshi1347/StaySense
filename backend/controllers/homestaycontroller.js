const Homestay = require("../models/Homestay");

exports.getHomestays = async (req, res) => {
  const homestays = await Homestay.find();

  res.status(200).json(homestays);
};

exports.getHomestay = async (req, res) => {
  const homestay = await Homestay.findById(req.params.id);

  if (!homestay) {
    return res.status(404).json({
      message: "Homestay not found",
    });
  }

  res.status(200).json(homestay);
};

exports.createHomestay = async (req, res) => {
  const homestay = await Homestay.create(req.body);

  res.status(201).json(homestay);
};

exports.updateHomestay = async (req, res) => {
  const homestay = await Homestay.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(homestay);
};

exports.deleteHomestay = async (req, res) => {
  await Homestay.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: "Deleted Successfully",
  });
};

exports.searchHomestays = async (req, res) => {
  const keyword = req.query.location;

  const homestays = await Homestay.find({
    location: {
      $regex: keyword,
      $options: "i",
    },
  });

  res.status(200).json(homestays);
};