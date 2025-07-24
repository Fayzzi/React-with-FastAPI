const User = require("./../models/User");
const ErrorHandler = require("./../utils/ErrorHandler");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { user_token } = req.cookies;
    if (!user_token) {
      return next(new ErrorHandler("Token is expired!!", 500));
    }
    const userData = jwt.verify(user_token, process.env.JWT_SECRET);
    if (!userData) {
      return next(new ErrorHandler("Login to continue!!", 500));
    }
    const userExtracted = await User.findById({ _id: userData._id });
    if (!userExtracted) {
      return next(new ErrorHandler("No user found!!", 500));
    }
    req.user = userExtracted;
    next();
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
};
