const User = require("../../models/usermodel");
const ExpressError = require("../../utils/ExpressError");

module.exports.registerUser = async (req, res, next) => {
  // console.log("data", req.body);
  const { fullName, lastName, email, password } = req.body;
  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ExpressError(400, "Email already exists"));
  }
  const hashededPassword = await User.hashPassword(password);
  const user = await User.create({
    fullName: {
      firstName: fullName.firstName,
      lastName: fullName.lastName,
    },
    email,
    password: hashededPassword,
  });
  const token = user.genetateAuthToken();

  res.status(201).json({ token, user });
};
module.exports.loginUser = async (req, res, next) => {
  // console.log("data", req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ExpressError(401, "please inter valid details"));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ExpressError(401, "Invalid email or password"));
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return next(new ExpressError(401, "Invalid email or password"));
  }

  const token = user.genetateAuthToken();
  res.cookie("token", token);

  res.status(201).json({ token, user, httpOnly: true, maxAge: 3600000 });
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};
