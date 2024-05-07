const express = require('express')

const storeRouter = express.Router()

const {createStoreAccount,checkIfStoreExists} = require('../controllers/storeController')

// Define sub route for store signin
storeRouter.route('/signin')
.post(checkIfStoreExists)

// Define sub route for store signup
storeRouter.route('/signup')
.post(createStoreAccount)


module.exports = {storeRouter} 