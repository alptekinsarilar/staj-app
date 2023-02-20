const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const { body } = require("express-validator");

router.post(
  "/",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  loginController.handleLogin
);

module.exports = router;
