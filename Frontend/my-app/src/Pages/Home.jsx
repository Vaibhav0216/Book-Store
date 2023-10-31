import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "../Component/Spinner";
import BooksTable from "../Component/Home/BooksTable";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import BooksCard from "../Component/Home/BooksCard";
import '../Styles/Home.css'; // Import your CSS file

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType,setShowType] = useState('table');
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://backend-cb1v.onrender.com/books");
                setBooks(response.data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="home-container">
            <div className="heading">
               <div className="home-title">Books List</div>
               <button className="table" onClick={()=>{setShowType('table')}}>Table</button>
               <button className="card" onClick={()=>{setShowType('card')}}>Card</button>
               <Link to="/books/create" className="add-button"><MdOutlineAddBox className="MdOutlineAddBox"/></Link>
            </div>
            {loading ? (
                <Spinner loading={loading}/>
            ) : showType === 'table' ?(
                <BooksTable books={books} />
            ):(
                <BooksCard books={books}/>
            )}
        </div>
    );
}

export default Home;
