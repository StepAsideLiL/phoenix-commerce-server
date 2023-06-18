const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    isNew: { type: Boolean, required: true, default: false },
    isFeatured: { type: Boolean, required: true, default: false },
    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        reference: "Image",
        required: true,
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        reference: "Order",
        required: true,
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        reference: "Review",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
