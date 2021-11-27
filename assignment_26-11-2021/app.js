const express = require('express');

const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/circulum");
}

// Creating users Schema

const userSchema = new mongoose.Schema({
    "first_name" : {type:String,required:true},
    "last_name" :  {type:String,required:false},
    "gender" : {type:String,required:true,default:"male"},
    "date_of_birth" : {type:String,required:true}
},{
    versionKey:false,
    timestamps:true
});

const Users = new mongoose.model("user",userSchema);

// Creating Topic Schema

const topicSchema = new mongoose.Schema({
    "name" : {type:String,required:true},
},{
    versionKey:false,
    timestamps:true
});

const Topics = new mongoose.model("topic",topicSchema);

// Creating students Schema

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

const Students = new mongoose.model("student",studentSchema);

// Creating Evaluations Schema

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

const Evaluations = new mongoose.model("evaluation",evaluationSchema);

const app = express();

app.use(express.json());

// Creating USER Crud operations

app.post("/users", async(req,res)=>{
    try{
        const user = await Users.create(req.body);

        res.status(201).send(user);
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.get("/users", async(req,res)=>{
    try{
        const user = await Users.find().lean().exec();

        res.send(user);

    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.get("/user/:id", async(req,res)=>{
    try{
        const user = await Users.findById(req.params.id).lean().exec();

        res.send(user);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.patch("/user/:id", async(req,res)=>{
    try{
        const user = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(user);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.delete("/user/:id", async(req,res)=>{
    try{
        const user = await Users.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(user);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

// Creating Topic Crud operations

app.post("/topics", async(req,res)=>{
    try{
        const topic = await Topics.create(req.body);

        res.status(201).send(topic);
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.get("/topics", async(req,res)=>{
    try{
        const topic = await Topics.find().lean().exec();

        res.send(topic);

    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.get("/topic/:id", async(req,res)=>{
    try{
        const topic = await Topics.findById(req.params.id).lean().exec();

        res.send(topic);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.patch("/topic/:id", async(req,res)=>{
    try{
        const topic = await Topics.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(topic);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.delete("/topic/:id", async(req,res)=>{
    try{
        const topic = await Topics.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(topic);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

// Creating student Crud operations

app.post("/students", async(req,res)=>{
    try{
        const student = await Students.create(req.body);

        res.status(201).send(student);
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.get("/students", async(req,res)=>{
    try{
        const student = await Students.find().lean().exec();

        res.send(student);

    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.get("/student/:id", async(req,res)=>{
    try{
        const student = await Students.findById(req.params.id).lean().exec();

        res.send(student);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.patch("/student/:id", async(req,res)=>{
    try{
        const student = await Students.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(student);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.delete("/student/:id", async(req,res)=>{
    try{
        const student = await Students.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(student);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

// Creating Evaluation Crud operations

app.post("/evaluations", async(req,res)=>{
    try{
        const evaluation = await Evaluations.create(req.body);

        res.status(201).send(evaluation);
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.get("/evaluations", async(req,res)=>{
    try{
        const evaluation = await Evaluations.find().lean().exec();

        res.send(evaluation);

    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.get("/evaluation/:id", async(req,res)=>{
    try{
        const evaluation = await Evaluations.findById(req.params.id).lean().exec();

        res.send(evaluation);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.patch("/evaluation/:id", async(req,res)=>{
    try{
        const evaluation = await Evaluations.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(evaluation);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

app.delete("/evaluation/:id", async(req,res)=>{
    try{
        const evaluation = await Evaluations.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(evaluation);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

// fetching all students who gave a particular evaluation by using date filteration

app.get("/result/:date", async(req,res)=>{
    try{
        const evaluation = await Evaluations.find({"date_of_Evaluation" : req.params.date}).populate({path : "Topic_id",select : "name"}).populate({path : "instructor_id"}).populate({path : "student_id",populate :{path : "user_id"}}).lean().exec();

        res.send(evaluation);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});

// fetching student who scored highest marks in a particular evaluation by using date filteration

app.get("/top/:date", async(req,res)=>{
    try{
        const evaluation = await Evaluations.find({"date_of_Evaluation" : req.params.date},{"instructor_id" : 0, "Topic_id" : 0}).populate({path : "student_id",populate :{path : "user_id"}}).sort({"marks": -1}).limit(1).lean().exec();

        res.send(evaluation);
        
    }catch(e)
    {
        res.status(500).send({"message" : e.message,"Status" : "Failed"});
    }
});


app.listen("2364", async(req,res)=>{
    await connect();
    console.log("Listening on 2364");
})