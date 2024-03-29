const express = require('express');
const {authenticate,authorizeAdmin}= require('../middlewares/authMiddleware');
const { createcategory } = require('../controllers/CategoryController');

const router = express.Router();

router.route('/').post(authenticate ,authorizeAdmin , createcategory)
module.exports =router;