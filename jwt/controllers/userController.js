const User = require('../models/userModel');
const catchAsyncError = require('../middlewares/catchAsyncError');
const sendToken = require('../utils/jwtToken');

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  sendToken(user, 201, res);
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return new Error(
      'Email and Password does not match or user does not exist'
    );
  }

  const isPasswordMatched = user.comparePassword(password);

  if (!isPasswordMatched) {
    return new Error(
      'Email and Password does not match or user does not exist'
    );
  }

  sendToken(user, 200, res);
});
