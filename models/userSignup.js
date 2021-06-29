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
    }
})

module.exports = MONGOOSE.model("usersDetails", EVENTSCHEMA)