const User = require("../models/usermodel");
const bcrpt = require("bcrypt");
const ExpressError = require("../utils/ExpressError");
const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const Captain = require("../models/captainModel");

module.exports.authUser = async (req, res, next) => {
  // console.log("cookie", req);
  // console.log("headers", req.headers);
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return next(new ExpressError(401, "unauthorized"));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    console.error("Authentication error:", err);
    return next(new ExpressError(500, "unauthorized"));
  }
};
module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return next(new ExpressError(401, "unauthorized"));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await Captain.findById(decoded._id);
    if (!captain) {
      return next(new ExpressError(404, "Captain not found")); // Ensure captain exists
    }
    req.captain = captain;
    return next();
  } catch (err) {
    console.error("Authentication error:", err);
    return next(new ExpressError(500, "unauthorized"));
  }
};
