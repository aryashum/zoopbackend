const express = require("express");
const { addPreferedFoodItem, getPreferredFoodItems, getPreferredStores, addPreferedStore } = require("../controllers/preferenceControl");


const preferenceRouter = express.Router();

preferenceRouter.route('/product')
.get(getPreferredFoodItems)
.post(addPreferedFoodItem)

preferenceRouter.route('/store')
.get(addPreferedStore)
.post(getPreferredStores)


module.exports = {
    preferenceRouter
}
