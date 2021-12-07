module.exports = (permittedRoles)=>{
    return function(req,res,next){
        user = req.user.user;
        isAllowed = false;

        user.roles.map((role)=>{
            if(permittedRoles.includes(role))
            {
                isAllowed = true;
            }
        });

        if(!isAllowed){

            return res.status(500).json({
                "status":"Failed",
                "message" : "You are not allowed to access",
            });

        }
        return next();
    }
}