const {store} = require('../models/store')

async function createStoreAccount(req,res) {

    
    // TODO : instantiate store schema with particular values present in request
    const new_store = await store.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        location:req.body.location,
        adminName:req.body.adminName

    })


    // TODO : return the created store object
    
    return res.status(201).send(new_store)

}

async function checkIfStoreExists(req,res) {

    const isPresent = await store.findOne({"email":req.body.email,"password":req.body.password},)

    // TODO : return true if yes else false
    return res.status(201).send({"message" : isPresent})
}

module.exports = {
    createStoreAccount,
    checkIfStoreExists
}