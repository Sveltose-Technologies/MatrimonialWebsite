const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    BRONZE: {
        type: String,
        require: true
    },
    SILVER: {
        type: String,
        require: true
    },
    GOLDEN: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("paymentlinks", EVENTSCHEMA)