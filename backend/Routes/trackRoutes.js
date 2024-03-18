const express = require("express");
const { getAllTracks, newTrack, updateTrack, deleteTrack, getTrackDetails } = require("../controller/trackController");
const { isAuthenticatedUser } = require("../Middleware/auth");



const router = express.Router();

router.route("/tracks").get(getAllTracks);
router.route("/tracks/new").post(isAuthenticatedUser, newTrack); 
router.route("/tracks/update/:id").put(isAuthenticatedUser, updateTrack).get(getTrackDetails);
router.route("/tracks/delete/:id").delete(isAuthenticatedUser, deleteTrack);

module.exports = router;