// import express from "express";
import express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import seedRouter from './routes/seedRoute.js';
import carsRouter from './routes/carsRoute.js';
import rentRouter from './routes/rentRoute.js';
import cors from 'cors';
const app=express();
app.use (cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/seed/",seedRouter)
app.use("/api/cars/",carsRouter)
app.use("/api/rent/",rentRouter)



dotenv.config()
mongoose.connect("mongodb+srv://siddharth:mongoose@pettycash.uabgufe.mongodb.net/rent")
.then(()=>{console.log("connected to db")})
.catch((error)=>console.log((error.message)))


app.get('/test', function(req, res) {
    res.send("Server running")
  });

const port=process.env.PORT || 5000;
app.listen(port,()=> {console.log(`server running: http://localhost:${port}`)})
