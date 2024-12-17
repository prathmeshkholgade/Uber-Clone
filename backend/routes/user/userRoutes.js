const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../../controllers/user/userController");
const wrapAsync = require("../../utils/wrapAsync");
const { authUser } = require("../../middleware/middleware");

router.post("/register", wrapAsync(registerUser));
router.post("/login", wrapAsync(loginUser));
router.get("/profile", authUser, wrapAsync(getUserProfile));
router.get(
  "/logout",
  wrapAsync(async (req, res, next) => {
    res.clearCookie("token"); // Clear the authentication token
    res.status(200).json({ message: "Logged out successfully" });
  })
);

module.exports = router;
