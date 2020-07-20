const express = require('express')
const router = express.Router()

const {getCategoryById,createCategory,getCategory,getAllCategory,updateCategory,removeCategory} = require("../controllers/category")
const {isAuthenticated,isAdmin,isSignedIn} =require("../controllers/auth")
const {getUserbyId} =require("../controllers/user")

// Params
router.param("userId",getUserbyId)
router.param("categoryId",getCategoryById)

// Actual routers goes here
// create routes
router.post("/category/create/:userId",isSignedIn,isAuthenticated,isAdmin, createCategory);
// read routes
router.get("/category/:categoryid", getCategory);
router.get("/categories", getAllCategory);
// update
router.put("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin, updateCategory);
// delete
router.delete("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin, removeCategory);

module.exports = router;