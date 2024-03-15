const Tracks = require("../Models/tracksmodel");

// creating new track 

exports.newTrack = async (req, res, next)=>{

    const track = await Tracks.create(req.body);

    res.status(201).json({
        success:true,
        track
    })
     
}

exports.getAllTracks = (req, res)=>{

    res.status(200).json({message: "Route is working fine"});
}