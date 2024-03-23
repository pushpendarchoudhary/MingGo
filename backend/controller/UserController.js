

const ErrorHandler = require("../Utils/Errorhandler");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const User = require("../Models/usermodel");
const sendToken = require("../Utils/jwtToken");
const sendEmail = require("../Utils/sendEmail.js");
const crypto = require("crypto");

//Register a user 

exports.registerUser = catchAsyncErrors(async (req,res, next)=>{

    const {name, email, password} = req.body;
    const {countryCode, mobileNumber} = req.body.phone;

    const user = await User.create({
        name, email,phone:{
            countryCode:countryCode,
            mobileNumber:mobileNumber
        }, password, 
        avatar:{
            public_id:"this is a public id ",
            url:"profilepicUrl"
        }
    });

    sendToken(user, 201, res);
})

// user login 
exports.loginUser = catchAsyncErrors(async ( req , res , next)=>{
    const { email,password} = req.body;
    // checking if user has given password and email both
    if(!email || !password) {
        return next(new ErrorHandler("please Enter Email & password", 400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or password", 401));
    }

    sendToken(user, 200, res);
   
});

//logout function 

exports.logout = catchAsyncErrors ((req, res, next) =>{

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: "Logged Out"
    })
})

//Forgot Password 

exports.forgotPassword = catchAsyncErrors(async (req, res, next )=>{

    const user = await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorHandler("User not found"), 404);
    }

    // Get ResetPassword Token 
    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host").trim()}/api/v1/users/reset/${resetToken}`;

    const message = `Your Password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then, please contact us`;

    try {

        await sendEmail({
            email:user.email, 
            subject: `Rhythm Password Recovery`,
            message,
        });

        res.status(200).json({
            success: true, 
            message: `Email sent to ${user.email} successfully`,
            host: `${req.get("host")}`
        })

    }catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500));
    }
})

exports.resetPassword = catchAsyncErrors(async (req, res, next)=>{
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt : Date.now()}
    });

    if(!user){
        return next(new ErrorHandler("Reset password token is Invalid or has been expired", 400));
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match", 400))
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(user, 200, res);
})

// Get user details 
exports.getUserDetails = catchAsyncErrors(async(req,res,next)=>{

    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user,
    });
});

// update user password
exports.updatePassword = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.user.id).select("+password");
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    if(!isPasswordMatched){
        return next (new ErrorHandler("Old Password is Incorrect", 400));
    }

    if(req.body.newPassword !== req.body.confirmPassword){
        return next (new ErrorHandler("password does not match",400));
    }

    user.password = req.body.newPassword;
    await user.save();
    sendToken(user, 200, res);
    
});

exports.updateUserProfile = catchAsyncErrors(async(req,res,next)=>{
    
    const {name, email, phone} = req.body;
    // let file = req.file;
    // console.log(file);
    // if(!file){
    //     return res.status(400).json({message: "no file uploaded"});
    // }
    // let fileUri = getDataUri(file);
    let newUserData={
        name:{
            FirstName: name.FirstName,
            MiddleName: name.MiddleName,
            LastName: name.LastName,
                },
        email: email,
        phone: {
            countryCode: phone.countryCode,
            mobileNumber: phone.mobileNumber},
        avatar:{
                    public_id: "public Id",
                    url: "Image_url",
                },
    };

    
    // if(req.body.file !== ""){

    //     const user= await User.findById(req.user.id);
        
        
    //     await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    //     const myCloud = await cloudinary.v2.uploader.upload(fileUri.content,{
    //         folder: "avatars",
    //         width: 150,
    //         height: 150,
    //         crop: "scale",
    
    //     });
    //     newUserData = {
    //         avatar:{
    //             public_id: myCloud.public_id,
    //             url: myCloud.secure_url,
    //         },
    //       };
        
    //    }
        await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });

    res.status(200).json({
        success:true,
        
    }); 
}) ;

exports.getAllUsers = catchAsyncErrors(async(req,res,next)=>{
    const users = await User.find();
    res.status(200).json({
        success:true,
        users,
    });
});

// get user detail by admin 

exports.getAUser = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new Errorhandler("user does not exist with Id : "+ req.params.id));
    }

    res.status(200).json({
        success:true,
        user,
    });
});

exports.updateUser = catchAsyncErrors(async(req,res,next)=>{
   
    const newUserData = {
        // name:req.body.name,
        // email:req.body.email,
        // phone:req.body.phone,
        role:req.body.role,
        
    };
    await User.findByIdAndUpdate(req.params.id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });

    res.status(200).json({
        success:true,
    }); 
});

exports.deleteUser = catchAsyncErrors(async(req, res, next)=>{
   
    const user = await User.findById(req.params.id);
    if(!user){
      return next(new ErrorHandler("user does not exist with Id : " + req.params.id));
    }
    // const imageId = user.avatar.public_id;
    // await cloudinary.v2.uploader.destroy(imageId);
    
    await user.deleteOne();
  
      res.status(200).json({
          success:true,
          message:"user deleted successfully"
      }); 
  });
// 2:25