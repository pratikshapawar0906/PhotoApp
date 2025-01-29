const Photographer=require('../models/photographSchema')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

exports.signup1= async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const newPhotographer = new Photographer({ name, email, password: hashedPassword });
      await newPhotographer.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      if (err.code === 11000) {
        res.status(400).json({ message: "Email already exists" });
      } else {
        res.status(500).json({ message: "Server error" });
      }
    }
};

exports.login1 = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Photographer.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    // Return the token and userId
    res.json({
      token,
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await Photographer.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        userId: existingUser._id, // Send existing user's ID
      });
    }

    // If new user, register them
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Photographer({ email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, userId: newUser._id, message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



// In your backend (Node.js / Express example)
exports.user=async (req, res) => {
  const { userId } = req.params;

  try {
      const user = await Photographer.findById(userId); // Assuming Photographer is your user model
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
  } catch (err) {
      res.status(500).json({ message: "Error fetching user profile", error: err.message });
  }
};
