import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import BookModel from "./BookModel";
import "../../Styles/BookSingleCard.css"; // Import your CSS file

const BookSingleCard = ({ book }) => {
  // console.log(book);
  const [show,setShow] = useState(false);
  return (
    <div className="book-card">
      <div className="year">{book.publishYear}</div>
      <div className="id">{book._id}</div>
      <div className="title-icon">
        <PiBookOpenTextLight className="PiBookOpenTextLight" />
        <div>{book.title}</div>
      </div>
      <div className="author-icon">
        <BiUserCircle className="BiUserCircle"/>
        <div>{book.author}</div>
      </div>
      <div className="actions">
        <BiShow className="BiShow" onClick={()=>{setShow(true)}}/>
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="BsInfoCircle" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="AiOutlineEdit" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="MdOutlineDelete" />
        </Link>
      </div>
      <div>
        {
          show && <BookModel book={book} onClose={()=>{setShow(false)}}/>
        }
      </div>
    </div>
  );
};

export default BookSingleCard;
