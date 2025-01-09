const mongoose=require('mongoose');
const { type }=require("os")

const photoSchema = new mongoose.Schema({
    imgUrl :{
        type:String
    }
})

const Photo = mongoose.model("Photo", photoSchema)
module.exports = Photo;