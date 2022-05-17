import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "../images/404-img.gif";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-content">
      <img src={errorImg} alt="Error-page :(" />
      <h3>Oops... Page not found!</h3>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Error;
