// const UserSchema = require("../Models/usermodel");

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

    res.status(201).json({
        success: true,
        user
    })
})

exports.getAllUsers = (req, res)=> {
    res.status(200).json({message:"Route is working Fine"})
}