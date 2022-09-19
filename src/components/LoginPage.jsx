import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  // To uncomment when token is needed
  // const { setToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://ride-together.herokuapp.com/api/auth/login", formData)
      .then((response) => {
        const jwt = response.data.token;
        // To uncomment when token is needed
        // setToken(jwt);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>username</label>
      <input
        type="text"
        name="username"
        id="username"
        autoComplete="name"
        value={formData.username}
        onChange={(event) =>
          setFormData({
            ...formData,
            username: event.target.value,
          })
        }
      />
      <label>password</label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="current-password"
        value={formData.password}
        onChange={(event) =>
          setFormData({
            ...formData,
            password: event.target.value,
          })
        }
      />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default LoginPage;
