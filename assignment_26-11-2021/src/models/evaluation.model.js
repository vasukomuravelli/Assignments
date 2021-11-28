const mongoose = require('mongoose');

const Topics = require("./topic.model");

const Users = require("./user.model");

const Students = require("./student.model");

const evaluationSchema = new mongoose.Schema({
    "date_of_Evaluation" : {type:String,required:true},
    "marks" : {type:Number,required:true},
    "Topic_id" :  {
        type:mongoose.Schema.Types.ObjectId,
        ref:Topics,
        required:true,
    },
    "instructor_id" : {
        type : mongoose.Schema.Types.ObjectId,
        ref : Users,
        required:true,
    },
    "student_id" : {
        type : mongoose.Schema.Types.ObjectId,
        ref : Students,
        required:true,
    },
},{
    versionKey:false,
    timestamps:true
});

module.exports = new mongoose.model("evaluation",evaluationSchema);
