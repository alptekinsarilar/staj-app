const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const { body } = require("express-validator");

router.post(
  "/",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  registerController.handleRegister
);

module.exports = router;
