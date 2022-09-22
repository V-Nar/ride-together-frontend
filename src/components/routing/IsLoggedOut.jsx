import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const IsLoggedOut = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  // for some pages, we only want to see them when we're NOT logged in
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default IsLoggedOut;
