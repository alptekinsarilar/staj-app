const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { body } = require("express-validator");

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  userController.loginUser
);
router.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  userController.createUser
);

module.exports = router;
