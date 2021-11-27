const express = require("express");

const mongoose = require("mongoose");

const connect = ()=>{
    mongoose.connect("mongodb+srv://vasukomuravelli:Vasu1234@cluster0.t3wyf.mongodb.net/library");
}

// Creating the Author schema

const authorSchema = new mongoose.Schema({
    "First_name":{type:String,required:true},
    "Last_name":{type:String,required:false},
},{
    versionKey:false,
    timestamps:true,
});

const Author = new mongoose.model("author",authorSchema);

// creating Section Schema

const sectionSchema = new mongoose.Schema({
    "Section_name" : {type:String,required:true}
},{
    versionKey:false,
    timestamps:true,
});

const Section = new mongoose.model("section",sectionSchema);

// creating Book Schema

const bookSchema = new mongoose.Schema({
    "Book_name" : {type:String,required:true},
    "Body" : {type:String,required:true},
    "Author_id" : [{
        type: mongoose.Schema.Types.ObjectId,
        ref:Author,
        required:true,
    },],
    "Section_id" : {
        type : mongoose.Schema.Types.ObjectId,
        ref:Section,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
});

const Book = new mongoose.model("books",bookSchema);

// creating Checkout schema

const checkoutSchema = new mongoose.Schema({
    "Is_checked_out" : {type:String,required:true},
    "Book_name" : {
        type:mongoose.Schema.Types.ObjectId,
        ref:Book,
        required:true,
    },
    "user" : {type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
});

const CheckOut = mongoose.model("checkout",checkoutSchema);

const app = express();

app.use(express.json());

// Books CRUD

app.post("/books", async (req,res)=>{
    try{
        const book = await Book.create(req.body);
    
        res.status(201).send(book);        
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.get("/books", async (req,res)=>{
    try{
        const book = await Book.find().populate({path : "Author_id",select : "First_name"}).populate({path : "Section_id",select : "Section_name"}).lean().exec();

        res.send(book);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.get("/books/:id", async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id).lean().exec();

        res.send(book);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.patch("/books/:id", async(req,res)=>{
    try{
        const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.staus(201).send(book);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.delete("/books/:id", async(req,res)=>{
    try{
        const book = await Book.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(book);
    }catch(e){
        res.status(500).send({"message" : e.message, "status" : "Failed"});
    }
});

// Authors CRUD

app.post("/authors", async (req,res)=>{
    try{
        const author = await Author.create(req.body);
    
        res.status(201).send(author);        
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.get("/authors", async (req,res)=>{
    try{
        const author = await Author.find().lean().exec();

        res.send(author);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.get("/authors/:id", async(req,res)=>{
    try{
        const author = await Author.findById(req.params.id).lean().exec();

        res.send(author);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.patch("/authors/:id", async(req,res)=>{
    try{
        const author = await Author.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.staus(201).send(author);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.delete("/authors/:id", async(req,res)=>{
    try{
        const author = await Author.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(author);
    }catch(e){
        res.status(500).send({"message" : e.message, "status" : "Failed"});
    }
});

// Books by particular Author

app.get("/authors/:id/books",async(req,res)=>{
    try{
        const author = await Author.findById(req.params.id).lean().exec();

        const books = await Book.find({"Author_id" : req.params.id}).populate("Author_id").lean().exec();

        res.status(200).send(books);
    }catch(e){
        res.status(500).send({"message" : e.message, "status" : "Failed"});
    }
});

// Section CRUD

app.post("/sections", async (req,res)=>{
    try{
        const section = await Section.create(req.body);
    
        res.status(201).send(section);        
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.get("/sections", async (req,res)=>{
    try{
        const section = await Section.find().lean().exec();

        res.send(section);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.get("/sections/:id", async(req,res)=>{
    try{
        const section = await Section.findById(req.params.id).lean().exec();

        res.send(section);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.patch("/sections/:id", async(req,res)=>{
    try{
        const section = await Section.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.staus(201).send(section);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.delete("/sections/:id", async(req,res)=>{
    try{
        const section = await Section.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(section);
    }catch(e){
        res.status(500).send({"message" : e.message, "status" : "Failed"});
    }
});

// Books by particular Section

app.get("/sections/:id/books",async(req,res)=>{
    try{
        const section = await Section.findById(req.params.id).lean().exec();

        const books = await Book.find({"Section_id" : req.params.id}).populate("Section_id").lean().exec();

        res.status(200).send(books);
    }catch(e){
        res.status(500).send({"message" : e.message, "status" : "Failed"});
    }
});

// Books of an 1 author in a section

app.get("/books/author/1",async (req,res)=>{

    try {

        const OneAuthor = await Book.find({ $where: 'this.Author_id.length==1' }).populate({ path:"Section_id",select:"Section_name"}).populate({path:"Author_id",select:"First_name"+" "+"Last_name"}).lean().exec();
        
        return res.status(201).send(singleAuthorBooks);
    }
    catch (e) {
        return res.status(501).json({ message: e.message, status: "Failed" });
    }
    
})



// Checkout CRUD

app.post("/checkouts", async (req,res)=>{
    try{
        const checkout = await CheckOut.create(req.body);
    
        res.status(201).send(checkout);        
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.get("/checkouts", async (req,res)=>{
    try{
        const checkout = await CheckOut.find().lean().exec();

        res.send(checkout);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.get("/checkouts/:id", async(req,res)=>{
    try{
        const checkout = await CheckOut.findById(req.params.id).lean().exec();

        res.send(checkout);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.patch("/checkouts/:id", async(req,res)=>{
    try{
        const checkout = await CheckOut.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.staus(201).send(checkout);
    }catch(e){
        res.status(500).send({"message":e.message,"status":"Failed"});
    }
});

app.delete("/checkouts/:id", async(req,res)=>{
    try{
        const checkout = await CheckOut.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(checkout);
    }catch(e){
        res.status(500).send({"message" : e.message, "status" : "Failed"});
    }
});


app.listen("3693",async(req,res)=>{
    connect();
    console.log("Listening on 3693");
})