import express from "express";
import { PORT , mongodbURL} from "./Config.js"; 
import mongoose from "mongoose";
import booksRouter from "./Routes/booksRouter.js";
import cors from 'cors';
import bodyParser from "body-parser";
const app = express(); 

app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  }); 

  app.use("/books",booksRouter);
  
mongoose 
.connect(mongodbURL) 
.then(()=>{
    console.log("mongoose connected succesfully...")
    app.listen(PORT,()=>{
        console.log(`App is runing on ${PORT} succesfully....`)
    })
}) 
.catch((error)=>{
    console.log(error)
})