const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    pass: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    about: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    memdeails: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("staff", EVENTSCHEMA)