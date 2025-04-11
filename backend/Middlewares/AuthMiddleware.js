const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    console.log("No token provided");
    return res
      .status(401)
      .json({ status: false, message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);

    if (user) {
      req.user = { id: user._id, username: user.username };
      next();
    } else {
      console.log("User not found for ID:", decoded.id);
      return res.status(404).json({ status: false, message: "User not found" });
    }
  } catch (err) {
    console.error("Token verification error:", err); 
    return res
      .status(401)
      .json({ status: false, message: "Token is invalid or expired" });
  }
};
