const jwt = require("jsonwebtoken");
const {expires,TOKEN_SECRET} = require('../constants/CONST');

function generateAccessToken(data) {
  return jwt.sign(data,TOKEN_SECRET,{expiresIn:expires})
}

module.exports = generateAccessToken;