const express = require("express");

const Evaluations = require("../models/evaluation.model")

const router = express.Router();

router.post("", async(req,res)=>{
    try{
        const evaluation = await Evaluations.create(req.body);

        res.status(201).send(evaluation);
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.get("", async(req,res)=>{
    try{
        const evaluation = await Evaluations.find().lean().exec();

        res.send(evaluation);

    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.get("/:id", async(req,res)=>{
    try{
        const evaluation = await Evaluations.findById(req.params.id).lean().exec();

        res.send(evaluation);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.patch("/:id", async(req,res)=>{
    try{
        const evaluation = await Evaluations.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(evaluation);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.delete("/:id", async(req,res)=>{
    try{
        const evaluation = await Evaluations.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(evaluation);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

module.exports = router;