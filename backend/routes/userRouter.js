const express = require('express');
const mongoose = require('mongoose');
const multer = require("multer");
const router = express.Router();
const PhotoController=require('../controllers/PhotoController')
const { signup, login } = require('../controllers/UserSignUp');
const { signup1, login1,  register, user } = require('../controllers/PhotographerController');


const authMiddleware = require('../authentication/Photographer.js');


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


module.exports = router;