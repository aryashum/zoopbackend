const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    storeId: {
        type: mongoose.Schema.ObjectId,
        ref:'store'
    }

})

const category = mongoose.model('category', categorySchema)

module.exports = {
    category
}