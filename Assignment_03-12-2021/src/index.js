const express = require("express");

const app = express();

let {register,login} = require("./controllers/user.controller");

const postController = require("./controllers/post.controller");

app.use(express.json());

app.post("/register",register);

app.post("/login",login);

app.use("/posts",postController);

module.exports = app;