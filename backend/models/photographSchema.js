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
    profile: {
           bio: { type: String },
           age: { type: Number },
        },
});
  
const Photographer = mongoose.model("Photographer", photographerSchema);
module.exports=Photographer