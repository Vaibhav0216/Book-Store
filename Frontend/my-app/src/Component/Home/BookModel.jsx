import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import "../../Styles/BookModel.css"; // Import your CSS file


const BookModel = ({ book, onClose }) => {
  return (
    <div className="book-card" onClick={onClose}>
      <div>
        <div className="close-button">
          <AiOutlineClose onClick={onClose} />
        </div>
        <div className="year">{book.publishYear}</div>
        <div className="id">{book._id}</div>
        <div className="title-icon">
          <PiBookOpenTextLight />
          <div>{book.title}</div>
        </div>
        <div className="author-icon">
          <BiUserCircle />
          <div>{book.author}</div>
        </div>
        <div className="summary">
          <p>Summary Of {book.title}</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            suscipit minus praesentium nostrum voluptatibus cumque explicabo ad
            nisi sapiente nemo id excepturi delectus nulla voluptatum amet hic
            voluptate eligendi! Tempore.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default BookModel;
