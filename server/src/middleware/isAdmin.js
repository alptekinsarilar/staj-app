const { ROLE } = require("../util/constants");
const User = require("../models/User");

function isAdmin(req, res, next) {
  const userEmail = req.payload.email;

  // Find the user in the database by email
  User.findOne({ email: userEmail }, (err, user) => {
    if (err || !user) {
      // Handle error or user not found
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check if the user is an admin
    if (user.userRole !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    // User is authorized, continue to the next middleware or route handler
    next();
  });
}

module.exports = isAdmin;
