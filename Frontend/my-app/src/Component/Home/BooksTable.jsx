import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../Styles/BooksTable.css"
const BooksTable = ({ books }) => {
    

    return (
        <table className="books-table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id}>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td className="operations">
                            <Link to={`/books/details/${book._id}`}>
                                <BsInfoCircle className="BsInfoCircle" />
                            </Link>
                            <Link to={`/books/edit/${book._id}`}>
                                <AiOutlineEdit className="AiOutlineEdit"/>
                            </Link>
                            <Link to={`/books/delete/${book._id}`}>
                                <MdOutlineDelete className="MdOutlineDelete"/>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BooksTable;
