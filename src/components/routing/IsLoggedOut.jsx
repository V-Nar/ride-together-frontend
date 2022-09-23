import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const IsLoggedOut = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  // When we don't want to be logged in to see this
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default IsLoggedOut;
