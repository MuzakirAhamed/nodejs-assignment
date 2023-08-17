const User = require("../Models/User");
exports.homePage = async(req,res)=>{
    res.send("Hello!!")
}
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
exports.readUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};
exports.getOneuser = async (req, res) => {
  const userName = req.params.name;
  const selectedUser = await User.find({ name: userName });
  res.status(200).json(selectedUser);
};
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const updateOne = await User.findByIdAndUpdate(id, req.body);
  if (!updateOne) {
    return res.status(404).json({ message: `cannot find any user with ${id}` });
  }
  const updatedUser = await User.findById(id);
  res.status(200).json(updatedUser);
};
exports.deleteUser =  async (req, res) => {
  const id = req.params.id;
  const userDeleted = await User.findByIdAndDelete(id);
  if (!userDeleted) {
    return res.status(404).json({ message: `Cannot find the user with ${id}` });
  }
  res.status(200).json(userDeleted);
};
