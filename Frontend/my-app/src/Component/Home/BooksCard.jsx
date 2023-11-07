import React from "react";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
    return (
        <div>
            {
                books.map((book) => (
                    <BookSingleCard key={book._id} book={book} />
                ))
            }
        </div>
    );
}

export default BooksCard;