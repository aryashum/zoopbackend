const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  storeId: {
    type: mongoose.Schema.ObjectId,
    ref: "store",
    required: true
  },
});

// Compound index to ensure uniqueness of {name, storeId} tuple
categorySchema.index({ name: 1, storeId: 1 }, { unique: true });
const category = mongoose.model("category", categorySchema);

module.exports = {
  category,
};
