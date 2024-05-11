const { product } = require("../models/product");

async function createProduct(req, res) {
  // Instantiate a new product
  try {
    const new_product = await product.create({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      storeId: req.body.storeId,
      image: req.body.image,
      isVeg: req.body.isVeg
    });
    // We return the created object , null if not created
    return res.status(201).send(new_product);
  } catch (error) {
    return res.status(400).send(null);
  }
}

async function getProductsByStoreId(req, res) {
  const products = await product.find({ storeId: req.body.storeId });

  return res.status(200).send(products);
}

module.exports = {
  createProduct,
  getProductsByStoreId,
};
