const express = require("express");
const { getAllUsers, registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateUserProfile, getAUser, updateUser, deleteUser } = require("../controller/UserController");
const { isAuthenticatedUser, authorizeRoles } = require("../Middleware/auth");
const { registerArtist, artistDetails, getAllArtist, getAnArtist, deleteArtist } = require("../controller/artistController");


const router = express.Router();

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
router.route("/users/new").post(registerUser);
router.route("/users/login").post(loginUser);
router.route("/users/logout").get(logout);
router.route("/users/forgotPassword").post(forgotPassword);
router.route("/users/reset/:token").put(resetPassword);
router.route("/users/details").get(isAuthenticatedUser, authorizeRoles("artist"), getUserDetails);
router.route("/users/Password/Update").put(isAuthenticatedUser, updatePassword);
router.route("/users/profile/update").put(isAuthenticatedUser, updateUserProfile);
router.route("/admin/details/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getAUser).put(isAuthenticatedUser, authorizeRoles("admin"), updateUser).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
router.route("/artist/register").post(isAuthenticatedUser, registerArtist);
router.route("/artist/details").get(isAuthenticatedUser, authorizeRoles("admin"), artistDetails);
router.route("/admin/allArtist").get(isAuthenticatedUser, authorizeRoles("admin"), getAllArtist);
router.route("/admin/artist/details/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getAnArtist);
router.route("/admin/artist/delete/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteArtist);



module.exports = router;