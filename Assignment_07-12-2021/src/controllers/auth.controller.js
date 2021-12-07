const User = require("../models/users.model");

const jwt = require("jsonwebtoken");

require("dotenv").config();

let newToken = (user)=>{
    return jwt.sign({ user : user }, process.env.JWTACCESS);
}

const register = async(req,res)=>{

    try{
        let user = await User.findOne({email : req.body.email}).lean().exec();

        if(user)
        {
            throw new Error({
                status : "Failed",
                Message : "Please use different Email id",
            });
        }
        else{
            
            user = await User.create(req.body);

            const token = newToken(user);

            res.status(201).json({user,token});

        }
    }catch(e){
        res.status(500).json({Message : e.message, Status : "Failed"});
    }
}

const login = async(req,res)=>{
    try{
        let user = await User.findOne({email : req.body.email});

        if(!user){
            throw new Error({
                Message : "Please check your email and password",
                Status  : "Failed",
            });
        }
        
        const match = await user.checkPassword(req.body.password);
        
        if(match){

            throw new Error({
                Message : "Please check your email and password",
                Status  : "Failed",
            });
        }

        const token = newToken(user);

        res.status(201).json({user,token});

    }catch(e){
        res.status(500).json({Message : e.Message, Status : "Failed"});
    }
}

module.exports = {register,login}