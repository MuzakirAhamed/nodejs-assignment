const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt")
const Authschema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter the emailId"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid emailId"],
  },
  password: {
    type: String,
    required: [true, "Please enter the password"],
    minlength: [8, "Minimum password length is 8"],
  },
});
Authschema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password,salt)
  next();
});
const Auth = mongoose.model("Auth", Authschema);
module.exports = Auth;
