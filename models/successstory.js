const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    ID: {
        type: String,
        require: true
    },
    weddingphoto: {
        type: String,
        require: true
    },
    bridename: {
        type: String,
        require: true
    },
    brideid: {
        type: String,
        require: true
    },
    groomname: {
        type: String,
        require: true
    },
    groomid: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    marriagedate: {
        type: String,
        require: true
    },
    successmessage: {
        type: String,
        require: true
    },
    approve: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("successstory", EVENTSCHEMA)