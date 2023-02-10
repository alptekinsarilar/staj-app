const User = require("../models/UserModel");

// parametreden gelen email ile kullanıcı dönülecek eğer kullanıcı varsa
// ToDo
exports.getUser = (req, res) => {
  User.findOne({}, (err, users) => {
    if (err) return res.status(500).send(err);
    res.send(users);
  });
};

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.status(500).send(err);
    res.send(user);
  });
};
