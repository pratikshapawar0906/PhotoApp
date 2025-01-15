const express = require('express');
const mongoose = require('mongoose');
const multer = require("multer");
const router = express.Router();
const PhotoController=require('../controllers/PhotoController')
const { signup, login } = require('../controllers/UserSignUp');
const { signup1, login1 } = require('../controllers/PhotographerController');





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

module.exports = router;