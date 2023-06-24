const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isSeller } = require("../middlewares/seller.middleware");
const {
  getAllProducts,
  createProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.get("/:pid", singleProduct);

router.patch("/:pid", isAuthenticated, isSeller, updateProduct);
router.delete("/:pid", isAuthenticated, isSeller, deleteProduct);

module.exports = router;
