const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/userModel");
const {hashPassword,comparePassword}  = require('../Utils/password');
const creatToken = require('../Utils/token');

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
        creatToken(res,newUser._id);
        return  res.status(201).send("User created successfully");

    }catch(err){
        return  res.status(400).send("Invalid user data");
       



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
    
}))

const loginoutUser = asyncHandler(async(req,res)=>{
    res.cookie('jwt', '', {httpOnly: true, expires: new Date(0),});
    return res.status(200).send("logout successfully");
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



module.exports ={createUser,loginUser,loginoutUser, getCurrentUserProfile ,updateCurrentUserProfile,deleteUserById,getUserById,UpdateUserById};