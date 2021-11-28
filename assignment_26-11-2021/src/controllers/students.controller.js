const express = require("express");

const Students = require("../models/student.model")

const router = express.Router();

router.post("", async(req,res)=>{
    try{
        const student = await Students.create(req.body);

        res.status(201).send(student);
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.get("", async(req,res)=>{
    try{
        const student = await Students.find().lean().exec();

        res.send(student);

    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.get("/:id", async(req,res)=>{
    try{
        const student = await Students.findById(req.params.id).lean().exec();

        res.send(student);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.patch("/:id", async(req,res)=>{
    try{
        const student = await Students.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(student);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

router.delete("/:id", async(req,res)=>{
    try{
        const student = await Students.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(student);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

module.exports = router;
