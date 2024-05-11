const { type } = require("express/lib/response");
const { default: mongoose } = require("mongoose");

const storePaymentSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },

    storeId: {
      type: mongoose.Schema.ObjectId,
      ref: "store",
    },
  },
  { timestamps: true }
);

const storePayment = mongoose.model("payment", paymentSchema);

module.exports = {
  storePayment,
};
