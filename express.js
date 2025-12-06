import express from 'express';

const app=express();
app.get('/users',(req,res)=>{
    res.send("hello this is from backend Akshaya");
})
app.get('/get-users',(req,res)=>{
    res.send("hello this is from backend AbhiRam");
})
app.listen(7007,()=>{
    console.log("Server running at 7007")
});