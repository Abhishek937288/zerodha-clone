const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
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
      return res.status(404).json({ status: false, message: "User not found" });
    }
  } catch (err) { 
    return res
      .status(401)
      .json({ status: false, message: "Token is invalid or expired" });
  }
};
