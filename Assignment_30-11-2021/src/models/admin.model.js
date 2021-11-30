const {Schema,model} = require("mongoose");

const adminSchema = new Schema({
    First_name : {type:String,required:true},
    Last_name : {type:String,required:false},
    Emp_id : {type:String,required:true},
    Email : {type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("admin",adminSchema);