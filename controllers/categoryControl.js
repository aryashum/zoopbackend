const { category } = require("../models/category");

async function createCategory(req, res) {
  try {
    const new_category = await category.create({
      name: req.body.name,
      storeId: req.body.storeId,
    });

    return res.status(201).send({ message: new_category });
  } catch (error) {
    return res.status(201).send({ message: null });
  }
}

async function getCategoriesByStoreId(req, res) {
  const projection = { _id: 1, name: 1 };

  const categories = await category
    .find({ storeId: req.body.storeId })
    .select(projection);

  return res.status(200).send({ message: categories });
}

module.exports = {
  getCategoriesByStoreId,
  createCategory,
};
