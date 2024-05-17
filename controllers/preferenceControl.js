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

async function deletePreferredFoodItem(req,res){

    try {
        
        const new_user = await user.findOneAndUpdate({_id:req.body.userId},
            {$pull: { favouriteProducts: req.body.productId }},
            { new: true, useFindAndModify: false }
        )

        res.status(200).send(new_user)

    } catch (error) {
        res.status(400).send(null)
        
    }

}

async function getPreferredFoodItems(req,res){

    try {
            
        const updatedUser = await user.findOne({ _id: req.query.userId })
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
        console.log(updatedUser)
        res.status(201).send(updatedUser);
    } catch (error) {
        res.status(400).send(null)
    }

}

async function getPreferredStores(req,res){

    try {
            
        const updatedUser = await user.findOne({ _id: req.query.userId })
        res.status(201).send(updatedUser.favouriteStores);
    } catch (error) {
        res.status(400).send(null)
    }

}

async function deletePreferredStore(req,res){

    try {
        
        const new_user = await user.findOneAndUpdate({_id:req.body.userId},
            {$pull: { favouriteStores: req.body.storeId }},
            { new: true, useFindAndModify: false }
        )

        res.status(200).send(new_user)

    } catch (error) {
        res.status(400).send(null)
        
    }

}


module.exports = {
    getPreferredFoodItems,
    addPreferedFoodItem,
    addPreferedStore,
    getPreferredStores,
    deletePreferredFoodItem,
    deletePreferredStore
}