const mongoose=require('mongoose');
const { type }=require("os")

const photographerSchema = new mongoose.Schema({
    name: { 
           type: String,
           required: true 
        },
    email: { 
           type: String, 
           required: true, 
           unique: true 
        },
    password: { 
            type: String, 
            required: true 
        },
    profilePicture: {
         type: String,
          default: 'defaultProfilePic.jpg' 
        },
       
    bio:{ 
          type: String ,
          default: ''
    },
    photos: { 
        type: [String], 
        default: [] },
});
  
const Photographer = mongoose.model("Photographer", photographerSchema);
module.exports=Photographer