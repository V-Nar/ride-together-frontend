import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import SendIcon from "@mui/icons-material/Send";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);
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
    <div>
      <form className="formClass" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          id="username"
          label="Username"
          variant="outlined"
          margin="normal"
          value={formData.username}
          onChange={(event) =>
            setFormData({
              ...formData,
              username: event.target.value,
            })
          }
        />
        <TextField
          fullWidth
          required
          id="password"
          label="password"
          variant="outlined"
          type="password"
          margin="normal"
          value={formData.password}
          onChange={(event) =>
            setFormData({
              ...formData,
              password: event.target.value,
            })
          }
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Log in
        </Button>
      </form>
      {errors && <h3 className="error"> {"Wrong username or password"} </h3>}
    </div>
  );
};

export default LoginPage;
