const mongoose = require("mongoose");
const { category } = require("./category");
const { type } = require("express/lib/response");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: false,
  },
  isVeg: {
    type: Boolean,
    required: true,
    default: false
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "category",
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  storeId: {
    type: mongoose.Schema.ObjectId,
    ref: "store",
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const product = mongoose.model("product", productSchema);

module.exports = {
  product,
};
