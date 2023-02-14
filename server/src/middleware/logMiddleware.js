const logger = require("../util/logger");
const Log = require("../models/Log");
const User = require("../models/User");

logger.on("log", async ({ email, operationType, status }) => {
  const newLog = {
    operationDate: new Date(),
    operationType,
    status,
  };

  await Log.findOneAndUpdate(
    { email },
    { $push: { logs: newLog } },
    { new: true, upsert: true }
  );
});

logger.on("loginUpdate", async (email) => {
  const user = await User.findOneAndUpdate(
    { email },
    { $set: { lastLogin: new Date() } }
  );
});

module.exports = (req, res, next) => {
  req.log = (data) => {
    logger.log(data);
  };

  req.loginUpdate = (email) => {
    logger.loginUpdate(email);
  };
  next();
};
