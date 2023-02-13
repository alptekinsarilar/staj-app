const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.loginUser = (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const email = req.body.email;
  const password = req.body.password;
  User.findOne({}, (err, users) => {
    if (err) return res.status(500).send(err);
    res.send(users);
  });
};

exports.createUser = (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const newUser = new User({ email, password });
  newUser
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
