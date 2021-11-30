const express = require("express");

const app = express();

app.use(express.json());

const usercontroller = require("./controller/user.controller");

app.use("/users",usercontroller);

const {router} = require("./controller/admin.controller");

app.use("/admin",router);


module.exports = app;