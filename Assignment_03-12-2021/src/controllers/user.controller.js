const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

require('dotenv').config();

let newtoken = (a)=>{
    return jwt.sign({ user : a }, process.env.PASSWORD);
}

require("dotenv").config();

const register = async(req,res)=>{
    try{
        let user = await User.findOne({email : req.body.email}).lean().exec();
        if(user) 
        {
            return res.status(400).json({"Message" : "Please Enter different Email address","Status" : "Failed"});
        }
        user = await User.create(req.body);

        const token = newtoken(user);

        res.status(201).json({user,token});
    }catch(e){
        res.status(500).json({"Message"  :e.message,"status" : "Fail"});
    }
}

const login = async(req,res)=>{

    try{        
    
    let user = await User.findOne({email : req.body.email});

    if(!user) return res.status(400).json({"message" : "Incorrect Email or password","Status" : "Failed"});

    const match = await user.checkPassword(req.body.password);

    if(!match) return res.status(400).json({"message" : "Incorrect Email or password","Status" : "Failed"});

    const token = newtoken(user);

    res.status(201).json({user,token});
    
    }catch(e){
        res.status(500).json({"Message":e.message,"status" : "Fail"});
    }
    
}

module.exports = {register,login};