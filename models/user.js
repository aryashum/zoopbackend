
// TODO : Define the user schema according to Docs

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name:{

    },
    email:{

    },
    password:{

    },
    phoneNumber:{

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
