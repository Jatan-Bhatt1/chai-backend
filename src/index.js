import mongoose from "mongoose";
import { DB_name } from "./constants";
import express from "express"
(async() => {
  try{
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
   
  } catch(error){
    console.error("ERROR :",error);
    throw err;
  }
})()