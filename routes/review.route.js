const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const {isCustomer} = require("../middlewares/customer.middleware")
const {postReview} = require("../controllers/review.controller")

const router = express.Router();

router.post("/", isAuthenticated, isCustomer,  postReview)

module.exports = router;