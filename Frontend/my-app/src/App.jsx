import React from "react";
import CreateBook from "./Pages/CreateBook";
import DeleteBook from "./Pages/DeleteBook";
import EditBook from "./Pages/EditBook";
import ShowBook from "./Pages/ShowBook";
import Home from "./Pages/Home";
import { Route,Routes } from "react-router-dom";
import { SnackbarProvider } from 'notistack';



const App=()=>{
    return(<>
     {/* <SnackbarProvider maxSnack={3}> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
           
            <Route path='/books/create' element={<CreateBook />} />
            <Route path='/books/details/:id' element={<ShowBook />} />
            <Route path='/books/edit/:id' element={<EditBook />} />
            <Route path='/books/delete/:id' element={<DeleteBook />} />
        </Routes>
    {/* </SnackbarProvider> */}
    </>)
}

export default App;