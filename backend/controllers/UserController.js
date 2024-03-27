const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/userModel");
const {hashPassword,comparePassword}  = require('../Utils/password');
const jwt = require('jsonwebtoken');
const creatToken = require('../Utils/token');
const sendEmail = require('../Utils/email');
const { response } = require("express");

const createUser = asyncHandler(async(req,res)=>{
    const {username ,email,password} = req.body;
    if(!username || !email || !password){
        throw new Error("fill all inputs");
    }
    const userExists = await User.findOne({email}) 
    if (userExists) {
        res.status(400).json({message:"User already exists"});
        throw new Error("User already exists");
    }
    
   const hash= await hashPassword(password)
    const newUser = new User({ username, email, password:hash });

    try {
        await newUser.save();
        creatToken(res,newUser._id);
        return   res.status(201).json({
          _id:newUser._id,
          username:newUser.username,
          email:newUser.email,
          isAdmin:newUser.isAdmin,
        })

    }catch(err){
         res.status(400).json({message:"Invalid user data"});
        



    }

})
 


const loginUser = asyncHandler((async(req ,res) => {
    const {email ,password}= req.body;
    
    const existingUser = await User.findOne({email});
    if (existingUser){
       const isvalidpassword=comparePassword(password, existingUser.password);
       if (isvalidpassword){
        creatToken(res,existingUser._id);
        res.status(201).json({
          _id:existingUser._id,
          username:existingUser.username,
          email:existingUser.email,
          isAdmin:existingUser.isAdmin,
        })
        return;
       }
    } 
    throw new Error('Invalid email or password');
}))

const loginoutUser = asyncHandler(async(req,res)=>{
    res.cookie('jwt', '', {httpOnly: true, expires: new Date(0),});
    return res.status(200).json({message: "logged out successfully"});
})

// const getAllUsers = asyncHandler(async(req,res)=>{
// const users = await User.find({});
// return res.status(200);
// })

const getCurrentUserProfile = asyncHandler(async(req,res)=>{
  const user= await User.findById(req.user._id)
  if (user){
    res.json(
        {id: user._id, 
            name: user.username,
        }
    )
  }

});

const updateCurrentUserProfile = asyncHandler(async(req,res)=>{
    const user= await User.findById(req.user._id)
    if (user){
       user.username = req.body.username || user.username
       user.email = req.body.email || user.email
       if (req.body.password){
       const hashedpassword=  await hashPassword(req.body.password)
         user.password = hashedpassword ;
       }
    }
    const updateUser = await user.save();
    res.json({
        id:updateUser._id,
        username: updateUser.username,
         email: updateUser.email,
         isAdmin: updateUser.isAdmin
    }
        
    )
  
  });

  const getUserById= asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if (user){
        res.json(user);
    }
    
    
  });

  const deleteUserById = asyncHandler(async(req,res,next) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.isAdmin) {
        res.status(400);
        throw new Error ("cannot delete admin user");
      }

      await User.deleteOne({ _id:user._id });
      res.json({message: "User removed successfully"});
    }else {
        res.status(404);
        throw new Error ("User not found");
    }
    
    
    
  });

  const UpdateUserById = asyncHandler(async(req,res)=>{
    const user= await User.findById(req.params.id)
    if (user){
       user.username = req.body.username || user.username
       user.email = req.body.email || user.email
       user.isAdmin = Boolean(req.body.isAdmin)
       if (req.body.password){
       const hashedpassword=  await hashPassword(req.body.password)
         user.password = hashedpassword ;
       }
    }
    const updateUser = await user.save();
    res.json({
        id:updateUser._id,
        username: updateUser.username,
         email: updateUser.email,
         isAdmin: updateUser.isAdmin
    }
        
    )
  
  });


  const forgotpassword = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const olduser = await User.findOne({ email: email });
    if (olduser) {
        try {
            const token = creatToken(res, olduser._id);
            const OTP = Math.floor(Math.random() * 9000 + 1000);
            sendEmail(res, olduser.email, olduser._id, token,OTP);
            return res.json({ success: true, message: 'Email sent successfully', otp: OTP });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Failed to send email' });
        }
    } else {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
});

const resetpassword= asyncHandler(async(req,res)=>{
  const {password} = req.body
  const {id,token}= req.params

  const user= await User.findById(id);
  if(user){
   jwt.verify(token , process.env.JWT_SECRET,async(err,_)=>{
    if (err){
      return res.json({error:"token not valid"})
    }else{
     
      if (password){
        const hashedpassword=  await hashPassword(password)
          user.password = hashedpassword ;
           await user.save();
        } 
      return res.json({success:"json valid"})
    }
    
    
    
   });
   
   
  }else{
    return res.json({error: "User not found"});
  }
  
  

})

module.exports ={createUser,loginUser,loginoutUser, getCurrentUserProfile ,updateCurrentUserProfile,deleteUserById,getUserById,UpdateUserById,forgotpassword,resetpassword};