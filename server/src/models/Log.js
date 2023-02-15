const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  logs: [
    {
      operationDate: Date,
      operationType: {
        type: String,
        enum: ["login", "signup"],
      },
      status: {
        type: String,
        enum: ["success", "fail"],
      },
    },
  ],
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
