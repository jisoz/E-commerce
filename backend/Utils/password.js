const bcrypt = require('bcryptjs');

const  hashPassword = async (password)=>{
    const salt =  bcrypt.genSaltSync();
    return  bcrypt.hashSync(password, salt);
  }

  function comparePassword(raw, hash) {
    return bcrypt.compareSync(raw, hash);
  }
  

  module.exports = {hashPassword, comparePassword};