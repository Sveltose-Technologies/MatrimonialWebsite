const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    ID: {
        type: String,
        require: true
    },
    Webname: {
        type: String,
        require: true
    },
    WebFriendlyname: {
        type: String,
        require: true
    },
    Weblogopath: {
        type: String,
        require: true
    },
    Title: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Keywords: {
        type: String,
        require: true
    },
    Footer: {
        type: String,
        require: true
    },
    Dbserver: {
        type: String,
        require: true
    },
    Dbuser: {
        type: String,
        require: true
    },
    Dbpass: {
        type: String,
        require: true
    },
    Dbname: {
        type: String,
        require: true
    },
    Fromemail: {
        type: String,
        require: true
    },
    ToEmail: {
        type: String,
        require: true
    },
    FeedbackEmail: {
        type: String,
        require: true
    },
    ContactEmail: {
        type: String,
        require: true
    },
    SalesEmail: {
        type: String,
        require: true
    },
    AdminEmail: {
        type: String,
        require: true
    },
    paypalid: {
        type: String,
        require: true
    },
    paymentid: {
        type: String,
        require: true
    },
    currency: {
        type: String,
        require: true
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("siteconfig", EVENTSCHEMA)