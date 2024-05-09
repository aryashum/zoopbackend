const { type } = require("express/lib/response");
const { default: mongoose } = require("mongoose");

const paymentSchema = mongoose.Schema({

    amount:{
        type: Number,
        required: true
    },

    storeId:{
        type: mongoose.Schema.ObjectId,
        ref: 'store'
    }

},{timestamps:true})

const payment = mongoose.model('payment', paymentSchema)

module.exports = {
    payment
}

