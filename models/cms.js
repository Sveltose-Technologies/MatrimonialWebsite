const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    cms_id: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("cms", EVENTSCHEMA)