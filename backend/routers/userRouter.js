const express = require('express');
const bcrypt = require('bcrypt');
const { userSignUp, userLogin } = require('../controllers/userSignIn');

const userRouter = express.Router();

userRouter.post('/signup', userSignUp);
userRouter.post('/login', userLogin);

module.exports = userRouter;
