const express = require("express");

const multer = require("multer");

const Product = require("../models/product.model");

const router = express.Router();

const upload = require("../middlewares/FileUploads");

router.post("/single",upload.single("Images"),async(req,res)=>{
    try{
        const product = await Product.create({
            Title : req.body.Title,
            Price : req.body.Price,
            Images : req.file.path,
        });

        res.render("products/single",{product});

    }catch(e){
        res.status(400).json({"Message" : e.message,"Status" : "Failed"});
    }
});

router.get("/",async(req,res)=>{
    try{
        const products = await Product.find().lean().exec();

        res.render("products/all",{products});

    }catch(e){
        res.status(400).json({"Message" : e.message,"Status" : "Failed"});
    }
});

router.get("/new",async(req,res)=>{
    try{
        res.render("products/new");
    }catch(e){
        res.status(400).json({"Message" : e.message,"Status" : "Failed"});
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const product = await Product.find(req.params.id).lean().exec();

        res.render("products/single",{product});

    }catch(e){
        res.status(400).json({"Message" : e.message,"Status" : "Failed"});
    }
});

module.exports = router;

