const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    Paidid: {
        type: String,
        require: true
    },
    Poid: {
        type: String,
        require: true
    },
    Pmatriid: {
        type: String,
        require: true
    },
    Pname: {
        type: String,
        require: true
    },
    Pemail: {
        type: String,
        require: true
    },
    Paddress: {
        type: String,
        require: true
    },
    Ppaymode: {
        type: String,
        require: true
    },
    Pactivedate: {
        type: String,
        default: false
    },
    Pplan: {
        type: String,
        default: "NA"
    },
    Pplanduration: {
        type: String,
        default: "NA"
    },
    Pnocontct: {
        type: String,
        default: "NA"
    },
    Pamount: {
        type: String,
        default: "NA"
    },
    Pbankdet: {
        type: String,
        default: "NA"
    },
    Pstatus: {
        type: String,
        default: "NA"
    },
    test: {
        type: String,
        default: "NA"
    },
    memtype: {
        type: String,
        default: "NA"
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("paiddetails", EVENTSCHEMA)