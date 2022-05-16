import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ signIn, children }) => {
  if (!signIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
