const express = require('express');

const Evaluations = require("../models/evaluation.model");

const router = express.Router();

// fetching all students who gave a particular evaluation by using date filteration

router.get("/:date", async(req,res)=>{
    try{
        const evaluation = await Evaluations.find({"date_of_Evaluation" : req.params.date}).populate({path : "Topic_id",select : "name"}).populate({path : "instructor_id"}).populate({path : "student_id",populate :{path : "user_id"}}).lean().exec();
        
        res.send(evaluation);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

module.exports = router;