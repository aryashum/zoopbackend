
const Razorpay = require('razorpay')
const crypto = require("crypto");
const {cart} = require('../models/cart')

async function createRazorpayOrder (req, res){
    try {

        // Instantiate razorpay instance
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });
  
        // pass [amt in paise,currency,recieptId]   
      const options = req.body;
      const order = await razorpay.orders.create(options);
        // order is created with an order_id [order_AdinascosjAS]
  
      if (!order) {
        return res.status(500).send("Error");
      }
  
      res.status(201).send(order);
    } catch (err) {
      res.status(400).send(null);
    }
}

async function validateOrder (req, res){
    try {
      
      const {cartId, razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;
    
      const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
      //order_id + "|" + razorpay_payment_id
      sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
      const digest = sha.digest("hex");
  
      if (digest !== razorpay_signature) {
        return res.status(400).null(null);
      }
      
  
      const temp_cart = await cart.findOneAndUpdate(
        { _id: cartId },
        {
          isPaid: true,
          razorpayPaymentId: razorpay_payment_id,
          razorpayOrderId: razorpay_order_id,
          razorpaySignature: razorpay_signature
        },
        { new: true }
      ).exec();

      // Now update the storePayment object 


      // Send the mail notification / whatsapp notification
  
      return res.status(201).send({"message":temp_cart.razorpayPaymentId});
    } catch (error) {
      return res.status(400).send(null)
    }
  

    
  }

module.exports = {
    createRazorpayOrder,
    validateOrder
}