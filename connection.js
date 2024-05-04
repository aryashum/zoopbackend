const mongoose = require('mongoose')

async function connectToDataBase(url){
    return mongoose.connect(url)
}

module.exports ={
    connectToDataBase
}