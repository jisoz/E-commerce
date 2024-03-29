const asyncHandler = require("../middlewares/asyncHandler");
const Category = require("../models/categoryModel");


const createcategory = asyncHandler(async(req,res)=>{
const { name}=req.body; 
return res.json({category: name})

})

module.exports = {createcategory}