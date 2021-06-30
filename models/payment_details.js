const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    bank_name: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    logo_name: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    acc_type: {
        type: String,
        require: true
    },
    acc_no: {
        type: String,
        require: true
    },
    acc_name: {
        type: String,
        default: false
    },
    ifsc_code: {
        type: String,
        default: "NA"
    },
    branch: {
        type: String,
        default: "NA"
    }
},
    { timestamps: true }
)

module.exports = MONGOOSE.model("payment_details", EVENTSCHEMA)