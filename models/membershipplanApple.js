const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    planid: {
        type: String,
        require: true
    },
    planname: {
        type: String,
        require: true
    },
    plandisplayname: {
        type: String,
        require: true
    },
    plannoofcontacts: {
        type: String,
        require: true
    },
    planduration: {
        type: String,
        require: true
    },
    planamount: {
        type: String,
        require: true
    },
    planoffers: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("membershipplanApple", EVENTSCHEMA)