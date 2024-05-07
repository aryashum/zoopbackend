const mongoose = require('mongoose')
const { category } = require('./category')


const productSchema = mongoose.Schema({

    name: {

    },
    isAvailable: {

    },
    category:{

    },
    rating: {

    },
    price: {

    },
    photo:{

    },
    storeId:{

    },
    discount:{

    }

})

const product = mongoose.model('product',productSchema)

module.exports = {
    product
}