const User = require("../models/User");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

exports.loginUser = async (req, res) => {
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
      res.send("Success!");
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

exports.createUser = async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ email: email, password: hashedPassword });
  newUser
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

// login ve signup loglarını yeni bir collection'da tut
// loginDate'ler arrayde , her bir email için ayrı array
// patch servisi
// log ve user management
// collection loglama
// Rollerde admin Girls top Last 10 login olanları listede - last success  fail  listesi getirme
// standard locked admin etc.
// docker
// her login olduğunda user log collectionuna tarih ve emaili arraye insert
// userLog collectionu: email, tarih , operation(login or signup), status(success or fail)
