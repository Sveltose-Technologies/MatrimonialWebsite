const otpGenerator = require('otp-generator')
const key = 'verysecretkey' // Key for cryptograpy. Keep it secret
const SendOtp = require('sendotp')
const sendOtp = new SendOtp('352113AJ70WcqCZ60056b8cP1')
const crypto = require('crypto')

exports.createOtp = (phone) => {
    // Generate a 4 digit numeric OTP
    const otp = otpGenerator.generate(4, {
        alphabets: false,
        upperCase: false,
        specialChars: false
    })
    const ttl = 5 * 60 * 1000 //5 Minutes in miliseconds
    const expires = Date.now() + ttl //timestamp to 5 minutes in the future
    const data = `${phone}.${otp}.${expires}` // phone.otp.expiry_timestamp
    const hash = crypto
        .createHmac('sha256', key)
        .update(data)
        .digest('hex') // creating SHA256 hash of the data
    const fullHash = `${hash}.${expires}` // Hash.expires, format to send to the user
    sendOtp.send(phone, 'nowcalls', otp, function (error, datas) {
        console.log(error)
        if (datas.type == 'success') {
        } else {
            return false
        }
    })

    return fullHash
}
