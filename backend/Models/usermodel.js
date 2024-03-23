const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserSchema = mongoose.Schema({
    name: {
        
            FirstName: {
                type:String,
                required: [true, "please enter your First name"],
                maxLength:[15, "name cannot exceed 15 characters"],
                minlength:[4, "name should have more than 4 characters"]
            }, 

            MiddleName: {
                type:String, 
                maxLength:[15, "name cannot exceed 15 characters"],
                minlength:[4, "name should have more than 4 characters"]
            },

            LastName: {
                type:String,
                maxLength:[15, "name cannot exceed 15 characters"],
                minlength:[4, "name should have more than 4 characters"]
            }
        
    },

    email:{
        type:String,
        required:[true,"please Enter your Email"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"]
    },
    phone:{
        countryCode:{
            type:String,
            required:true,
        },
        mobileNumber:{
            type:String,
            required:[true, "please enter your mobile no"],
            maxLength:[13, "Contact should be of 10 digits"]
        }

    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        minLength:[8,"password should be greater than 8 characters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type: String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"   
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    },
    resetPasswordToken:String,
    resetPasswordExpire: Date,
});

UserSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

//JWT Token 
UserSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}
//Compare Password
UserSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

// Generating Password reset Token 

UserSchema.methods.getResetPasswordToken = function(){
    // Generating Token 
    const resetToken = crypto.randomBytes(20).toString("hex");
    
    //hashing and adding resetPasswordToken to userSchema 

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 *1000;

    return resetToken;
}

const User = new mongoose.model("Users", UserSchema);
module.exports = User;