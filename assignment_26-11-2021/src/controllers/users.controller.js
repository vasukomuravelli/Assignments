const express = require('express');

const Users = require("../models/user.model");

const router = express.Router();

router.post("", async(req,res)=>{
    try{
        const user = await Users.create(req.body);

        res.status(201).send(user);
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.get("", async(req,res)=>{
    try{
        const user = await Users.find().lean().exec();

        res.send(user);

    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.get("/:id", async(req,res)=>{
    try{
        const user = await Users.findById(req.params.id).lean().exec();

        res.send(user);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.patch("/:id", async(req,res)=>{
    try{
        const user = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(user);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.delete("/:id", async(req,res)=>{
    try{
        const user = await Users.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(user);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

module.exports = router;