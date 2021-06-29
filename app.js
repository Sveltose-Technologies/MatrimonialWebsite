const EXPRESS = require("express")
const APP = EXPRESS()
require("dotenv").config()
const PORT = 8000 || process.env.PORT
const MONGOOSE = require("mongoose")

APP.use(EXPRESS.json())
APP.use(EXPRESS.urlencoded({ extended: false }))

const USER = require("./routers/userSignup")

APP.use("/api", USER)

MONGOOSE.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB CONNECTED SUCCEFULLY")
}).catch((error) => {
    console.log(error)
})




APP.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})