const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "first_name" : {type:String,required:true},
    "last_name" :  {type:String,required:false},
    "gender" : {type:String,required:true,default:"male"},
    "date_of_birth" : {type:String,required:true}
},{
    versionKey:false,
    timestamps:true
});

module.exports = new mongoose.model("user",userSchema);