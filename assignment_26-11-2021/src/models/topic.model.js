const mongoose = require('mongoose');


const topicSchema = new mongoose.Schema({
    "name" : {type:String,required:true},
},{
    versionKey:false,
    timestamps:true
});

module.exports = new mongoose.model("topic",topicSchema);