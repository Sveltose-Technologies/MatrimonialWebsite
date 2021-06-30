const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema


const EVENTSCHEMA = new SCHEMA({

    ID: {
        type: String,
        require: true
    },
    MatriID: {
        type: String,
        require: true
    },
    Prefix: {
        type: String,
        require: true
    },
    dum_id: {
        type: String,
        require: true
    },
    franchiseecode: {
        type: String,
        require: true
    },
    Termsofservice: {
        type: String,
        require: true
    },
    ConfirmEmail: {
        type: String,
        require: true
    },
    ConfirmPassword: {
        type: String,
        default: false
    },
    Profilecreatedby: {
        type: String,
        default: "NA"
    },
    Referenceby: {
        type: String,
        default: "NA"
    },
    Name: {
        type: String,
        default: "NA"
    },
    Gender: {
        type: String,
        default: "NA"
    },
    DOB: {
        type: String,
        default: "NA"
    },
    Age: {
        type: String,
        default: "NA"
    },
    TOB: {
        type: String,
        default: "NA"
    },
    POB: {
        type: String,
        default: "NA"
    },
    Maritalstatus: {
        type: String,
        default: "NA"
    },
    childrenlivingstatus: {
        type: String,
        default: "NA"
    },
    Education: {
        type: String,
        default: "NA"
    },
    EducationDetails: {
        type: String,
        default: "NA"
    },
    Occupation: {
        type: String,
        default: "NA"
    },
    OccupationDetail: {
        type: String,
        default: "NA"
    },
    Employedin: {
        type: String,
        default: "NA"
    },
    Annualincome: {
        type: String,
        default: "NA"
    },
    Religion: {
        type: String,
        default: "NA"
    },
    Caste: {
        type: String,
        default: "NA"
    },
    Subcaste: {
        type: String,
        default: "NA"
    },
    Gothram: {
        type: String,
        default: "NA"
    },
    Language: {
        type: String,
        default: "NA"
    },
    Star: {
        type: String,
        default: "NA"
    },
    Moonsign: {
        type: String,
        default: "NA"
    },
    Horosmatch: {
        type: String,
        default: "NA"
    },
    Manglik: {
        type: String,
        default: "NA"
    },
    Height: {
        type: String,
        default: "NA"
    },
    Weight: {
        type: String,
        default: "NA"
    },
    BloodGroup: {
        type: String,
        default: "NA"
    },
    Bodytype: {
        type: String,
        default: "NA"
    },
    spe_cases: {
        type: String,
        default: "NA"
    },
    Complexion: {
        type: String,
        default: "NA"
    },
    Diet: {
        type: String,
        default: "NA"
    },
    Smoke: {
        type: String,
        default: "NA"
    },
    Drink: {
        type: String,
        default: "NA"
    },
    Address: {
        type: String,
        default: "NA"
    },
    City: {
        type: String,
        default: "NA"
    },
    State: {
        type: String,
        default: "NA"
    },
    Country: {
        type: String,
        default: "NA"
    },
    phone_country_code: {
        type: String,
        default: "NA"
    },
    Phone: {
        type: String,
        default: "NA"
    },
    countrycode: {
        type: String,
        default: "NA"
    },
    Mobile: {
        type: String,
        default: "NA"
    },
    Residencystatus: {
        type: String,
        default: "NA"
    },
    Fathername: {
        type: String,
        default: "NA"
    },
    Mothersname: {
        type: String,
        default: "NA"
    },
    Fatherlivingstatus: {
        type: String,
        default: "NA"
    },
    Motherlivingstatus: {
        type: String,
        default: "NA"
    },
    Fathersoccupation: {
        type: String,
        default: "NA"
    },
    Mothersoccupation: {
        type: String,
        default: "NA"
    },
    Profile: {
        type: String,
        default: "NA"
    },
    par_profile: {
        type: String,
        default: "NA"
    },
    Looking: {
        type: String,
        default: "NA"
    },
    FamilyDetails: {
        type: String,
        default: "NA"
    },
    Familyvalues: {
        type: String,
        default: "NA"
    },
    FamilyType: {
        type: String,
        default: "NA"
    },
    FamilyStatus: {
        type: String,
        default: "NA"
    },
    FamilyOrigin: {
        type: String,
        default: "NA"
    },
    noofbrothers: {
        type: String,
        default: "NA"
    },
    noofsisters: {
        type: String,
        default: "NA"
    },
    nbm: {
        type: String,
        default: "NA"
    },
    nsm: {
        type: String,
        default: "NA"
    },
    PE_FromAge: {
        type: String,
        default: "NA"
    },
    PE_ToAge: {
        type: String,
        default: "NA"
    },
    PE_HaveChildren: {
        type: String,
        default: "NA"
    },
    PE_Height: {
        type: String,
        default: "NA"
    },
    PE_Complexion: {
        type: String,
        default: "NA"
    },
    PE_MotherTongue: {
        type: String,
        default: "NA"
    },
    PartnerExpectations: {
        type: String,
        default: "NA"
    },
    PE_Religion: {
        type: String,
        default: "NA"
    },
    PE_Caste: {
        type: String,
        default: "NA"
    },
    PE_Education: {
        type: String,
        default: "NA"
    },
    PE_Countrylivingin: {
        type: String,
        default: "NA"
    },
    PE_Residentstatus: {
        type: String,
        default: "NA"
    },
    Hobbies: {
        type: String,
        default: "NA"
    },
    OtherHobbies: {
        type: String,
        default: "NA"
    },
    Interests: {
        type: String,
        default: "NA"
    },
    OtherInterests: {
        type: String,
        default: "NA"
    },
    Status: {
        type: String,
        default: "NA"
    },
    memtype: {
        type: String,
        default: "NA"
    },
    Regdate: {
        type: String,
        default: "NA"
    },
    IP: {
        type: String,
        default: "NA"
    },
    last_ip: {
        type: String,
        default: "NA"
    },
    Ref: {
        type: String,
        default: "NA"
    },
    Agent: {
        type: String,
        default: "NA"
    },
    DeleteAction: {
        type: String,
        default: "NA"
    },
    MemshipExpiryDate: {
        type: String,
        default: "NA"
    },
    expdays: {
        type: String,
        default: "NA"
    },
    Horoscheck: {
        type: String,
        default: "NA"
    },
    HorosApprove: {
        type: String,
        default: "NA"
    },
    PhotoProtect: {
        type: String,
        default: "NA"
    },
    PhotoprotectPassword: {
        type: String,
        default: "NA"
    },
    Video: {
        type: String,
        default: "NA"
    },
    Videocheck: {
        type: String,
        default: "NA"
    },
    Noofcontacts: {
        type: String,
        default: "NA"
    },
    photocheck: {
        type: String,
        default: "NA"
    },
    photochecklist: {
        type: String,
        default: "NA"
    },
    videochecklist: {
        type: String,
        default: "NA"
    },
    Horoschecklist: {
        type: String,
        default: "NA"
    },
    DOBday: {
        type: String,
        default: "NA"
    },
    DOBmonth: {
        type: String,
        default: "NA"
    },
    DOByear: {
        type: String,
        default: "NA"
    },
    Orderstatus: {
        type: String,
        default: "NA"
    },
    Photo1: {
        type: String,
        default: "NA"
    },
    Photo1Approve: {
        type: String,
        default: "NA"
    },
    Photo2: {
        type: String,
        default: "NA"
    },
    Photo2Approve: {
        type: String,
        default: "NA"
    },
    Photo3: {
        type: String,
        default: "NA"
    },
    Photo3Approve: {
        type: String,
        default: "NA"
    },
    photo_remind_cnt: {
        type: String,
        default: "NA"
    },
    Logincount: {
        type: String,
        default: "NA"
    },
    Lastlogin: {
        type: String,
        default: "NA"
    },
    Thislogin: {
        type: String,
        default: "NA"
    },
    dumprofile: {
        type: String,
        default: "NA"
    },
    prosta: {
        type: String,
        default: "NA"
    },
    pagecount: {
        type: String,
        default: "NA"
    },
    noyusisters: {
        type: String,
        default: "NA"
    },
    noyubrothers: {
        type: String,
        default: "NA"
    },
    matchalertstatus: {
        type: String,
        default: "NA"
    },
    matchalertsentdate: {
        type: String,
        default: "NA"
    },
    crop: {
        type: String,
        default: "NA"
    },
    PE_Height2: {
        type: String,
        default: "NA"
    },
    quick: {
        type: String,
        default: "NA"
    },
    HomeTown: {
        type: String,
        default: "NA"
    },
    FB: {
        type: String,
        default: "NA"
    },
    r3: {
        type: String,
        default: "NA"
    },
    r4: {
        type: String,
        default: "NA"
    },
    r5: {
        type: String,
        default: "NA"
    },
    r6: {
        type: String,
        default: "NA"
    },
    r7: {
        type: String,
        default: "NA"
    },
    r8: {
        type: String,
        default: "NA"
    },
    r9: {
        type: String,
        default: "NA"
    },
    r10: {
        type: String,
        default: "NA"
    },
    r11: {
        type: String,
        default: "NA"
    },
    r12: {
        type: String,
        default: "NA"
    },
    a1: {
        type: String,
        default: "NA"
    },
    a2: {
        type: String,
        default: "NA"
    },
    a3: {
        type: String,
        default: "NA"
    },
    a4: {
        type: String,
        default: "NA"
    },
    a5: {
        type: String,
        default: "NA"
    },
    a6: {
        type: String,
        default: "NA"
    },
    a7: {
        type: String,
        default: "NA"
    },
    a8: {
        type: String,
        default: "NA"
    },
    a9: {
        type: String,
        default: "NA"
    },
    a10: {
        type: String,
        default: "NA"
    },
    a11: {
        type: String,
        default: "NA"
    },
    a12: {
        type: String,
        default: "NA"
    },
    thosam: {
        type: String,
        default: "NA"
    },
    horosother: {
        type: String,
        default: "NA"
    },
    dummy: {
        type: String,
        default: "NA"
    },
    dasatype: {
        type: String,
        default: "NA"
    },
    dasayear: {
        type: String,
        default: "NA"
    },
    dasamonth: {
        type: String,
        default: "NA"
    },
    dasadate: {
        type: String,
        default: "NA"
    },
    featured: {
        type: String,
        default: "NA"
    },
    fri_email: {
        type: String,
        default: "NA"
    },
    agt_id: {
        type: String,
        default: "NA"
    },
    agt_email: {
        type: String,
        default: "NA"
    },
    verify_email: {
        type: String,
        default: "NA"
    },
    OnlineUsers: {
        type: String,
        default: "NA"
    },
    mobileverify: {
        type: String,
        default: "NA"
    },
    mobileverifycode: {
        type: String,
        default: "NA"
    },
    profileupdateCode: {
        type: String,
        default: "NA"
    },
    otp_time: {
        type: String,
        default: "NA"
    },
    token: {
        type: String,
        default: "NA"
    },
    NoOfChild: {
        type: String,
        default: "NA"
    },
    childLivingWith: {
        type: String,
        default: "NA"
    },
    PE_occupation: {
        type: String,
        default: "NA"
    },
    PE_hometown: {
        type: String,
        default: "NA"
    },
    PE_living_in: {
        type: String,
        default: "NA"
    },
    PE_manglik: {
        type: String,
        default: "NA"
    },
    PE_other_expectation: {
        type: String,
        default: "NA"
    },
    PE_looking_for: {
        type: String,
        default: "NA"
    },
    disability: {
        type: String,
        default: "NA"
    },
    typeOfDisability: {
        type: String,
        default: "NA"
    },
    whatsapp_country_code: {
        type: String,
        default: "NA"
    },
    whatsapp_phone: {
        type: String,
        default: "NA"
    },
    identity_proof: {
        type: String,
        default: "NA"
    },
    identity_proof_verified: {
        type: String,
        default: "NA"
    },
    account_manager: {
        type: String,
        default: "NA"
    },
    signup_platform: {
        type: String,
        default: "NA"
    },
    login_platform: {
        type: String,
        default: "NA"
    },
    Assign: {
        type: String,
        default: "NA"
    }

},
    { timestamps: true }
)

module.exports = MONGOOSE.model("register", EVENTSCHEMA)