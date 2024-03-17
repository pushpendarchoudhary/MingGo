const express = require("express");
const { getAllUsers, registerUser } = require("../controller/UserController");

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/users/new").post(registerUser);

module.exports = router;