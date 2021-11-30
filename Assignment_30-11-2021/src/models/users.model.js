const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    First_name : {type:String,required:true},
    Last_name : {type:String,required:true},
    Email : {type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("user",userSchema);