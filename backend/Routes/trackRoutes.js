const express = require("express");
const { getAllTracks, newTrack, updateTrack, deleteTrack, getTrackDetails } = require("../controller/trackController");
const { isAuthenticatedUser, authorizeRoles } = require("../Middleware/auth");



const router = express.Router();

router.route("/tracks").get(getAllTracks);
router.route("/tracks/new").post(isAuthenticatedUser, authorizeRoles("Artist"), newTrack); 
router.route("/tracks/update/:id").put(isAuthenticatedUser, authorizeRoles("Artist"), updateTrack).get(getTrackDetails);
router.route("/tracks/delete/:id").delete(isAuthenticatedUser, authorizeRoles("Artist"), deleteTrack);

module.exports = router;