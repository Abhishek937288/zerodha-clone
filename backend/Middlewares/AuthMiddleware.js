const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");


module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ status: false, message: "No token provided" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: "Token is invalid or expired" });
    }

    try {
      const user = await User.findById(data.id);
      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        return res.status(404).json({ status: false, message: "User not found" });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Server error", error: err });
    }
  });
};
