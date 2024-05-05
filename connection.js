const res = require('express/lib/response')
const mongoose = require('mongoose')

async function connectToDataBase(url){
    try{
        let res = mongoose.connect(url)
        return res
    }catch(err){
        console.log(`an error occured in connecting to Database ${err}`)
    }
    
}

module.exports ={
    connectToDataBase
}