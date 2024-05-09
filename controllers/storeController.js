const {store} = require('../models/store')
const {product} = require('../models/product')
const { category } = require('../models/category')


async function createStoreAccount(req,res) {

    try {
            // TODO : instantiate store schema with particular values present in request
        const new_store = await store.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            phoneNumber:req.body.phoneNumber,
            location:req.body.location,
            adminName:req.body.adminName

        })


        // TODO : return the created store object , 
        
        return res.status(201).send(new_store)
    
    } catch (error) {
        return res.status(400).send({"message":null})
    }
    
}

async function checkIfStoreExists(req,res) {

    const isPresent = await store.findOne({"email":req.body.email,"password":req.body.password},)

    // TODO : return the object if exists, null if doesnt
    return res.status(201).send(isPresent)
}

async function createProduct(req,res){


    // Instantiate a new product
    try {
        const new_product = await product.create({

            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            storeId: req.body.storeId,
            image: req.body.image
    
            
        })
    
        // We return the created object , null if not created
        return res.status(201).send({"message": new_product})
        
    } catch (error) {
        return res.status(400).send({"message":null})
    }

   


}

async function createCategory(req,res){

    try {
        const new_category = await category.create({
            name: req.body.name,
            storeId: req.body.storeId
        })
    
    
        return res.status(201).send({"message": new_category})
    
    } catch (error) {
        return res.status(201).send({"message": new_category})
    }
    
}


async function getCategoriesByStoreId(req,res){

    const projection = {_id: 1, name: 1}
    
    const categories = await category.find({storeId: req.body.storeId}).select(projection)

    return res.status(200).send(categories)

}

async function getProductsByStoreId(req,res){

    
    const products = await product.find({storeId: req.body.storeId})


    return res.status(200).send(products)

}






module.exports = {
    createStoreAccount,
    checkIfStoreExists,
    createProduct,
    createCategory,
    getCategoriesByStoreId,
    getProductsByStoreId
}