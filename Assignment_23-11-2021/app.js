const express = require("express");
const mongoose = require("mongoose");

// Connecting to a mangoose server

const connect = ()=>{
    return mongoose.connect("mongodb+srv://vasukomuravelli:Vasu1234@cluster0.t3wyf.mongodb.net/test");
}

// Creating a schema for our data that acts exactly like a blueprint for all the data to be add.

const userSchema = mongoose.Schema({
    "movie_name" : {type : String, require: true },
    "movie_genre" : {type : String, require: false },
    "production_year" : {type : Number, require : true },
    "budget" : {type : Number, require : true }
},{
    versionKey : false, 
    timestamps  : true,
});

// Creating a mongoose model with name User which is going to connect with the users collection in our database and the blueprint is of userSchema.

const Movie = mongoose.model("user",userSchema); 

const app = express();

app.use(express.json());

// Convention for writing routes for an user
/*

Create - Post - /users

Read - Get - /users

    - Get(1)- /users/:id

Update - Patch(1)- /users/:id

Delete - Delete(1) - /users/:id

*/

// .lean() - It is used to get the Json data from the mongo

// .exec() - It intimates express that .find() is not the last function.

app.post("/users", async(req,res)=>{
    try{

        const movie = await Movie.create(req.body);

        return res.status(201).send(movie);

    }catch(e){
        return res.status(500).send({message : e.message, status : "Fail"});
    }
})

app.get("/users",async (req,res)=>{
    try{

        const movie = await Movie.find().lean().exec();

        return res.send(movie);

    }
    catch(e)
    {
       return res.status(500).send({message : e.message, status : "Fail"});
    }
});

app.get("/users/:id",async (req,res)=>{
    try{

        const movie =  await Movie.findById(req.params.id).lean().exec();

        res.send(movie);

    }catch(e){

       return res.status(500).send({message : e.message, status : "Fail"});

    }
});

app.patch("/users/:id", async(req,res)=>{

    try{
        
        const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
        }).lean().exec();

        res.status(201).send(movie);
    }
    catch(e){
        
        res.status(500).send({message : e.message,status : "Fail" });
    }
});

app.delete("/users/:id",async(req,res)=>{
try{

    const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();

    res.status(204).send(movie);

}catch(e){

    res.status(500).send({message : e.message,status : "Fail" });

}

})

app.listen("6666",async()=>{
    await connect();
    console.log("Listening on 6666");
});
