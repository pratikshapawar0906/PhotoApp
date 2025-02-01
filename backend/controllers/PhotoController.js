const Photo = require("../models/PhotoSchema");
const cloudinary = require("cloudinary").v2;

exports.uploadPhoto = async (req, res) => {
  try {
    const photographers = await Photo.find();
    res.json(photographers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch photographers" });
  }
};

exports.addPhotographer = async (req, res) => {
  try {
    const { name, specialty, joined } = req.body;
    const dp = req.files["dp"] ? `/uploads/${req.files["dp"][0].filename}` : "";
    const bg = req.files["bg"] ? `/uploads/${req.files["bg"][0].filename}` : "";

    const newPhotographer = new Photo({ name, specialty, joined, dp, bg });
    await newPhotographer.save();

    res.status(201).json(newPhotographer);
  } catch (error) {
    res.status(500).json({ message: "Error adding photographer" });
  }
};
