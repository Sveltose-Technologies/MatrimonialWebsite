const usersDetails = require("../models/userSignup.js")
const GLOBALFUNCTIONS = require("../functions/createOtp.js")

const SendOtp = require('sendotp')
const sendOtp = new SendOtp('352113AJ70WcqCZ60056b8cP1')
const key = 'verysecretkey' // Key for cryptograpy. Keep it secret
const crypto = require('crypto')

exports.signup = async (req, res) => {

    const USERDATA = req.body

    const DATA = new usersDetails(USERDATA)

    /// check user not registered
    const FIND_USER = await usersDetails.findOne({ mobileNumber: USERDATA.mobileNumber })
    if (FIND_USER) {
        res.send({ MSG: "USER ALREADY REGISTERED WITH THIS MOBILE NUMBER" })
    }
    else {
        ///SEND OTP FUNCTIONS
        DATA.otp = GLOBALFUNCTIONS.createOtp(`+91${USERDATA.mobileNumber}`)

        await DATA.save().then((result) => {
            res.send({ RESPONCE: result })
        }).catch((e) => {
            res.send({ ERROR: e })
        })
    }
}

exports.verifyOtp = async (req, res) => {
    const { userOtp, mobileNumber } = req.body
    await usersDetails.findOne({ mobileNumber: mobileNumber }).then(resp => {
        if (resp) {

            const hash = resp.otp
            let hashValues = hash.split('.')
            const expires = hashValues[1]
            const hashValue = hashValues[0]

            let now = Date.now()
            if (now > parseInt(expires)) {
                return false
            }
            let data = `+91${mobileNumber}.${userOtp}.${expires}`
            let newCalculatedHash = crypto
                .createHmac('sha256', key)
                .update(data)
                .digest('hex')

            if (newCalculatedHash == hashValue) {

                usersDetails.updateOne(
                    { mobileNumber: mobileNumber },
                    { $set: { mobileVerify: true } }
                ).then(us_resp => {
                    res.send('Otp Verified Successfully')
                })
            } else {
                res.send('Otp Has Expire Or Wrong')
            }
        }
    }).catch((error) => {
        res.send({ ErrorMsg: error })
    })
}

exports.resendOtp = async (req, res) => {

    const { mobileNumber, otp } = req.body

    const new_otp = GLOBALFUNCTIONS.createOtp(`91${mobileNumber}`)

    await usersDetails.updateOne({ mobileNumber: mobileNumber }, { $set: { otp: new_otp } }).then((result) => {
        res.send({ msg: result })
    }).catch(error => {
        res.send({ ErrorMsg: error })
    })
}

exports.showUserDetails = async (req, res) => {
    const { mobileNumber } = req.body

    try {
        /// check user not registered
        const FIND_USER = await usersDetails.findOne({ mobileNumber: mobileNumber })
        if (FIND_USER) {
            res.send({userDetails : FIND_USER})
        }
        else {
            res.send({ MSG: "USER DOES NOT EXSIST" })
        }
    } catch { }

}