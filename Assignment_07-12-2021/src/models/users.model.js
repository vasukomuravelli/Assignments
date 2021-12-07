const {Schema,model} = require("mongoose");

const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    "email" : {required:true,type:String},
    "password" : {required:true,type:String},
    "roles" : [{type:String,required:true}],
    "username" : {required:true,type:String},
},{
    versionKey:false,
    timestamps:true
});

userSchema.pre("save",function(next){
    if(! this.isModified("password")) return next();
    bcrypt.hash(this.password, 10, (err, hash)=> {
        this.password = hash;
        return next();
    });
});

userSchema.methods.checkPassword = function(password){
    bcrypt.compare(this.password, password, function(err, res) {
        
        if(err) return err;
        
        return res;

    });

}

module.exports = new model("user",userSchema);