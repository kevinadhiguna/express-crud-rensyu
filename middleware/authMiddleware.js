const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Split "Bearer exfh56.efcahd.echdfe" to ["Bearer", "exfh56.efcahd.echdfe"] then only takes the first index which is "exfh56.efcahd.echdfe" :
      token = req.headers.authorization.split("")[1];
      // alternative (replace "Bearer " with an empty string so only token remaining) :
      // token = req.headers.authorization.replace("Bearer ", "");

      // Decode the token
      const decoded = jwt.decode(token, process.env.JWT_SECRET);

      // Find a user by an ID inside the decoded JWT and fetch the user data (id & email) without returning password
      req.user = await User.findById(decoded.id).select("-password");

      // Allows one to call another mmiddleware if exists
      next();
    }
  } catch (errorProtect) {
    // If token is manipulated
    res.status(401);
    throw new Error("Not authorized");
  }

  // If token does not exist in request headers
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
