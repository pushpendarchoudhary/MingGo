

const ErrorHandler = require("../Utils/Errorhandler");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const Artist = require("../Models/artistmodel.js");
const User = require("../Models/usermodel.js");
const sendToken = require("../Utils/jwtToken");
const sendEmail = require("../Utils/sendEmail.js");
const crypto = require("crypto");

//Register a user 

exports.registerArtist = catchAsyncErrors(async (req,res, next)=>{

    
    req.body.userId = req.user.id;

   const artist = await Artist.create(
    req.body)

    res.status(201).json({
        success: true,
        artist,
        message: "Registered as artist"
    })
})




// Get user details 
exports.artistDetails = catchAsyncErrors(async(req,res,next)=>{

    const artist = await Artist.findOne({userId: req.user.id});

    if(!artist) {
        return next(new ErrorHandler("artist not found", 404));
    }
    const user = await User.findById(req.user.id);


    res.status(200).json({
        success: true,
        user,
        artist
    });
});


//get all artist admin
exports.getAllArtist = catchAsyncErrors(async(req,res,next)=>{
    const artist = await Artist.find();
    res.status(200).json({
        success:true,
        artist,
    });
});

// get user detail by admin 

exports.getAnArtist = catchAsyncErrors(async(req,res,next)=>{
    const artist = await Artist.findById(req.params.id);
    const user_id = artist.userId;

    const user = await User.findById(user_id);

    if(!artist){
        return next(new ErrorHandler("Artist does not exist with Id : "+ req.params.id));
    }

    res.status(200).json({
        success:true,
        artist,
        user
    });
});

// delete artist -- admin
exports.deleteArtist = catchAsyncErrors(async(req, res, next)=>{
   
    const artist = await Artist.findById(req.params.id);
    if(!artist){
      return next(new ErrorHandler("user does not exist with Id : " + req.params.id));
    }
    // const imageId = user.avatar.public_id;
    // await cloudinary.v2.uploader.destroy(imageId);
    
    await artist.deleteOne();
  
      res.status(200).json({
          success:true,
          message:"Artist deleted successfully"
      }); 
  });
// 2:25