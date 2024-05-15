const { default: mongoose, get } = require("mongoose");
const { user } = require("../models/user");


async function addPreferedFoodItem(req,res){

    try {
            
        const updatedUser = await user.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { favouriteProducts: req.body.productId } },
            { new: true, useFindAndModify: false }
        );
        res.status(201).send(updatedUser);
    } catch (error) {
        res.status(400).send(null)
    }

}

async function getPreferredFoodItems(req,res){

    try {
            
        const updatedUser = await user.find({ _id: req.query.userId })
        res.status(201).send(updatedUser.favouriteProducts);
    } catch (error) {
        res.status(400).send(null)
    }

}


async function addPreferedStore(req,res){

    try {
            
        const updatedUser = await user.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { favouriteStores: req.body.storeId } },
            { new: true, useFindAndModify: false }
        );
        res.status(201).send(updatedUser);
    } catch (error) {
        res.status(400).send(null)
    }

}

async function getPreferredStores(req,res){

    try {
            
        const updatedUser = await user.find({ _id: req.query.userId })
        res.status(201).send(updatedUser.favouriteStores);
    } catch (error) {
        res.status(400).send(null)
    }

}


module.exports = {
    getPreferredFoodItems,
    addPreferedFoodItem,
    addPreferedStore,
    getPreferredStores
}