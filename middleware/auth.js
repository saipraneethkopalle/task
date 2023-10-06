const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {TOKEN_SECRET} = require("../constants/CONST");

router.use(function(req, res, next) {
    const authHeader = req.headers.authorization
    
    const token = authHeader
    if (token == null) return res.sendStatus(401);  
    jwt.verify(token, TOKEN_SECRET , (err, user) => {
  
      if (err) return res.sendStatus(401)
      user = user  
      next()
    })
  });

  module.exports = router;