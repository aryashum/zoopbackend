// TODO : Define the Store schema according to Docs

const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const { category } = require("./category");

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    adminName: {
      type: String,
      required: true,
    },
    closesBy: {
      type: Date,
      required: true,
    },
    opensBy: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

const store = mongoose.model("store", storeSchema);

module.exports = {
  store,
};
