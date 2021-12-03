const express = require('express');

const router = express.Router();

const authenticate = require("../middlewares/authenticate");

const Post = require("../models/post.model");

router.post("",authenticate,async(req,res)=>{
    try{
        const user = req.user;

        const post = await Post.create({
            title : req.body.title,
            body : req.body.body,
            user : user.user._id,
        });

        res.status(201).json({post});

    }catch(e){
        res.status(500).json({"Message":e.message,"status" : "Fail"});
    }
});

module.exports = router;