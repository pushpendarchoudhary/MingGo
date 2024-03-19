const mongoose = require("mongoose");
const TrackSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "please Enter track title"]
    },

    artist:{
        type: String,
        required: [true, "please Enter Artist Name"]
    },
    album:{
        type: String,
        required: [true, "please Enter Album Name"]
    },
    genre:[{
        type: String,
        required: [true, " please Enter Genre of the Track"]
    }],
    duration:{
        type: Number,
        required: [true, "please Enter Duration of the track"]
    },
    releaseDate:{
        type: String,
        required: [true, "Release Date of the Track"]
    },
    fileUrl:[
        {
            public_id:{
                type: String,
                required: [true, "public_id is required"]
            }, 
            url:{
                type: String, 
                required:[true, "url is required"]
            }
        }
    ],
    thumbnail:[
        {
            public_id:{
                type: String,
                required: [true, "public_id is required"]
            }, 
            url:{
                type: String, 
                required:[true, "url is required"]
            }
        }
    ],
    copyright:{
        owner:{
            type: String,
            required: [true, "Name of the owner of track"]
        },
        registrationDate:{
            type: Date,
            // required: [true, "Date of registration of the track"]
        },
        registrationNumber:{
            type: String,
            // required: [true, "Registration Number"]
        }
    },
    royalties:[{
        recipient:{
            type: String,
            required: [true, "Enter Username of the recipient"]
        },
        percentage:{
            type: Number,
            default: 0,
        }
    }],
    usageRights:[{
        type: String,
        required: [true, "Usage Rights"]
    }],
    blockchainData:{
        token:{
            type: String,
            required: [true, "token Id is required"]
        },

        smartContracts:[
            {
                type: String,
                required: [true, "smart Contract is required"]
            }
        ]
    },
    listens: {
        type: Number, 
        default: 0
    },
    sales: {
        Quantity:{
            type: Number,
            default: 0,
        },
        Price:{
            type:Number, 
            default: 0
        }
    },

    uploadedBy:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },

    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date, 
        default: Date.now

    },
})

const Tracks = new mongoose.model("Tracks", TrackSchema);

module.exports = Tracks;