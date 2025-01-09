const express = require("express");
const mongoose = require("mongoose");
const multer = require('multer');
const cloudinary = require('cloudinary');
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const connectDb = require("./config/db");


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
  
  const upload = multer({ storage: storage })

// database connection
connectDb()


app.get('/', (req,res)=>{
    res.send('Hello from server')
})
// photo upload
app.use('/api/getAllPhotos', userRouter);
app.use('/api/uploadphoto', userRouter);

// user signup
app.use('/api',userRouter)


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})