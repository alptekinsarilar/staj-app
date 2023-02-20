const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    // console.log(req.user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
