const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json("Unauthorized");

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) return res.status(403).json("Token not valid");
    req.user = decoded; 
    next();
  });
};

module.exports = verifyToken;
