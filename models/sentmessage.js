const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    pid: {
        type: String,
        require: true
    },
    ToID: {
        type: String,
        require: true
    },
    FromID: {
        type: String,
        require: true
    },
    Msg: {
        type: String,
        require: true
    },
    SendDate: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("sentmessage", EVENTSCHEMA)