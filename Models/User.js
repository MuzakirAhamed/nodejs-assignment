const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    Email: String,
    mobile: Number,
    Profile_picture: String,
    password: String
})

const User = mongoose.model('User', userSchema)
module.exports= User;