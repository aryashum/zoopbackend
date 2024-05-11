
const Razorpay = require('razorpay')
const crypto = require("crypto");

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
      console.log(err);
      res.status(500).send(null);
    }
}

async function validateOrder (req, res){
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
  
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    //order_id + "|" + razorpay_payment_id
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");

    if (digest !== razorpay_signature) {
      return res.status(400).null(null);
    }
  
    return res.status(200).json({
      msg: "success",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  }

module.exports = {
    createRazorpayOrder,
    validateOrder
}