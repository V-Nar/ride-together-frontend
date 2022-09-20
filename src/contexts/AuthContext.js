import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Step one: create a context object to import elsewhere
const AuthContext = createContext();

// Create the wrapper component
const AuthContextWrapper = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const checkLogin = (token) => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setUser(null)
    }
  };

  // on initial render, check for existing token
  useEffect(() => {
    const existingToken = localStorage.getItem("AUTH_TOKEN");
    setToken(existingToken);
    checkLogin(existingToken);
    setIsLoading(false);
  }, []);
  useEffect(() => {
    if (token) {
      axios
        .get("https://ride-together.herokuapp.com/api/auth/me", {
          headers: {
            authorization: "Bearer " + token,
          },
          withCredentials: true,
        })
        .then((res) => {
          setUser({
            image: res.data.user.image,
            username: res.data.user.username,
            level: res.data.user.level,
            id: res.data.user._id,
          });
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  const updateToken = (token) => {
    localStorage.setItem("AUTH_TOKEN", token);
    setToken(token);
    // checkLogin(token);
  };

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    setToken("");
    checkLogin()
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        token,
        user,
        setToken: updateToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
