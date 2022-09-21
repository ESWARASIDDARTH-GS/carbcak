import express  from "express";
import Rent from "../models/rentModel.js";

const rentRouter=express.Router()

rentRouter.post('/rentcar',async (req,res)=>{
    try{
const newRent = new Rent(req.body)
await newRent.save()
res.send("Your rent Succesfull")
    }catch(error) {
        return res.status(400).json(error)
    }
})

export default rentRouter