const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const isAdmin = require("../middleware/isAdmin");
const verifyJWT = require("../middleware/verifyJWT");

router.get("/all-users", verifyJWT, isAdmin, userController.getAllUsers);
// router.get("/all-users", userController.getAllUsers);

router.get("/:email", verifyJWT, userController.getUser);

module.exports = router;
