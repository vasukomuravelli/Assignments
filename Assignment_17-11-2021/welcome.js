const express = require('express');

const app = express();

const users_Data = require("./MOCK_DATA.json");

console.log(app);

app.get('/',(req,res)=>{
    res.send("Welcome to Home page");
})

app.get('/users',(req,res)=>{
    res.send(users_Data);
})

app.listen("7000",()=>{
    console.log("listening on 7000");
})