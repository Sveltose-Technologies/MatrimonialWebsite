const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    imagelink: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("advertisement", EVENTSCHEMA)