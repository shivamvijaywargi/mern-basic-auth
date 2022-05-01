const jwt = require('jsonwebtoken');

const catchAsyncError = require('./catchAsyncError');

exports.isLoggedIn = catchAsyncError(async (req, res, next) => {
  const token =
    req.cookies.token || req.headers('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(404).json({
      success: false,
      message: 'No Token found',
    });
  }

  jwt.verify(String(token), process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(400).json({ message: 'Invalid Token' });
    }
    console.log(user.id);
    req.user = user.id;
  });

  next();
});
