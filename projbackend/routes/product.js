const express = require('express')
const router = express.Router();

const { isSignedIn, isAuthenticated,isAdmin} = require("../controllers/auth")
const {getUserbyId} = require("../controllers/user")
const {getProductbyId,createProduct,getProduct,photo,deleteProduct,updateProduct,getAllProducts,getAlluniqueCategories} = require("../controllers/product")

// all of params
router.param("userId",getUserbyId);
router.param("productId",getProductbyId);


// all of actual route
// create route
router.post("/product/create/:userId",isSignedIn, isAuthenticated,isAdmin,createProduct)

// read route
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);
// delete route
router.delete("product/:productId/:userId",isSignedIn,isAdmin,isAdmin,deleteProduct)
// update route
router.put("product/:productId/:userId",isSignedIn,isAdmin,isAdmin,updateProduct)

// listing route 

router.get("/products", getAllProducts)

router.get("/products/categories",getAlluniqueCategories)

module.exports = router;
