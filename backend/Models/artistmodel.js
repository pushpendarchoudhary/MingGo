const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({

    name: {
        FirstName: {
            type:String,
            required: [true, "please enter your First name"],
            maxLength:[15, " cannot exceed 15 characters"],
            minlength:[4, "name should have atleast 4 characters"]
        }, 

        MiddleName: {
            type:String, 
            maxLength:[15, " cannot exceed 15 characters"],
            minlength:[4, "name should have atleast 4 characters"]
        },

        LastName: {
            type:String,
            maxLength:[15, " cannot exceed 15 characters"],
            minlength:[4, "name should have atleast 4 characters"]
        },

        StageName: {
            type: String,
            maxLength: [20, "cannot exceed 20 characters"],
            minlength:[4, "name should have atleast 4 characters"]
        }
    },

    bio: {
        country: String,
        language: String,
    },

    genre: [{
        type:String
    }],

    albums: [{
        title: String,
        releaseDate: String,
        tracks: [{
            title: String,
        }]
    }],

    socialLinks : [{
        platform: String,
        url: String,
    }],
    userId:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now() 
    }
})

const Artist = new mongoose.model("Artist", artistSchema);

module.exports = Artist;