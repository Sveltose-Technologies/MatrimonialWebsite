const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    status: {
        type: String,
        require: true
    },
    marquee: {
        type: String,
        require: true
    }
},
    { timestamps: true }
)

module.exports = MONGOOSE.model("marquee", EVENTSCHEMA)