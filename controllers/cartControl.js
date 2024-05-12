
const { cart } = require("../models/cart")


async function createCart(req,res){


    try {

        // let listOfItems = JSON.parse(req.body.listOfItems)

        

        const new_cart = await cart.create({
            etc: Date(req.body.etc),
            storeId: req.body.storeId,
            userId: req.body.userId,
            listOfItems: req.body.listOfItems,
            totalAmount: req.body.totalAmount
            
        })

        return res.status(201).send({id:new_cart._id})

    } catch (error) {
        console.log(error)
        return res.status(400).send(null)
    }

}

async function getCartByStoreId(req,res){

    try {
        const carts = await cart.find({'storeId':req.body.storeId}).populate('listOfItems')
        

        return res.send(carts).status(200)
    } catch (error) {
        return res.send(null).status(400)
    }

}

module.exports = {
    createCart,
    getCartByStoreId
}