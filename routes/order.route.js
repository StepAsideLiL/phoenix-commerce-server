/* 
GET 		/api/payments				get all payments	[auth, customer]
POST 		/api/payments				post a payment	[auth, customer]
PATCH		/api/payments/:payId			change order status	[auth, seller]

 */
const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isCustomer } = require("../middlewares/customer.middleware");
const { isSeller } = require("../middlewares/seller.middleware");

const {
    getAllPayments,
    createPayment,
    updateOrderStatus
} =require('../controllers/order.controller')

const router = express.Router();

router.get('/',isAuthenticated,isCustomer,getAllPayments);
router.post('/',isAuthenticated,isCustomer,createPayment);
router.patch('/:payId',isAuthenticated,isSeller,updateOrderStatus);

module.exports = router;