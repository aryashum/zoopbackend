const express = require("express");

const userRouter = express.Router();

const {createUserAccount,checkIfUserExists} = require("../controllers/userControl");

const { getCartByStoreId, createCart } = require("../controllers/cartControl");

// Define sub route for user signin
userRouter.route("/signin")
.post(checkIfUserExists);

// Define sub route for user signup
userRouter.route("/signup")
.post(createUserAccount);

userRouter.route("/cart")
.get(getCartByStoreId)
.post(createCart);

module.exports = { userRouter };
