const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    orderid: {
        type: String,
        require: true
    },
    plan: {
        type: String,
        require: true
    },
    amount: {
        type: String,
        require: true
    },
    orderdate: {
        type: String,
        require: true
    },
    payby: {
        type: String,
        require: true
    },
    memtype: {
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

module.exports = MONGOOSE.model("orders", EVENTSCHEMA)