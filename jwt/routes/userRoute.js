const express = require('express');

const {
  registerUser,
  loginUser,
  getUser,
} = require('../controllers/userController');
const { isLoggedIn } = require('../middlewares/user');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/user').get(isLoggedIn, getUser);

module.exports = router;
