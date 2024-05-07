const express = require('express')

const userRouter = express.Router()

const {createUserAccount,checkIfUserExists} = require('../controllers/userControl')

// Define sub route for user signin
userRouter.route('/signin')
.post(checkIfUserExists)

// Define sub route for user signup
userRouter.route('/signup')
.post(createUserAccount)


module.exports = {userRouter} 