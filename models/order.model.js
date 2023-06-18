const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        reference: "Product",
        required: true,
      },
    ],
    transactionId: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      reference: "User",
      required: true,
    },
    status: {
      enum: ["pending", "processing", "delivered", "canceled"],
      default: "pending",
      required: true,
    },
    totalAmount: { type: Number, required: true },
    shippingCost: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
