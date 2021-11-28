const express = require('express');

const connect = require("./src/configs/db");

const app = express();

app.use(express.json());

// Creating USER Crud operations

const UserController = require("./src/controllers/users.controller");

app.use("/users",UserController);

// Creating Topic Crud operations

const TopicController = require("./src/controllers/topics.contoller");

app.use("/topics",TopicController);

// Creating student Crud operations

const StudentController = require("./src/controllers/students.controller");

app.use("/students",StudentController);

// Creating Evaluation Crud operations

const EvaluationController = require("./src/controllers/evaluations.controller");

app.use("/evaluations",EvaluationController);


// Fetching Results date wise

const ResultsController = require("./src/controllers/result.controller");

app.use("/results",ResultsController);

// Fetching Tooper date wise

const TopperController = require("./src/controllers/topper.controller");

app.use("/topper",TopperController);

app.listen("2364", async(req,res)=>{
    await connect();
    console.log("Listening on 2364");
})