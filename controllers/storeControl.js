const { store } = require("../models/store");
const { transporter,email } = require("../utils/nodemailer");

async function createStoreAccount(req, res) {
  try {
    // TODO : instantiate store schema with particular values present in request
    const new_store = await store.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      location: req.body.location,
      adminName: req.body.adminName,
      closesBy: Date(req.body.closesBy),
      opensBy: Date(req.body.opensBy)
    });
    
    // Sending a thank you mail
    let mailOptions = {
      from: email,
      to: req.body.email,
      subject: 'Welome to Zoop',
      html: '<h1>You have been succesfully registered</h1>'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        // console.log('Email sent: ' + info.response);
      }
    });
    // TODO : return the created store object ,s
    return res.status(201).send(new_store);
  } catch (error) {
    return res.status(400).send(null);
  }
}

async function checkIfStoreExists(req, res) {

  try {
    const isPresent = await store.findOne({
      email: req.body.email,
      password: req.body.password,
    });
  
    // TODO : return the object if exists, null if doesnt
    return res.status(201).send(isPresent);
    
  } catch (error) {
    return res.status(400).send(null);
  }

}
async function getAllStores(req,res){

  try {
    const all_stores = await store.find({});
    return res.status(200).send(all_stores)
  } catch (err) {
    res.status(400).send(null)
  }

}

module.exports = {
  createStoreAccount,
  checkIfStoreExists,
  getAllStores,
};
