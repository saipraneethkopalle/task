const express = require("express");
const app = express();
const http = require("http").Server(app);
const routes = require("./routes/routes");
const db = require("./constants/db");
const auth = require("./middleware/auth");
const beforelogin = require("./routes/beforelogin");
app.use(express.json());
app.use('/api/v1/auth',auth);
app.use('/api/v1/auth',routes);
app.use('/api/v1/noAuth',beforelogin);
http.listen(4000, function () {
    console.log('Server Started', 4000);
});