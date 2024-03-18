const express = require("express");
const { getAllUsers, registerUser, loginUser, logout } = require("../controller/UserController");
const { isAuthenticatedUser, authorizeRoles } = require("../Middleware/auth");


const router = express.Router();

router.route("/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
router.route("/users/new").post(registerUser);
router.route("/users/login").post(loginUser);
router.route("/users/logout").get(logout);

module.exports = router;