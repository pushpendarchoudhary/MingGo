const express = require("express");
const { getAllUsers } = require("../controller/UserController");

const router = express.Router();

router.route("/users").get(getAllUsers);

module.exports = router;