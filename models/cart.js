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
    }
  },
  { timestamps: true }
);

const cart = mongoose.model("cart", cartSchema);

module.exports = {
  cart,
};
