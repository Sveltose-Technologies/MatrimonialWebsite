const EXPRESS = require("express")
const ROUTER = EXPRESS.Router()

const userSignup = require("../controllers/userSignup.js")

ROUTER.post("/user/signup", userSignup.signup)
ROUTER.post("/user/verifyotp", userSignup.verifyOtp)
ROUTER.post("/user/resendotp", userSignup.resendOtp)
ROUTER.get("/user/showuserdetails", userSignup.showUserDetails)


module.exports = ROUTER