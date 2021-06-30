const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    preqid: {
        type: String,
        require: true
    },
    RequesterID: {
        type: String,
        require: true
    },
    ReceiverID: {
        type: String,
        require: true
    },
    PPReqmsg: {
        type: String,
        require: true
    },
    ReqDate: {
        type: String,
        require: true
    },
    ReceiverResponse: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("photoprotectrequesters", EVENTSCHEMA)