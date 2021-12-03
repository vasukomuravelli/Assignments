const {Schema,model} = require("mongoose");

const user = require("./user.model");

const postSchema  = new Schema({
    "title" : {type:String,required:true},
    "body" : {type:String,required:true},
    "user" : {
        type:Schema.Types.ObjectId,
        ref : user,
        required:true,
    }
},{
    versionKey : false,
    timestamps:true,
})

module.exports = new model("post",postSchema);