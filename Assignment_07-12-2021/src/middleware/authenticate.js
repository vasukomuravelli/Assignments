require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWTACCESS,(err,token)=>{
            if(err) return reject(err);
            return resolve(token);
        });
    })
};

module.exports = async(req,res,next)=>{
    
    const bearerToken = req?.headers?.authorization;

    if(!bearerToken || !bearerToken.startsWith('Bearer '))
    {
        throw new Error({
            Message : "Enter valid token id",
            Status : "Failed",
        })
    }
    
    const token = bearerToken.split(' ')[1];

    let user;
    try{
        user = await verifyToken(token);
     }catch(e){
        res.status(500).json({Message : e.Message, Status : "Failed"});
    }
    
    if(!user)
    {
        throw new Error({
            Message : "Enter valid token id",
            Status : "Failed",
        });
    }

    req.user = user;

    return next();
}