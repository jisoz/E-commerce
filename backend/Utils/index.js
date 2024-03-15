const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();
const express = require('express');
// const session= require('express-session');
const connect =require('../config/Db');
const userRoute = require("../routes/useroutes");
const app = express();
const PORT =3001;
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoute);
app.listen(PORT);
connect();

