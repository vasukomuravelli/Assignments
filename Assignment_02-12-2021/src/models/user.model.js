const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    "first_name" : {required:true,type:String},
    "last_name" : {required:true,type:String},
    "email" : {required:true,type:String,unique:true},
    "pincode" : {required:true,type:Number},
    "age" : {required:true,type:Number},
    "gender" : {required:true,type:String,default:"male"},
},{
    versionKey:false,
    timestamps:true,
})

module.exports = new model("user",userSchema);