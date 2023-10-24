import express from "express";
import { Book } from "../Model/BookModel.js";
// mongoose post method is async

const router = express.Router();
router.post("/",async(req,res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({message:'Send all required data:title,author,publishYear'});
        }

        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        }
        const book = await Book.create(newBook);

        return res.status(200).send(book);

    }catch(error){
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
}) 

// getting all the books 
router.get("/",async(req,res)=>{
    try{
        const books = await Book.find({});
        return res.status(200).json({
            count : books.length,
            data: books
        });
    }catch(error){
        console.log({message:error.message});
        res.status(500).send({message:error.message})
    }
})
// getting one book by id... 
router.get("/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
         }
        return res.status(200).json(book);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message:error.message})
    }
}) 
// deleting one book by id  
router.delete("/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(404).send({message:`Book of id ${id} is not present in DB`})
        }
        return res.status(200).send({message:`Book of having id ${id} deleted succesfully`})

    }catch(error){
        console.log(error.message)
        return res.status(500).send({message:error.message})
    }
}) 
// update book by id 
router.put("/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({message:'Send all required data:title,author,publishYear'});
        }

        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        }
        const book = await Book.findByIdAndUpdate(id,newBook);
        if(!book){
            return res.status(404).send({message:'Book is not found'})
        }
        return res.status(200).send({message:"Book updated succesfully"});
    }catch(error){
        console.log(error.message)
        return res.status(500).send({message:error.message})
    } 
}) 

export default router;