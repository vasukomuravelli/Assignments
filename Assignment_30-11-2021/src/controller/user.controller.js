const express = require("express");

const router = express.Router();

const User = require("../models/users.model");

const sendmail = require("../util/sendmail");

const {sendAdmin} = require("./admin.controller");

router.post("/",async(req,res)=>{
    try{
        const user = await User.create(req.body);

        sendmail("l@h.com",`${req.body.Email}`,`Welcome to ABC system ${req.body.First_name} ${req.body.Last_name}`,`Hi ${req.body.First_name}, Please confirm your email address`,"Please confirm your email address","<h1>Click here to confirm mail address</h1>");

        sendAdmin(req.body.First_name,req.body.Last_name)

        res.status(201).json({user});

    }catch(e){
        res.status(500).json({"message" : e.message, "status" : "Failed"});
    }
});

router.get("/",async(req,res)=>{
    try{
        const pages = req.query.page || 2;
        const size = req.query.size || 2;

        const offset = (pages - 1)*size;

        const user = await User.find().skip(offset).limit(size).lean().exec();

        const total = Math.ceil( await User.find().countDocument()/size);

        res.json({user,total});

    }catch(e){
        res.status(500).json({"message" : e.message, "status" : "Failed"});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).json({user});

    }catch(e){
        res.status(500).json({"message" : e.message, "status" : "Failed"});
    }
});

module.exports = router;