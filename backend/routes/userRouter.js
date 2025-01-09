const express = require('express');
const mongoose = require('mongoose');
const multer = require("multer");
const router = express.Router();
const PhotoController=require('../controllers/PhotoController')
const { signup, login } = require('../controllers/UserSignUp');




//Photo upload
const upload = multer({ dest: "uploads/" });

router.get('/getAllPhotos',PhotoController.getAllPhotos)
router.post("/uploadphoto", upload.single("file1"), PhotoController.uploadPhoto);


// User signUp
router.post('/signup', signup)


router.post('/login',login)

module.exports = router;