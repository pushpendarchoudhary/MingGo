

const ErrorHandler = require("../Utils/Errorhandler");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const User = require("../Models/usermodel");

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

    const token = user.getJWTToken();

    res.status(201).json({
        success: true,
        user,
        token
    })
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

    const token = user.getJWTToken();

    res.status(200).json({
        success: true,
        token
    })
   
});

//Compare Password 




exports.getAllUsers = (req, res)=> {
    res.status(200).json({message:"Route is working Fine"})
}

// 2:25