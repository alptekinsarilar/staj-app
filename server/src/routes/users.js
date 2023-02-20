const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJWT");

router.get("/:email", verifyJWT, userController.getUser);

module.exports = router;
