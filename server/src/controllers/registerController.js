const User = require("../models/User");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

exports.handleRegister = async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.log({
      email: req.body.email,
      operationType: "signup",
      status: "fail",
    });
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ email: email, password: hashedPassword });
  newUser
    .save()
    .then((result) => {
      req.log({
        email,
        operationType: "signup",
        status: "success",
      });
      res.send(result);
    })
    .catch((err) => console.log(err));
};

// patch servisi
// Rollerde admin Girls top Last 10 login olanları listede - last success  fail  listesi getirme
// docker
