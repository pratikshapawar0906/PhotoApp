const UserSignUp = require("../models/userSignUp");
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

exports.signup= async (req, res) => {
  
    try {
      console.log("Request received:", req.body);

      const { name, email, password } = req.body;
      const user = await UserSignUp.findOne({ email });
      console.log("User exists?", user);

      if (user) {
          return res.status(400).json({
              message: "User already exists, you can login",
              success: false
          });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserSignUp({ name, email, password: hashedPassword });
      const savedUser = await newUser.save();

      console.log("User saved:", savedUser);

      res.status(201).json({
          message: "SignUp successfully",
          success: true
      });
    } catch (error) {
      console.error("Error during sign-up:", error.message);
      res.status(500).json({
          message: "An error occurred during sign-up",
          success: false,
          error: error.message
      });
  }
};

exports.login = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Check if user exists
      const user = await UserSignUp.findOne({ email });
      if (!user) {
          return res.status(403).json({
              message: "Auth faled email and password i wrong",
              success: false,
          });
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({
              message: "Invalid credentials.",
              success: false,
          });
      }

      // jwt token
      const jwtToken=jwt.sign(
          {email: user.email, _id :user._id},
          process.env.JWT_SECRET,
          { expiresIn: '14h' } 
      )
      res.status(200).json({
          message: "Login successful.",
          success: true,
          jwtToken,
          email,
          name: user.name,
      });
  } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({
          message: "An error occurred during login.",
          success: false,
          error: error.message,
      });
  }
};
