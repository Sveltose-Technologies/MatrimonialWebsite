const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    short_id: {
        type: String,
        require: true
    },
    mat_id: {
        type: String,
        require: true
    },
    mat_name: {
        type: String,
        require: true
    },
    log_id: {
        type: String,
        require: true
    },
    log_mat_id: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("shortlist_profile", EVENTSCHEMA)