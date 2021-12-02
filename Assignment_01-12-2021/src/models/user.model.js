const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    "first_name" : {required:true,type:String},
    "last_name" : {type:String,required:false},
    "Profile_pic" : {type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("user",userSchema);