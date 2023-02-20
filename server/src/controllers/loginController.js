const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

exports.handleLogin = async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.log({
      email: req.body.email,
      operationType: "login",
      status: "fail",
    });
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).send("No such email!"); // Unauthorized
    req.log({ email, operationType: "login", status: "fail" });
    return;
  }

  try {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      // Creating JWTs
      const accessToken = jwt.sign(
        { email: email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "2m" }
      );
      const refreshToken = jwt.sign(
        { email: email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      // Saving refreshToken with current user

      // sameSite ve secure optionlar daha sonra eklenebilir
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken });
      req.loginUpdate(email); // updating lastLogin property of User document in db
      req.log({ email: user.email, operationType: "login", status: "success" });
    } else {
      res.status(401).send("Wrong Password!");
      req.log({ email: user.email, operationType: "login", status: "fail" });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error!");
    req.log({ email: user.email, operationType: "login", status: "fail" });
  }
};
