const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      reference: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      reference: "User",
      required: true,
    },
    rating: { type: Number, required: true },
    body: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
