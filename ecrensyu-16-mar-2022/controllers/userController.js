// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.status(201).json({
    message: "Register user",
  });
};

// @desc    Login user (Authentication)
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.status(200).json({
    message: "Login user",
  });
};

// @desc    Get user data
// @route   GET /api/users
// @access  Private
const getMe = (req, res) => {
  res.status(200).json({
    message: "Get user data",
  });
};

module.exports = { registerUser, loginUser, getMe };
