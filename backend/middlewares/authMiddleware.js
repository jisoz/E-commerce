const  asyncHandler = require("./asyncHandler");
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const authenticate = asyncHandler(async(req,res,next)=>{
let token;

token= req.cookies.jwt;

if (token) {
 try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select('-password');
    next();
 }catch (e) {
    console.error('JWT Verification Error:', e.message);
     res.status(401);
     throw new Error("Not authorized , Token Failed")
 }

} else {
     res.status(401);
    throw new Error("Not authorized ,No Token")
}


});

const authorizeAdmin = (req, res,next) => {
if (req.user && req.user.isAdmin) {
    // console.log("admin")
   next();
}else {
    // console.log("not admin")
    res.status(401).send("Not authorized as an admin")
}   

}

module.exports = {authenticate,authorizeAdmin}