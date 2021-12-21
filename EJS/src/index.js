const express = require("express");

const app = express();

app.use(express.json());

const productController = require("./controllers/product.controller");

app.use("/products",productController);

app.set("view engine","ejs");


module.exports = app;