const express = require('express');

const Evaluations = require("../models/evaluation.model");

const router = express.Router();


// fetching student who scored highest marks in a particular evaluation by using date filteration

router.get("/:date", async(req,res)=>{
    try{
        const evaluation = await Evaluations.find({"date_of_Evaluation" : req.params.date},{"instructor_id" : 0, "Topic_id" : 0}).populate({path : "student_id",populate :{path : "user_id"}}).sort({"marks": -1}).limit(1).lean().exec();

        res.send(evaluation);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

module.exports = router;

