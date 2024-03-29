const express = require('express');
const {createUser , loginUser , loginoutUser , getCurrentUserProfile ,updateCurrentUserProfile,deleteUserById, getUserById ,UpdateUserById,forgotpassword,resetpassword } = require('../controllers/UserController');
const {authenticate,authorizeAdmin}= require('../middlewares/authMiddleware');

const router = express.Router();


router.route("/").post(createUser).get(authenticate , authorizeAdmin  );
router.post("/auth",loginUser)
router.post("/logout",loginoutUser)
router.route("/profile").get(authenticate, getCurrentUserProfile).put(authenticate,updateCurrentUserProfile)
router.route("/:id").delete(authenticate, authorizeAdmin, deleteUserById).get(authenticate, authorizeAdmin, getUserById).put(authenticate,authorizeAdmin,UpdateUserById)
router.route("/forgot-password").post(forgotpassword);
router.route("/reset-password/:id/:token").post(resetpassword);
module.exports = router;