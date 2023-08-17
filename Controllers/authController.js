const AuthModel = require("../Models/authModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const createToken = (id) => {
  return jwt.sign({ id }, "secret-key-is-here", {
    expiresIn: 1440,
  });
};
exports.sign_up = async (req, res) => {
  try {
    const newUser = await AuthModel.create(req.body);
    const token = createToken(newUser._id);
    res.status(201).json({
      status: "Success",
      token,
      data: newUser,
      message: "Sucessfully created account",
    });
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: error.message });
  }
};
exports.sign_in = async (req, res) => {
    const { email, password } = req.body;
    const results = await AuthModel.findOne({ email: email });
    const isTrue = await bcrypt.compare(password, results.password);
    if (isTrue) {
      res.status(201).json({ message: "Login Successfully" });
    }else{
        res.status(500).json({ message:"Invalid Data" });
  }
}
