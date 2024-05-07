
// TODO : Define the Store schema according to Docs

const mongoose = require("mongoose");

const storeSchema = mongoose.Schema({

    name:{

    },
    rating:{

    },
    location:{

    },
    isOpen:{

    },
    phoneNumber:{

    },
    email:{

    },
    adminName:{

    }

},{timestamps:true})


const store = mongoose.model('store',storeSchema)

module.exports = {
    store
}
