const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

const authenticate = require("../middleware/authenticate");

const authorise = require("../middleware/authorise");

router.post("/",authenticate,authorise(["admin","seller"]),async(req,res)=>{
    try{

        const product = await Product.create({
            "name" : req.body.name,
            "price" : req.body.price,
            "user" : req.user.user._id,
        });

        res.status(201).json({product});

    }catch(e){
        res.status(500).json({Message : e.message, Status : "Failed"});
    }
});

router.patch("/:id",authenticate,authorise(["admin","seller"]),async(req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,{
            "name" : req?.body?.name,
            "price" : req?.body?.price,
            "user" : req.user.user._id,

        },{new:true}).lean().exec();

        res.status(201).json({product});

    }catch(e){
        res.status(500).json({Message : e.message, Status : "Failed"});
    }
});

router.delete("/:id",authenticate,authorise(["admin","seller"]),async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).json({product});

    }catch(e){
        res.status(500).json({Message : e.message, Status : "Failed"});
    }
});

router.get("/",async(req,res)=>{
    try{
        const product = await Product.find().lean().exec();

        res.status(200).json({product});

    }catch(e){
        res.status(500).json({Message : e.message, Status : "Failed"});
    }
});


module.exports = router;