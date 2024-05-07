const { default: mongoose } = require("mongoose");

const paymentSchema = mongoose.Schema({

    amount:{

    },
    paymentDate:{
        type: Date
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

