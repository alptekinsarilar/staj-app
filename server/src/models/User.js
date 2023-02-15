const mongoose = require("mongoose");
const { ROLE } = require("../util/constants");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  userRole: {
    type: String,
    enum: [ROLE.STANDARD, ROLE.ADMIN],
    default: ROLE.STANDARD,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
