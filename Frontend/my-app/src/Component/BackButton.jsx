import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs"; 
import { Link } from "react-router-dom";
const BackButton=()=>{
    return(<>
            <Link to="/">
                <BsArrowLeftCircle />
            </Link>
    </>)
}

export default BackButton;