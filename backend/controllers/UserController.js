const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/userModel");
const hashPassword  = require('../Utils/password');

const createUser = asyncHandler(async(req,res)=>{
    const {username ,email,password} = req.body;
    if(!username || !email || !password){
        throw new Error("fill all inputs");
    }
    const userExists = await User.findOne({email}) 
    if (userExists) {
        return  res.status(400).send("User already exists");
    }
    
   const hash= await hashPassword(password)
    const newUser = new User({ username, email, password:hash });

    try {
        await newUser.save();
        return  res.status(201).send("User created successfully");

    }catch(err){
        return  res.status(400).send("Invalid user data");
       



    }

})
 
module.exports =createUser;