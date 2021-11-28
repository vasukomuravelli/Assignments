const mongoose = require('mongoose');

const Users = require("./user.model");

const studentSchema = new mongoose.Schema({
    "roll_id" : {type:String,required:true},
    "current_batch" :  {type:String,required:false},
    "user_id" : {
        type : mongoose.Schema.Types.ObjectId,
        ref : Users,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true
});

module.exports = new mongoose.model("student",studentSchema);