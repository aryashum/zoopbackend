
// TODO : Define the user schema according to Docs

const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    favouriteProducts: [
        {
            storeId: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }
    ],
    favouriteStores: [
        {
            storeId: mongoose.Schema.Types.ObjectId,
            ref: 'store'
        }
    ]

})

const user = mongoose.model('user', userSchema)

module.exports = {
    user
}
