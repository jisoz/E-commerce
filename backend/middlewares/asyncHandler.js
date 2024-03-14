const asyncHandler = (e)=>(req,res,next)=>{
Promise.resolve(e(req,res,next)).catch((err)=>{
    res.status(500).json({message: err.message});
});

}
module.exports = asyncHandler