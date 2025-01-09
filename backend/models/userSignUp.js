const mongoose=require('mongoose');
const { type }=require("os")

const userSchema = new mongoose.Schema({
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
    }
  });
  
const UserSignUp = mongoose.model('userSignUp', userSchema);
module.exports = UserSignUp;