const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    eisender: {
        type: String,
        require: true
    },
    eireceiver: {
        type: String,
        require: true
    },
    eimsg: {
        type: String,
        require: true
    },
    eisentdt: {
        type: String,
        require: true
    },
    eisender_accept: {
        type: String,
        require: true
    },
    eirec_accept: {
        type: String,
        require: true
    },
    eisender_decline: {
        type: String,
        require: true
    },
    eirec_decline: {
        type: String,
        require: true
    },
    dec_msg: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("expressinterest_org", EVENTSCHEMA)