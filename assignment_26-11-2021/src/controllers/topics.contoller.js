const express = require("express");

const Topics = require("../models/topic.model")

const router = express.Router();

router.post("", async(req,res)=>{
    try{
        const topic = await Topics.create(req.body);

        res.status(201).send(topic);
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.get("", async(req,res)=>{
    try{
        const topic = await Topics.find().lean().exec();

        res.send(topic);

    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.get("/:id", async(req,res)=>{
    try{
        const topic = await Topics.findById(req.params.id).lean().exec();

        res.send(topic);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.patch("/:id", async(req,res)=>{
    try{
        const topic = await Topics.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(topic);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.delete("/:id", async(req,res)=>{
    try{
        const topic = await Topics.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(topic);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

module.exports = router;
