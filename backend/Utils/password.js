const bcrypt = require('bcryptjs');

const  hashPassword = async (password)=>{
    const salt =  bcrypt.genSaltSync();
    return  bcrypt.hashSync(password, salt);
  }


  module.exports = hashPassword;