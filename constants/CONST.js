const crypto=require('crypto');
// console.log(crypto.randomBytes(64).toString("hex"))
exports.TOKEN_SECRET='e797bc21830441e4ef2a80624abd045e461da623bbc7764e582005ba106861442f23c4084e8c002a0fc0ee0c507bc373360b584c8af67c82461a015f77d133fb';
exports.expires = 60*20;
exports.STATUS =
    { BAD_REQUEST: 400, 
    UNAUTHORIZED: 401 ,
     FORBIDDEN: 403 ,
     NOT_FOUND: 404 ,
     OK: 200 ,
     CREATED: 201 ,
     NO_CONTENT: 204 }
exports.saltRounds=10