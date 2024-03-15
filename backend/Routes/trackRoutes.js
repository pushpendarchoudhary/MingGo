const express = require("express");
const { getAllTracks, newTrack } = require("../controller/trackController");


const router = express.Router();

router.route("/tracks").get(getAllTracks);
router.route("/newtrack").post(newTrack); 

module.exports = router;