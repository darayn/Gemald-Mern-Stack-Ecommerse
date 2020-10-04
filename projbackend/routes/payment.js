const express = require('express')
const router = express.Router();

const { isSignedIn, isAuthenticated} = require("../controllers/auth")
const {getToken, processPayment} = require("../controllers/paymentB")
const { getUserbyId  } = require("../controllers/user")


router.param("userId",getUserbyId)
router.get("/payment/gettoken/:userId", isSignedIn,isAuthenticated, getToken)

router.post("/payment/braintree/:userId", isSignedIn,isAuthenticated, processPayment)


module.exports = router