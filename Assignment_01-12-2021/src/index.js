const express = require("express");

const app = express();

app.use(express.json());

const UserController = require("./controller/user.controller");

app.use("/users",UserController);

const galleryController = require("./controller/gallery.controller");

app.use("/gallery",galleryController);

module.exports = app;


