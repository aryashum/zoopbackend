const { default: mongoose, get } = require("mongoose");
const { user } = require("../models/user");
const { cart } = require("../models/cart");

async function createUserAccount(req, res) {
  // TODO : instantiate user schema with particular values present in request
  const new_user = await user.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
  });

  // TODO : return the created user object
  return res.status(201).send(new_user);
}

async function checkIfUserExists(req, res) {

  try {
    
    // TODO : check if schema with particular values is present or not
    const isPresent = await user.findOne({
      email: req.body.email,
      password: req.body.password,
    });
  
    // TODO : return true if yes else false
    return res.status(201).send(isPresent);
  } catch (error) {
    return res.status(400).send(null)
  }
}

module.exports = {
  createUserAccount,
  checkIfUserExists,
};
