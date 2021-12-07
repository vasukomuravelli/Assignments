const {Schema,model} = require("mongoose");

const User = require("../models/users.model");

const productSchema = new Schema({
    "name" : {type:String,required:true},
    "price" : {type:Number,required:true},
    "user" : {
        type:Schema.Types.ObjectId,
        required:true,
        ref : User,
    },
},{
    versionKey:false,
    timestamps:true
});

module.exports = new model("product",productSchema);