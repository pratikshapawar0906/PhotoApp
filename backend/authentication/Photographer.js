const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const authMiddleware = (req, res, next) => {
  // Retrieve the token from the Authorization header
  const token = req.headers['authorization']?.split(' ')[1];

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // Handle error if token is invalid or expired
    if (err) {
      return res.status(401).json({ message: 'Invalid token', error: err.message });
    }

    // Attach the decoded user info to the request object
    req.userId = decoded.userId;

    // Proceed to the next middleware or route handler
    next();
  });
};

module.exports = authMiddleware;
