import React, { useEffect, useState } from "react";
import BackButton from "../Component/BackButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Component/Spinner";
import "../Styles/ShowBook.css";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://backend-cb1v.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  return (
    <div className="show-book-container">
      <div className="header">
        <BackButton />
        <div className="title">Book Details</div>
      </div>
      {loading ? (
        <div className="spinner-container">
          <Spinner className="spinner" />
        </div>
      ) : (
        <div className="container">
          <div className="book-details">
            <div>
              <span className="title">Id</span>
              <span>{book._id}</span>
            </div>
            <div>
              <span className="title">Title</span>
              <span>{book.title}</span>
            </div>
            <div>
              <span className="title">Author</span>
              <span>{book.author}</span>
            </div>
            <div>
              <span className="title">Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div>
              <span className="title">Created Time</span>
              <span>{book.createdAt}</span>
            </div>
            <div>
              <span className="title">Last Updated Time</span> 
              <span>{book.updatedAt}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
