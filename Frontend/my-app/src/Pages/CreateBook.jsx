import React, { useState } from "react";
import BackButton from "../Component/BackButton";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/CreateBook.css'; // Import your CSS file
import Spinner from "../Component/Spinner";
import axios from "axios";
// import { useSnackbar } from 'notistack';

const CreateBook = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        publishYear: "",
    });
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    // const { enqueueSnackbar } = useSnackbar();

    const handleChange = (e) => {
        e.preventDefault();
        setBook((prevBook) => ({
            ...prevBook,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        axios
        .post("https://backend-cb1v.onrender.com/books",book)
        .then(()=>{
            setLoading(false);
            // enqueueSnackbar('Book created successfully',{variant:'success'});
            navigate("/")
        })
        .catch((error)=>{
            setLoading(false);
            // enqueueSnackbar('Error',{variant:'error'})
            console.log(error)
            setError(error)
            
        })
    }

    return (
        <div >
            <div className="header">
                <BackButton/>
                <div>Create Book</div>
            </div>
            {loading && <Spinner/>}
            {error && <div className="error-message">{error.message}</div>}
            {/* not use method along from in javascript/react  */}
            <form className="create-book-container" onSubmit={handleSubmit}> 
                
                {/* In lable htmlFor give id not name  */}
                <label htmlFor="title">Title *</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={book.title}
                    onChange={handleChange} // Add onChange handler
                    required
                />
                <label htmlFor="author">Author *</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    value={book.author}
                    onChange={handleChange} 
                    required
                />
                <label htmlFor="year">Publish Year *</label>
                <input
                    type="number"
                    name="publishYear"
                    id="year"
                    value={book.publishYear}
                    onChange={handleChange} 
                    min={1700}
                    max={2023}
                    required
                />
                <div className="btn">
                    <button type="submit">Save Book</button>
                </div>
            </form>
        </div>
    );
};

export default CreateBook;
