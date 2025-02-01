const mongoose=require('mongoose');
const { type }=require("os")

const photoSchema = new mongoose.Schema({
    name: String,
    specialty: String,
    joined: String,
    dp: String,
    bg: String,
})

const Photo = mongoose.model("Photo", photoSchema)
module.exports = Photo;