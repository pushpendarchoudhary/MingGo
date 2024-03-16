const express = require("express");
const { getAllTracks, newTrack, updateTrack, deleteTrack, getTrackDetails } = require("../controller/trackController");


const router = express.Router();

router.route("/tracks").get(getAllTracks);
router.route("/tracks/new").post(newTrack); 
router.route("/tracks/update/:id").put(updateTrack).get(getTrackDetails);
router.route("/tracks/delete/:id").delete(deleteTrack);

module.exports = router;