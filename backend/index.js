const express = require("express");
const mongoose = require("mongoose");
const multer = require('multer');
const path = require("path");
const cloudinary = require('cloudinary');
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const connectDb = require("./config/db");
const Photographer = require("./models/photographSchema");


require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4000

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
 
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true); // Accept image files
    } else {
        cb(new Error("Please upload an image file"), false); // Reject non-image files
    }
  };

  const upload = multer({ 
    storage: storage ,
    fileFilter: fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limit to 10MB per file
  })

// database connection
connectDb()



app.get('/', (req,res)=>{
    res.send('Hello from server')
})
// photo upload
app.use('/api/getAllPhotos', userRouter);
app.use('/api/uploadphoto', userRouter);

app.use(express.urlencoded({ extended: true }));
// user signup
app.use('/api',userRouter)

// Serve static files (uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.delete('/api/user/deletePhoto', async (req, res) => {
  const { userId, photoUrl } = req.body;

  try {
      // Find the user and update their photo list
      const user = await Photographer.findById(userId);
      if (!user) return res.status(404).json({ message: "User not found" });

      user.photos = user.photos.filter(photo => photo !== photoUrl);
      await user.save();

      res.json({ message: "Photo deleted successfully", photos: user.photos });
  } catch (error) {
      res.status(500).json({ message: "Error deleting photo", error });
  }
});

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})