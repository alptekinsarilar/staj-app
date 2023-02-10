const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const morgan = require("morgan");

// controller service repository
// log in yap ve içeriği get'le (username password var mmı yok mu)
// yoksa hata mesajı çıkart
// class-validator library sor
const User = require("./models/User");

// express app
const app = express();

// middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(morgan("tiny"));

// connect to db

const dbURI = process.env.DB_URI;

mongoose.set("strictQuery", false);
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to db");
    app.listen(8080, () => {
      console.log("Listening on port 8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/api/users", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Ahmet",
      age: 22,
    },
    {
      id: 2,
      name: "Banu",
      age: 25,
    },
    {
      id: 3,
      name: "Hasan",
      age: 17,
    },
  ]);
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  newUser
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
