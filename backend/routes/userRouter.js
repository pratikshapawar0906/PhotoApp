const express = require('express');
const mongoose = require('mongoose');
const multer = require("multer");
const router = express.Router();
const PhotoController=require('../controllers/PhotoController')
const { signup, login } = require('../controllers/UserSignUp');
const { signup1, login1,  register, user } = require('../controllers/PhotographerController');
const Photographer = require('../models/photographSchema');



//Photo upload
const upload = multer({ dest: "uploads/" });

router.get('/getAllPhotos',PhotoController.getAllPhotos)
router.post("/uploadphoto", upload.single("file1"), PhotoController.uploadPhoto);


// User signUp
router.post('/signup', signup)
router.post('/login',login)

// Photographer signup
router.post('/signup1', signup1)
router.post('/login1', login1)
router.post('/register', register);
router.get("/user/:userId" ,user)

router.post("/user/upload", upload.single("photo"), async (req, res) => {
    try {
        const { userId } = req.body; // Retrieve the userId from the request body

        // Check if user exists
        const user = await Photographer.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Generate the photo URL (assuming the photo is stored in the "uploads" folder)
        const photoUrl = `http://localhost:8000/uploads/${req.file.filename}`;

        // Save the photo URL to the user's profile photos array
        user.photos.push(photoUrl);
        await user.save();

        // Return the photo URL in the response
        res.json({ photoUrl });
    } catch (error) {
        console.error("Error uploading photo:", error);
        res.status(500).json({ message: "Error uploading photo", error });
    }
});

router.post("/user/uploadProfilePhoto", upload.single("profilePhoto"), async (req, res) => {
    try {
        console.log("File received:", req.file);
        console.log("Request body:", req.body);

        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const user = await Photographer.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Save the file URL
        const photoUrl = `http://localhost:8000/uploads/${req.file.filename}`;
        user.profilePicture = photoUrl; // ✅ Update the profilePicture field in DB
        await user.save(); // ✅ Save changes to MongoDB

        res.json({ message: "Profile photo updated successfully", photoUrl });
    } catch (error) {
        console.error("Error uploading photo:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});


module.exports = router;