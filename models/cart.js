const { type } = require("express/lib/response");
const { default: mongoose } = require("mongoose");

const cartSchema = mongoose.Schema({

    etc:{
        type: Date
    },
    storeId:{
        type: mongoose.Schema.ObjectId,
        ref: 'store'
    },
    userId:{
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    listOfItems:[
        {
            type : mongoose.Schema.ObjectId,
            ref: 'product'
        }
    ]
})