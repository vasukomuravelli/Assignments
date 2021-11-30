const express = require("express");

const router = express.Router();

const Admin = require("../models/admin.model");

const sendmail = require("../util/sendmail");

router.post("/",async(req,res)=>{
    try{

        const admin = await Admin.create(req.body);

        res.status(201).json({user});

    }catch(e){
        res.status(500).json({"message" : e.message, "status" : "Failed"});
    }
});

router.get("/",async(req,res)=>{
    try{
        const pages = req.query.page || 2;
        const size = req.query.size || 2;

        const admin = await Admin.find().skip(offset).limit(size).lean().exec();

        const total = Math.ceil( await User.find().countDocument()/size);

        res.json({user,total});

    }catch(e){
        res.status(500).json({"message" : e.message, "status" : "Failed"});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const admin = await Admin.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).json({user});

    }catch(e){
        res.status(500).json({"message" : e.message, "status" : "Failed"});
    }
});

sendAdmin= async(a,b)=>{

    const admin_mails = await Admin.find({},{"Email" : 1,"_id" : 0}).lean().exec();

    const mails = [];
    admin_mails.forEach(element => {
        mails.push(element.Email);
    });

    sendmail("a@a.com",mails,`${a},${b} has registered with us`,`Please welcome ${a} ${b}`,`<h1>Please welcome ${a} ${b}</h1>`);
}

module.exports = {router,sendAdmin};