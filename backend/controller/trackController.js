const Tracks = require("../Models/tracksmodel");
const router = require("../Routes/trackRoutes");
const ErrorHandler = require("../Utils/Errorhandler");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");

// creating new track -- 

exports.newTrack = catchAsyncErrors (async (req, res, next)=>{

    const track = await Tracks.create(req.body);

    res.status(201).json({
        success:true,
        track
    })
     
})
// All tracks
exports.getAllTracks = catchAsyncErrors (async (req, res)=>{

    const tracks = await Tracks.find();

    res.status(200).json({
        success:true,
        tracks
    })
})

// Track details 
exports.getTrackDetails = catchAsyncErrors (async (req, res, next)=>{
    
    const track = await Tracks.findById(req.params.id);

    if(!track){
        return next (new ErrorHandler("Track not found", 404))
    }

    res.status(200).json({
        success:true,
        track
    })
})

//UpdateTrack
exports.updateTrack = catchAsyncErrors (async (req,res, next)=>{
    let track = Tracks.findById(req.params.id);

    if(!track){
        return next (new ErrorHandler("Track not found", 404))
    }

    track= await Tracks.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true, 
        message: "Track Updated Successfully",
    })
})

//deleteTrack
exports.deleteTrack = catchAsyncErrors (async (req, res, next)=>{

    const track = await Tracks.findById(req.params.id);
    if(!track){
        return next (new ErrorHandler("TrackNotFound", 500))
    }

    await track.deleteOne();

    res.status(200).json({
        success: true,
        message: "Track deleted successfully"
    })
})
