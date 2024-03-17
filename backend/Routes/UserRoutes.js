const express = require("express");
const { getAllUsers, registerUser, loginUser } = require("../controller/UserController");

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/users/new").post(registerUser);
router.route("/users/login").post(loginUser); 

module.exports = router;