import { createContext, useEffect, useState } from "react";

// Step one: create a context object to import elsewhere
const AuthContext = createContext();

// Create the wrapper component
const AuthContextWrapper = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //   const checkLogin = (token) => {
  //     if (token) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   };

  // on initial render, check for existing token
  useEffect(() => {
    const existingToken = localStorage.getItem("AUTH_TOKEN");
    setToken(existingToken);
    // checkLogin(existingToken);
    setIsLoading(false);
  }, []);

  const updateToken = (token) => {
    localStorage.setItem("AUTH_TOKEN", token);
    setToken(token);
    // checkLogin(token);
  };

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{ isLoading, isLoggedIn, token, setToken: updateToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
