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
    religion: {
        type: String,
        require: true
    },
    sortorder: {
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

module.exports = MONGOOSE.model("caste", EVENTSCHEMA)