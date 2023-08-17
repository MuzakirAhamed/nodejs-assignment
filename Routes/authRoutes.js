const express = require('express')
const authController = require('../Controllers/authController')
const authRoute = express.Router()
authRoute.post("/sign_up",authController.sign_up)
authRoute.post("/sign_in",authController.sign_in)
module.exports = authRoute