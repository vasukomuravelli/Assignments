const express = require('express');

const fs = require("fs");

const router = express.Router();

const upload = require("../middleware/upload");

const Gallery = require("../models/gallery.model");

const User = require("../models/user.model");

router.post("/",upload.any("pictures"),async(req,res)=>{

    const filePaths = req.files.map((file)=>file.path);
    // console.log(filePaths);

    try{

        const gallery = await Gallery.create({
            "pictures" : filePaths,
            "user_id" : req.body.user_id,
        });

        res.status(201).json({gallery});

    }catch(e){
        res.status(500).json({"message" : e.message});
    }

});

router.get("/",async(req,res)=>{
    try{
        const gallery = await Gallery.find().populate({path : "user_id"}).lean().exec();

        res.json({gallery});

    }catch(e){
        res.status(500).json({"message" : e.message});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const pictures = await Gallery.findById(req.params.id).populate("user_id").lean().exec();
        const files = [...pictures.pictures,pictures.user_id.Profile_pic];
        // console.log(files);
        files.forEach((file)=>{
            fs.unlink(file,(err)=>{
                if(err)
                {
                    console.log(err);
                }
            })
        })
        const user = await User.findByIdAndDelete(pictures.user_id._id).lean().exec();
        const gallery = await Gallery.findByIdAndDelete(req.params.id).lean().exec();
        
        res.status(204).json({gallery});
    }catch(e){
        res.status(500).json({"message" : e.message});
    }
})

module.exports = router;
