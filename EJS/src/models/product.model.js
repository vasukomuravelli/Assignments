const {Schema,model} = require("mongoose");

const productSchema = new Schema({
    "Title" : {type:String,required:true},
    "Price" : {type:String,required:true},
    "Images": [{type:String,required:true}],
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("product",productSchema);

