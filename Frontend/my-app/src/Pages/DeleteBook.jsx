import React, { useEffect, useState } from "react";
import Spinner from "../Component/Spinner";
import BackButton from "../Component/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/DeleteBook.css"
import axios from "axios";
const DeleteBook=()=>{
    const [book, setBook] = useState({
        title: "",
        author: "",
        publishYear: "",
    });
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const {id} = useParams();
    const handleDelete=()=>{
        setLoading(true);
        axios
        .delete(`https://backend-cb1v.onrender.com/books/${id}`)
        .then((response)=>{
            setLoading(false);
            console.log(`Book of id ${id} deleted successfully`);
            navigate('/');
        })
        .catch((error)=>{
            setError(error);
            console.log(error.message);
            setLoading(false);
        })
    }
    return(
        <div>
            <div className="header">
                <BackButton/>
                <div>Delete Book</div>
            </div>
            {error && <div>{error.message}</div> }
            {
                loading?<Spinner/>
                :(
                    <div className="container">
                       <div>Are you sure you want to delete this book?</div>
                       <button onClick={handleDelete}>Yes,Delete it</button>
                    </div>
                )
            }
        </div>
    )
}

export default DeleteBook;