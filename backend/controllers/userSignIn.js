const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const utils = require('../utils');

const userSignUp = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send({
      message: 'All field are required',
    });
  }
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      token: utils.generateToken(createdUser),
    });
  } catch (err) {
    res.status(400).send({
      status: 'fail',
      message: 'Email already Exists',
    });
  }
};

const userLogin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: utils.generateToken(user),
      });
      return;
    }
    res.status(401).send({ message: 'Invalid email or password' });
  }
};
module.exports = { userSignUp, userLogin };
