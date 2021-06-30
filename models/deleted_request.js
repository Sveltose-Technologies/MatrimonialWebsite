const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    re_id: {
        type: String,
        require: true
    },
    mat_id: {
        type: String,
        require: true
    },
    reason: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    cont_no: {
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

module.exports = MONGOOSE.model("deleted_request", EVENTSCHEMA)