const bcrypt = require('bcrypt');
const password = 'password';
const salt= process.env.SECRET_SALT;

function encrypt(password){
    return bcrypt.hashSync(password,salt);
}

module.exports ={
  encrypt
}