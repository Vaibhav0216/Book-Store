import React, { useEffect, useState } from "react";
import BackButton from "../Component/BackButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Component/Spinner";

const ShowBook=()=>{
    const [book,setBook] = useState({});
    const [loading,setLoading] = useState(false);
    const { id } = useParams();
    const [error,setError] = useState(null);
    useEffect(()=>{
        setLoading(true);
        axios
        .get(`http://localhost:8080/books/${id}`)
        .then((response)=>{
            setBook(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setError(error);
        })
    },[])
    return(
        <div>
            <div>
                <BackButton/>
                <h2>Book Details</h2>
            </div>
            {
                loading ?  <Spinner/> : (
                <div>
                    <div>
                        <span>Id </span> 
                        <span> {book._id}</span>
                    </div>
                    <div>
                        <span>Title</span>    
                        <span>{book.title}</span>
                    </div>
                    <div>
                        <span>Author </span>   
                        <span>{book.author}</span>
                    </div>
                    <div>
                        <span>Publish Year</span>   
                        <span>{book.publishYear}</span> 
                    </div>
                    <div>
                        <span>Created Time</span> 
                        <span> {book.createdAt}</span>      
                    </div>
                    <div>
                        <span>Last Updated Time</span>  
                        <span> {book.updatedAt}</span>  
                        
                    </div>
                </div>
                )      
            }
        </div>
    )
}

export default ShowBook;