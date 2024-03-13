const mongoose = require('mongoose');

const connect = async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI);
       console.log('Connected to mongodb');
    }catch(err){
        console.error(err);
    }
}

module.exports = connect;
