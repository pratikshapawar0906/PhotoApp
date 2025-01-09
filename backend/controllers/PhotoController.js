const Photo = require("../models/PhotoSchema");
const cloudinary = require("cloudinary").v2;

exports.uploadPhoto = async (req, res) => {
  try {
    // Upload the image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(req.file.path);

    // Save the photo URL to the database
    const uploadedPhoto = new Photo({ imgUrl: uploadResult.secure_url });
    const savedPhoto = await uploadedPhoto.save();

    res.status(201).json({ msg: "Photo uploaded successfully", data: savedPhoto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error uploading photo", error: error.message });
  }
};

exports.getAllPhotos = async (req, res) => {
  try {
    const allPhotos = await Photo.find();
    res.status(200).json({ msg: "Photos found", data: allPhotos });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching photos", error: error.message });
  }
};
