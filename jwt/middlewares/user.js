const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const catchAsyncError = require('./catchAsyncError');

exports.isLoggedIn = catchAsyncError(async (req, res, next) => {
  const token =
    req.cookies.token || req?.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return new Error('Please login to continue');
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();
});
