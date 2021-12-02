const express = require('express');

const fs  =  require("fs");

const User = require("../models/user.model");

const router = express.Router();

const upload = require("../middleware/upload");

router.post("",upload.single("Profile_pic"),async(req,res)=>{

    const user = await User.create({

        "first_name" : req.body.first_name,

        "last_name" : req.body.last_name,

        "Profile_pic" : req.file.path,

    });

    res.status(201).json({user});
});

router.patch("/:id",upload.single("Profile_pic"),async(req,res)=>{

    if(req.file.path)
    {
        const path = await User.findById(req.params.id,{"Profile_pic" : 1}).lean().exec();
        // console.log(path.Profile_pic)
        fs.unlink(path.Profile_pic,(err)=>{
            if(err)
            {
                console.log(err);
            }
        })
    }

    const user = await User.findByIdAndUpdate(req.params.id,{

        "first_name" : req.body.first_name,

        "last_name" : req.body.last_name,

        "Profile_pic" : req.file.path,

    },{
        new:true,
    }).lean().exec();

    res.status(201).json({user});
});

router.get("/",async(req,res)=>{

    const user = await User.find().lean().exec();

    res.json({user});
});

router.get("/:id",async(req,res)=>{

    const user = await User.findById(req.params.id).lean().exec();

    res.json({user});
});


router.delete("/:id",async(req,res)=>{

    const user = await User.findByIdAndDelete(req.params.id).lean().exec();

    res.status(204).json({user});
});


module.exports = router;