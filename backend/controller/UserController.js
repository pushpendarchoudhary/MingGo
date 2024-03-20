

const ErrorHandler = require("../Utils/Errorhandler");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const User = require("../Models/usermodel");
const sendToken = require("../Utils/jwtToken");
const sendEmail = require("../Utils/sendEmail.js");

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

exports.logout = catchAsyncErrors ((req, res) =>{

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

    const resetPasswordUrl = `${ req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your Password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then, please contact us`;

    try {

        await sendEmail({
            email:user.email, 
            subject: `Rythm Password Recovery`,
            messagge,
        });

        res.status(200).json({
            success: true, 
            message: `Email sent to ${user.email} successfully`,
        })

    }catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }
})




exports.getAllUsers = (req, res)=> {
    res.status(200).json({message:"Route is working Fine"})
}

// 2:25