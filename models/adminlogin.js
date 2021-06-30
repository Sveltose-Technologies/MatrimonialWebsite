const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    adminusername: {
        type: String,
        require: true
    },
    adminpassword: {
        type: String,
        require: true
    }
},
    { timestamps: true }
)

module.exports = MONGOOSE.model("adminlogin", EVENTSCHEMA)