const express = require("express");

const storeRouter = express.Router();

const {
  createStoreAccount,
  checkIfStoreExists,
  getAllStores
} = require("../controllers/storeControl");
const {
  createProduct,
  getProductsByStoreId,
} = require("../controllers/productControl");
const {
  createCategory,
  getCategoriesByStoreId,
} = require("../controllers/categoryControl");

const {
  getCartByStoreId
} = require('../controllers/cartControl')

storeRouter.route('/')
.get(getAllStores)

// Define sub route for store signin
storeRouter.route("/signin")
.post(checkIfStoreExists);

// Define sub route for store signup
storeRouter.route("/signup")
.post(createStoreAccount);

storeRouter.route("/product")
.get(getProductsByStoreId)
.post(createProduct);

storeRouter.route("/category")
.get(getCategoriesByStoreId)
.post(createCategory);

storeRouter.route("/cart")
.get(getCartByStoreId)

module.exports = { storeRouter };
