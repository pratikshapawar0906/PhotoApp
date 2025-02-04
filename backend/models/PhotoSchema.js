const mongoose=require('mongoose');
const { type }=require("os")

const photoSchema = new mongoose.Schema({
    name: {
         type: String, 
         required: true 
    },
    specialty: {
         type: String, 
         required: true 
    },
    joined:{
        type: String,
    },
    dp:[{
         type: String 
    }],
    bg:[{
         type: String 
    }],
})

const Photo = mongoose.model("Photo", photoSchema)
module.exports = Photo;