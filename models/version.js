const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    versioncode: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("version", EVENTSCHEMA)