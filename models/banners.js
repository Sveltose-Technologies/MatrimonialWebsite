const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    bannerimg: {
        type: String,
        require: true
    },
    linktext: {
        type: String,
        require: true
    },
    width: {
        type: String,
        require: true
    },
    height: {
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

module.exports = MONGOOSE.model("banners", EVENTSCHEMA)