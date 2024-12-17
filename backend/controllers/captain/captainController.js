const { json } = require("express");
const Captain = require("../../models/captainModel");
const ExpressError = require("../../utils/ExpressError");

module.exports.registerCaptain = async (req, res, next) => {
  console.log(req.body);
  const { fullName, email, password, vehicle } = req.body;
  const isEmail = await Captain.findOne({ email });
  if (isEmail) {
    return next(new ExpressError(400, "Email already exists"));
  }
  const hashedPassword = await Captain.hashPassword(password, 10);
  const newCaptain = await Captain.create({
    fullName: {
      firstName: fullName.firstName,
      lastName: fullName.lastName,
    },
    email,
    password: hashedPassword,
    vehicle: {
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    },
  });
  const token = await newCaptain.generateAuthToken();
  res.status(200).json({ token, newCaptain });
};
module.exports.loginCaptain = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return next(new ExpressError(401, "please inter valid details"));
  }
  const captain = await Captain.findOne({ email }).select("+password");
  if (!captain) {
    return next(new ExpressError(401, "Invalid email or password"));
  }
  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return next(new ExpressError(401, "Invalid email or password"));
  }
  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, captain });
};
module.exports.captainLogout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "logOut succssfully" });
};
module.exports.getCaptainProfile = (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};
