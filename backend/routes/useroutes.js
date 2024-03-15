const express = require('express');
const {createUser , loginUser , loginoutUser , getCurrentUserProfile ,updateCurrentUserProfile  } = require('../controllers/UserController');
const {authenticate,authorizeAdmin}= require('../middlewares/authMiddleware');

const router = express.Router();


router.route("/").post(createUser).get(authenticate , authorizeAdmin  );
router.post("/auth",loginUser)
router.post("/logout",loginoutUser)
router.route("/profile").get(authenticate, getCurrentUserProfile).put(authenticate,updateCurrentUserProfile)
module.exports = router;