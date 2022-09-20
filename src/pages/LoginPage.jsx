import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, setToken } = useContext(AuthContext);
  const config = {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://ride-together.herokuapp.com/api/auth/login",
        formData,
        config
      )
      .then((response) => {
        const jwt = response.data;
        setToken(jwt);
        navigate("/");
      })
      .catch((error) => {
        setFormData({ username: "", password: "" });
        console.log(error);
        setErrors(true);
      });
  };

  return (
    <div style={{marginTop:'4.5rem'}}>
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
      {errors && <h3 className="error"> {"Wrong username or password"} </h3>}
    </div>
  );
};

export default LoginPage;
