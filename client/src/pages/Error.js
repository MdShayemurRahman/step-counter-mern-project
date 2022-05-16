import React from "react";
import {Link} from "react-router-dom"
import errorImg from "../images/404-img.gif";

const Error = () => {
  return (
    <div className="error-content">
      <img src={errorImg} alt="Error-page :(" />
      <h3>Oops... Page not found!</h3>
      <Link to="/">Back to homepage</Link>
    </div>
  );
};

export default Error;
