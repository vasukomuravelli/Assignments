const {Schema,model, Mongoose} = require("mongoose");

const User = require("../models/user.model");

const gallerySchema = new Schema({
    "pictures" : [{required:true,type:String}],
    "user_id" : {
        type : Schema.Types.ObjectId,
        ref : User,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("gallery",gallerySchema);