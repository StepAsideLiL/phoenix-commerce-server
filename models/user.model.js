const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    occupation: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      enum: ["customer", "seller", "admin"],
      default: "customer",
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        reference: "Product",
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

module.exports = mongoose.model("User", userSchema);
