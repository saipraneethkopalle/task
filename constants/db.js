const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/test'
mongoose.connect(url)
    .then(() => {
        console.log('Connected to database!');
    })
    .catch((error) => {
        console.log(error);
        console.log('Connection failed!');
    });