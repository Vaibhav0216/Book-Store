import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Spinner = ({loading}) =>{
   
    return(<>
     <ClipLoader
       loading={loading}
       size={150}
       ria-label="Loading Spinner"
       data-testid="loader"
     />
    </>)
}

export default Spinner;