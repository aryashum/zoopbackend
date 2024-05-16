const express = require("express");
const { addPreferedFoodItem, getPreferredFoodItems, getPreferredStores, addPreferedStore } = require("../controllers/preferenceControl");


const preferenceRouter = express.Router();

preferenceRouter.route('/product')
.get(getPreferredFoodItems)
.post(addPreferedFoodItem)

preferenceRouter.route('/store')
.post(addPreferedStore)
.get(getPreferredStores)


module.exports = {
    preferenceRouter
}
