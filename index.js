 
const { connectToDataBase } = require('./connection')

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


// Define our Express Instance
const app = express()
// We choose the port based on the mode
let PORT;
process.env.STATUS === 'dev' ? PORT = process.env.DEV_PORT : PORT = process.env.PROD_PORT


// We define our Middlewares




// Connecting to Database returns a promise and prints an error if occured
let DB_URL;
process.env.STATUS === 'dev' ? DB_URL = process.env.MONGO_URL_DEV : DB_URL = process.env.MONGO_URL_PROD
connectToDataBase(DB_URL)
.then(()=>{console.log("Connected to Database")})
.catch((err)=>{console.log("There Was an error",err)})


// We define our api routes
const {userRouter} = require('./routes/userRouter.js')
const {storeRouter} = require('./routes/storeRouter.js')

//This Route deals with all user related activities
app.use('/user',userRouter)

//This route deals with all store related activities
app.use('/store',storeRouter)




// Server starts listening on the given port with the above config
process.env.STATUS === 'dev' ? app.listen(PORT,()=>console.log(`Listening on ${PORT}`)) : app.listen(PORT)






