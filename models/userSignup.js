const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    profileCreatedFor: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    dateOfBirth: {
        type: String,
        require: true
    },
    maritalStatus: {
        type: String,
        require: true
    },
    mobileNumber: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    mobileVerify: {
        type: String,
        default: false
    },
    otp: {
        type: String,
        default: "NA"
    },
    religion: {
        type: String,
        default: "NA"
    },
    cast: {
        type: String,
        default: "NA"
    },
    education: {
        type: String,
        default: "NA"
    },
    typeOfOccupation: {
        type: String,
        default: "NA"
    },
    livingCity: {
        type: String,
        default: "NA"
    },
    naticePlace: {
        type: String,
        default: "NA"
    },
    ManglikStatus: {
        type: String,
        default: "NA"
    },
    birthCity: {
        type: String,
        default: "NA"
    },
    birthTime: {
        type: String,
        default: "NA"
    },
    profileImage: {
        type: String,
        default: "NA"
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("usersDetails", EVENTSCHEMA)