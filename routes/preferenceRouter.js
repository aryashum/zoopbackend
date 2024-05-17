const express = require("express");
const { addPreferedFoodItem, 
    getPreferredFoodItems,
    getPreferredStores,
    addPreferedStore,
    deletePreferredFoodItem, 
    deletePreferredStore} = require("../controllers/preferenceControl");


const preferenceRouter = express.Router();

preferenceRouter.route('/product')
.get(getPreferredFoodItems)
.post(addPreferedFoodItem)
.delete(deletePreferredFoodItem)

preferenceRouter.route('/store')
.post(addPreferedStore)
.get(getPreferredStores)
.delete(deletePreferredStore)


module.exports = {
    preferenceRouter
}
