const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    ID: {
        type: String,
        require: true
    },
    who1: {
        type: String,
        require: true
    },
    whom1: {
        type: String,
        require: true
    },
    when1: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    checked: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("viewedaddress", EVENTSCHEMA)