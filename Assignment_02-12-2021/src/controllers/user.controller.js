const express = require("express"); 

const { body, validationResult } = require('express-validator');

const router = express.Router();

const User = require("../models/user.model");

router.post("/",body("email").custom(async(value)=>{
    const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
    if(! isEmail)
    {
        throw new Error("Please enter a valid email");
    }
    const email = await User.findOne({"email" : value}).lean().exec();
    if(email)
    {
        throw new Error("Please use different email");
    }
}),body("first_name").isLength({min:1}),body("last_name").isLength({min:1}),body("gender").isLength({min:4}),body("age").custom((value)=>{
    const age = /^[1-9]?[0-9]{1}$|^100$/.test(value);
    // console.log(age);
    if(! age)
    {
        throw new Error("Please enter valid age");
    }
    return true;
}),body("pincode").custom((value)=>{
    const pin = /^(\s*\d{6}\s*)(,\s*\d{6}\s*)*,?\s*$/.test(value);
    if(! pin)
    {
        throw new Error("Enter valid pincode");
    }
    return true;
})
,async(req,res)=>{

    // console.log(body("age"));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        
        const user = await User.create(req.body);
    
        res.status(201).json({user});
    
    }catch(e)
    {
        res.status(500).json({"message" : e.message});
    }
})

router.get("/",async(req,res)=>{
    try{
        
        const user = await User.find().lean().exec();
    
        res.status(201).json({user});
    
    }catch(e)
    {
        res.status(500).json({"message" : e.message});
    }
});

module.exports = router;

