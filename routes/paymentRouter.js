const { createRazorpayOrder, validateOrder } = require('../controllers/paymentControl')

const paymentRouter = require('express').Router()


paymentRouter.route('/order')
.post(createRazorpayOrder)

paymentRouter.route('/validateOrder')
.post(validateOrder)


module.exports = {
    paymentRouter
}