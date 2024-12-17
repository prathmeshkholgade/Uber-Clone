const express = require("express");
const {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  captainLogout,
} = require("../../controllers/captain/captainController");
const wrapAsync = require("../../utils/wrapAsync");
const { authCaptain } = require("../../middleware/middleware");
const router = express.Router();

router.post("/register", wrapAsync(registerCaptain));
router.post("/login", wrapAsync(loginCaptain));
router.get("/profile", authCaptain, wrapAsync(getCaptainProfile));
router.get("/logout", authCaptain, wrapAsync(captainLogout));
module.exports = router;
