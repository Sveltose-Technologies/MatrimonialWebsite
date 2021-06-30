const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    receiverid: {
        type: String,
        require: true
    },
    sentids: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("matchalert", EVENTSCHEMA)