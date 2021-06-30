const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    login_id: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        require: true
    },
    timing: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("Profile_view", EVENTSCHEMA)