const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split("")[1];
      // Alternative :
      // token = req.headers.authoriaztion.replace("Bearer ", "")

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findOne(decoded.id).select("-password");
      next();
    }
  } catch (errorProtect) {
    res.status(401);
    throw new Error("Unauthorized, invalid token");
  }

  if (!token) {
    res.status(401);
    throw new Error("Unauthorized, please login");
  }
};

module.exports = protect;
