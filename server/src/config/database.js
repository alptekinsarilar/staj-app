const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const dbURI = process.env.DB_URI;

mongoose.set("strictQuery", false);

mongoose.connect(dbURI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database!");
});

module.exports = db;
