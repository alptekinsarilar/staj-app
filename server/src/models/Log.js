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
      operationType: String,
      status: String,
    },
  ],
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
