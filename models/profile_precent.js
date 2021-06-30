const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    id: {
        type: String,
        require: true
    },
    photo1: {
        type: String,
        require: true
    },
    photo2: {
        type: String,
        require: true
    },
    photo3: {
        type: String,
        require: true
    },
    hobbies: {
        type: String,
        require: true
    },
    intrest: {
        type: String,
        require: true
    },
    Page: {
        type: String,
        require: true
    },
    Plookingfor: {
        type: String,
        default: false
    },
    Pheight: {
        type: String,
        default: "NA"
    },
    Peducation: {
        type: String,
        default: "NA"
    },
    Plivingin: {
        type: String,
        default: "NA"
    },
    Pprefrence: {
        type: String,
        default: "NA"
    },
    Pcomplexion: {
        type: String,
        default: "NA"
    },
    Pcaste: {
        type: String,
        default: "NA"
    },
    President_status: {
        type: String,
        default: "NA"
    },
    education: {
        type: String,
        default: "NA"
    },
    occupation: {
        type: String,
        default: "NA"
    },
    employedin: {
        type: String,
        default: "NA"
    },
    educationdetail: {
        type: String,
        default: "NA"
    },
    occupationdetail: {
        type: String,
        default: "NA"
    },
    annualincome: {
        type: String,
        default: "NA"
    },
    language: {
        type: String,
        default: "NA"
    },
    moonsign: {
        type: String,
        default: "NA"
    },
    star: {
        type: String,
        default: "NA"
    },
    horoscopematch: {
        type: String,
        default: "NA"
    },
    gothram: {
        type: String,
        default: "NA"
    },
    smoke: {
        type: String,
        default: "NA"
    },
    complexion: {
        type: String,
        default: "NA"
    },
    weight: {
        type: String,
        default: "NA"
    },
    bodytype: {
        type: String,
        default: "NA"
    },
    diet: {
        type: String,
        default: "NA"
    },
    profiledecription: {
        type: String,
        default: "NA"
    },
    matriid: {
        type: String,
        default: "NA"
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("profile_precent", EVENTSCHEMA)