const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    fet_id: {
        type: String,
        require: true
    },
    matid: {
        type: String,
        require: true
    },
    matri_id: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("featured_list", EVENTSCHEMA)