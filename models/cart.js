const { default: mongoose } = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    etc: {
      type: Date,
      required: true,
    },
    storeId: {
      type: mongoose.Schema.ObjectId,
      ref: "store",
      required: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: true,
    },
    listOfItems: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "product",
        required: true,
      },
    ],
    isPaid: {
      type: Boolean,
      default: false,
    },
    isReadyToServe: {
      type: Boolean,
      default:false
    },
    isServerd: {
      type: Boolean,
      default: false
    },
    totalAmount:{
      type: Number,
      required: true
    },
    razorpayPaymentId:{
      type: String,
      default:""
    },
    razorpayOrderId:{
      type: String,
      default: ""
    },
    razorpaySignature:{
      type: String,
      default: ""
    },
  },
  { timestamps: true }
);

const cart = mongoose.model("cart", cartSchema);

module.exports = {
  cart,
};
