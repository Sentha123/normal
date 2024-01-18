import express from "express";
const port = 3000;
const app = express();

app.listen(3000,()=>{
    console.log("hello world");
})
app.get("/",(req,res)=>{
    res.sendStatus(201);
})