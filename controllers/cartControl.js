
const { default: mongoose } = require("mongoose");
const { cart } = require("../models/cart")


async function createCart(req,res){

    const ObjectId = mongoose.Types.ObjectId

    try {

        let listOfItems = JSON.parse(req.body.listOfItems)
        const new_cart = await cart.create({
            etc: Date(req.body.etc),
            storeId: req.body.storeId,
            userId: req.body.userId,
            listOfItems: listOfItems,
            
        })

        return res.status(201).send(new_cart)

    } catch (error) {
        return res.status(400).send(null)
    }

}

async function getCartByStoreId(req,res){

    try {
        const carts = await cart.find({'storeId':req.body.storeId})    
        return res.send(carts)
    } catch (error) {
        return res.send(null).status(400)
    }
    

    

}

module.exports = {
    createCart,
    getCartByStoreId
}