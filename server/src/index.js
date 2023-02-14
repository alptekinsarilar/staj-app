const express = require("express");
const allRoutes = require("./routes/allRoutes");
const morgan = require("morgan");
const logMiddleware = require("./middleware/logMiddleware");

// log in yap ve içeriği get'le (username password var mmı yok mu)
// yoksa hata mesajı çıkart

// db connection
const db = require("./config/database");

// express app
const app = express();

// logging middleware
app.use(logMiddleware);

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (as sent by HTML forms)

// built-in middleware for json
app.use(express.json()); // Parse JSON bodies (as sent by API clients)

// HTTP request logger middleware
app.use(morgan("tiny"));

// routes
app.use("/api", allRoutes);

app.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
