const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      reference: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Image", imageSchema);
