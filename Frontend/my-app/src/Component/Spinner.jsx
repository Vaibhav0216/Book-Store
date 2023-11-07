import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../Styles/Spinner.css"; // Import the CSS file

const Spinner = ({ loading }) => {
  return (
    <div className="spinner-container">
      <ClipLoader loading={loading} size={150} ria-label="Loading Spinner" data-testid="loader" className="spinner" />
    </div>
  );
};

export default Spinner;
